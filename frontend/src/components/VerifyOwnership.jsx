import React, { useState } from 'react';
import axios from 'axios';

const VerifyOwnership = () => {
    const [productId, setProductId] = useState('');
    const [userId, setUserId] = useState('');

    const verifyOwnership = async () => {
        try {
            const response = await axios.post('http://localhost:3000/verify', {
                userId,
                productId
            });

            if (response.data.isOwner) {
                alert('You are the owner of this product');
            } else {
                alert('Ownership verification failed');
            }
        } catch (error) {
            alert('Error: ' + error.message);
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
            <button onClick={verifyOwnership}>Verify Ownership</button>
        </div>
    );
};

export default VerifyOwnership;
