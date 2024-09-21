const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Web3 } = require('web3');
const contractABI = require('../build/contracts/OwnershipVerification.json'); 
const contractAddress = "0x1014c2EdBae27b4823d60eaD6b9aeA77c6d52D8a"; // Replace with your contract address

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow requests from different origins

// Setup Web3 and the contract
const ganacheUrl = 'HTTP://127.0.0.1:7545'; // Default to local Ganache
const web3 = new Web3(ganacheUrl); // Instantiate Web3 with the Ganache URL

// Initialize contract with ABI and address
const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

// Register Ownership Route
app.post('/register', async (req, res) => {
    const { ownershipHash, userAddress } = req.body;

    if (!ownershipHash || !userAddress) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    try {
        // Add logic to interact with the contract (e.g., call contract method to register the ownership)
        console.log('Ownership Hash:', ownershipHash);
        console.log('User Address:', userAddress);

        // Assuming success for now:
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/verify', async (req, res) => {
  const { ownershipHash, userAddress } = req.body;

  console.log('Received:', { ownershipHash, userAddress }); // Log the incoming data

  if (!ownershipHash || !userAddress) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  try {
      // Add your verification logic here
      const isOwner = await contract.methods.isOwner(ownershipHash, userAddress).call();

      res.json({ isOwner });
  } catch (error) {
      console.error('Error in verification:', error);
      res.status(500).json({ success: false, message: 'Server error' });
  }
});



// Server listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const {Web3} = require('web3'); // No need for destructuring
// const contractABI = require('../build/contracts/OwnershipVerification.json'); 
// const contractAddress = "0x30F10A0Ee7327febDF82Ed6aB48434714d8188dA"; // Replace with your contract address

// const app = express();
// app.use(bodyParser.json());
// app.use(cors()); // Allow requests from different origins

// // Setup Web3 and the contract
// const ganacheUrl = 'http://127.0.0.1:7545'; // Use http instead of HTTP
// const web3 = new Web3(ganacheUrl); // Instantiate Web3 with the Ganache URL

// // Initialize contract with ABI and address
// const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

// // Register Ownership Route
// app.post('/register', async (req, res) => {
//     const { ownershipHash, userAddress } = req.body;

//     if (!ownershipHash || !userAddress) {
//         return res.status(400).json({ success: false, message: 'Missing fields' });
//     }

//     try {
//         // Assuming we have a function to register ownership
//         // You need to implement the logic to call your smart contract method
//         await contract.methods.registerCommodity(/* your parameters here */).send({ from: userAddress });

//         res.json({ success: true });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// // Verify Ownership Route
// app.post('/verify', async (req, res) => {
//     const { ownershipHash, userAddress } = req.body;

//     if (!ownershipHash || !userAddress) {
//         return res.status(400).json({ success: false, message: 'Missing fields' });
//     }

//     try {
//         // Implement verification logic here
//         const isOwner = await contract.methods.getCommodity(ownershipHash).call({ from: userAddress });

//         // Assuming your getCommodity method returns the owner's address
//         const isVerified = isOwner.owner === userAddress;

//         res.json({ isOwner: isVerified });
//     } catch (error) {
//         console.error('Error in verification:', error);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// // Server listen
// const PORT = process.env.PORT || 3000; // Use environment variable for the port
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
