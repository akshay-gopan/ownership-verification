import React, { useState } from 'react';
import axios from 'axios';

const RegisterOwnership = () => {
    const [productId, setProductId] = useState('');
    const [userId, setUserId] = useState('');

    const registerOwnership = async () => {
        try {
            const response = await axios.post('http://localhost:3000/register', {
                userId,
                productId
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
