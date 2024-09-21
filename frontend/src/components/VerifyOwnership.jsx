// import React, { useState, useContext } from 'react';
// import { Web3Context } from '../Web3Context';
// import axios from 'axios';
// import Web3 from 'web3';

// const VerifyOwnership = () => {
//     const { web3, accounts } = useContext(Web3Context);
//     const [productId, setProductId] = useState('');
//     const [userId, setUserId] = useState('');

//     const verifyOwnership = async () => {
//         const ownershipHash = Web3.utils.keccak256(productId + userId);

//         try {
//             const response = await axios.post('http://localhost:3000/verify', {
//                 ownershipHash,
//                 userAddress: accounts[0]
//             });

//             if (response.data.isOwner) {
//                 alert('You are the owner of this product');
//             } else {
//                 alert('Ownership verification failed');
//             }
//         } catch (error) {
//             alert('Error: ' + error.message);
//         }
//     };

//     return (
//         <div>
//             <h3>Verify Ownership</h3>
//             <input
//                 type="text"
//                 placeholder="Product ID"
//                 value={productId}
//                 onChange={(e) => setProductId(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="User ID"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//             />
//             <button onClick={verifyOwnership}>Verify Ownership</button>
//         </div>
//     );
// };

// export default VerifyOwnership;


import React, { useState, useContext } from 'react';
import { Web3Context } from '../Web3Context';
import axios from 'axios';

const VerifyOwnership = () => {
    const { web3, accounts } = useContext(Web3Context); // Make sure web3 and accounts are correctly passed
    const [productId, setProductId] = useState('');
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false); // Loading state to indicate process

    const verifyOwnership = async () => {
        if (!web3 || accounts.length === 0) {
            alert('Web3 not initialized or no accounts found.');
            return;
        }

        setLoading(true); // Start loading
        const ownershipHash = web3.utils.keccak256(productId + userId); // Use web3 instance for keccak256

        try {
            const response = await axios.post('http://localhost:3000/verify', {
                ownershipHash,
                userAddress: accounts[0],
            });

            if (response.data.isOwner) {
                alert('You are the owner of this product');
            } else {
                alert('Ownership verification failed');
            }
        } catch (error) {
            console.error('Error during verification:', error);
            alert('Error: ' + error.message);
        } finally {
            setLoading(false); // Stop loading after the process
        }
    };

    return (
        <div>
            <h3>Verify Ownership</h3>
            <input
                type="text"
                placeholder="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={verifyOwnership} disabled={loading}>
                {loading ? 'Verifying...' : 'Verify Ownership'}
            </button>
        </div>
    );
};

export default VerifyOwnership;
