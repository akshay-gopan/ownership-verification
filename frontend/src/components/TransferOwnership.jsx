import React, { useState } from 'react';
import axios from 'axios';

const TransferOwnership = () => {
    const [productId, setProductId] = useState('');
    const [newUserId, setNewUserId] = useState('');
    const [message, setMessage] = useState('');

    const transferOwnership = async () => {
        try {
            const response = await axios.post('http://localhost:3000/transfer', { productId, newUserId });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error: ' + error.message);
        }
    };

    return (
        <div>
            <h3>Transfer Ownership</h3>
            <input
                type="text"
                placeholder="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <input
                type="text"
                placeholder="New User ID"
                value={newUserId}
                onChange={(e) => setNewUserId(e.target.value)}
            />
            <button onClick={transferOwnership}>Transfer</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default TransferOwnership;
