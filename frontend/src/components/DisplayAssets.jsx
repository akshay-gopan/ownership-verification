import React, { useState } from 'react';
import axios from 'axios';

const ViewAssets = () => {
    const [userId, setUserId] = useState('');
    const [assets, setAssets] = useState([]);

    const fetchAssets = async () => {
        try {
            const response = await axios.post('http://localhost:3000/assets', { userId });
            console.log(userId);
            if (response.data.success) {
                setAssets(response.data.assets);
            } else {
                alert('Failed to fetch assets');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };
    

    return (
        <div>
            <h3>View Registered Assets</h3>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={fetchAssets}>Fetch Assets</button>
            <ul>
                {assets.map((asset, index) => (
                    <li key={index}>{asset}</li>
                ))}
            </ul>
        </div>
    );
};

export default ViewAssets;
