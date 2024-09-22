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