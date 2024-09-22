const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Web3} = require('web3');
const contractABI = require('../build/contracts/OwnershipVerification.json'); 
const contractAddress = "0x4f046F8C3A3eBc232764Ecc28057d9771eECb038"; // Replace with your contract address

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

// In-memory storage for OTPs (for demonstration purposes)
let otpStore = {};

// Function to generate a random 6-digit OTP
const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Route to send OTP
// app.post('/send-otp', (req, res) => {
//   const { phone, aadhar } = req.body;

//   // Validate phone number and Aadhar number
//   if (phone.length === 10 && aadhar.length === 12) {
//     const otp = generateOtp();
    
//     // Store OTP associated with the phone number
//     otpStore[phone] = otp;
    
//     console.log(`Generated OTP for phone ${phone}: ${otp}`);  // For debugging

//     // Simulate sending OTP (Here, you can integrate an SMS API to send the actual OTP)
//     res.json({ message: 'OTP sent successfully', otp });  // Remove otp from response in production
//   } else {
//     res.status(400).json({ message: 'Invalid Aadhar or Phone Number' });
//   }
// });

// Route to verify OTP
// app.post('/verify-otp', (req, res) => {
//   const { phone, otp } = req.body;

//   // Check if the OTP is correct
//   if (otpStore[phone] && otpStore[phone] === otp) {
//     delete otpStore[phone];  // Clear OTP after successful verification
//     res.json({ message: 'OTP verified successfully. You are logged in!' });
//   } else {
//     res.status(400).json({ message: 'Invalid OTP or phone number' });
//   }
// });

// Get User Assets Route
// Get User Assets Route
// app.post('/assets', async (req, res) => {
//     const { userId } = req.body;

//     if (!userId) {
//         return res.status(400).json({ success: false, message: 'Missing userId' });
//     }

//     try {
//         const ownershipHash = web3.utils.keccak256(userId); // Create the hash based on userId
//         const assets = await contract.methods.getAssets(ownershipHash).call(); // Fetch assets using the ownership hash
//         res.json({ success: true, assets });
//     } catch (error) {
//         console.error('Error fetching assets:', error);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});