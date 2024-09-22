import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegisterOwnership = () => {
    const [productId, setProductId] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();
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

    
        <div className="form-container bg-white shadow-lg rounded-lg p-6 mt-14 max-w-sm mx-auto">

    <h3 className="text-2xl font-bold text-indigo-700 mb-4">Register Ownership</h3>
    <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button
        onClick={registerOwnership}
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300"
    >
        Register
    </button>
    <button
    onClick={() => navigate('/')}
    className="w-full py-2 bg-red-500 text-white rounded hover:bg-indigo-600 transition duration-300 mt-4"
>
    Logout
</button>

</div>


    );
};

export default RegisterOwnership;