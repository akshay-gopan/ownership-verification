const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Web3} = require('web3');
const contractABI = require('../build/contracts/OwnershipVerification.json'); 
const contractAddress = "0x9310CEd0A8E4B518706abedf9B902ca9E0158947"; // Replace with your contract address

const app = express();
app.use(bodyParser.json());
app.use(cors());

const ganacheUrl = 'http://127.0.0.1:7545';
const web3 = new Web3(ganacheUrl);
const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

// Register Ownership Route
app.post('/register', async (req, res) => {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    try {
        const ownershipHash = web3.utils.keccak256(userId + productId);
        const accounts = await web3.eth.getAccounts();
        await contract.methods.registerOwnership(ownershipHash).send({ from: accounts[0] });
        res.json({ success: true });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Verify Ownership Route
app.post('/verify', async (req, res) => {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    try {
        const ownershipHash = web3.utils.keccak256(userId + productId);
        const ownerAddress = await contract.methods.isOwner(ownershipHash).call();
        const isOwner = ownerAddress !== '0x0000000000000000000000000000000000000000';
        
        res.json({ isOwner });
    } catch (error) {
        console.error('Error in verification:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Get User Assets Route
app.post('/assets', async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
      return res.status(400).json({ success: false, message: 'Missing userId' });
  }

  try {
      const assets = []; // Logic to retrieve assets based on userId
      res.json({ success: true, assets });
  } catch (error) {
      console.error('Error fetching assets:', error);
      res.status(500).json({ success: false, message: 'Server error' });
  }
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
