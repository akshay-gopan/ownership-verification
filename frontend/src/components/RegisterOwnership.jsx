// import React, { useState, useContext } from 'react';
// import { Web3Context } from '../Web3Context';
// import axios from 'axios';
// import Web3 from 'web3';

// const RegisterOwnership = () => {
//     const { web3, accounts } = useContext(Web3Context);
//     const [productId, setProductId] = useState('');
//     const [userId, setUserId] = useState('');

//     const registerOwnership = async () => {
//         const ownershipHash = Web3.utils.keccak256(productId + userId);

//         try {
//             const response = await axios.post('http://localhost:3000/register', {
//                 ownershipHash,
//                 userAddress: accounts[0]
//             });

//             if (response.data.success) {
//                 alert('Ownership registered successfully');
//             } else {
//                 alert('Registration failed');
//             }
//         } catch (error) {
//             alert('Error: ' + error.message);
//         }
//     };

//     return (
//         <div>
//             <h3>Register Ownership</h3>
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
//             <button onClick={registerOwnership}>Register Ownership</button>
//         </div>
//     );
// };

// export default RegisterOwnership;


import React, { useState, useContext } from 'react';
import { Web3Context } from '../Web3Context';
import axios from 'axios';

const RegisterOwnership = () => {
    const { web3, accounts } = useContext(Web3Context);
    const [productId, setProductId] = useState('');
    const [userId, setUserId] = useState('');

    const registerOwnership = async () => {
        const ownershipHash = web3.utils.keccak256(productId + userId);
    
        try {
            const response = await axios.post('http://localhost:3000/register', {
                ownershipHash,
                userAddress: accounts[0],
            });
    
            if (response.data.success) {
                alert('Ownership registered successfully');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };
    

    return (
        <div>
            <h3>Register Ownership</h3>
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
            <button onClick={registerOwnership}>Register Ownership</button>
        </div>
    );
};

export default RegisterOwnership;
