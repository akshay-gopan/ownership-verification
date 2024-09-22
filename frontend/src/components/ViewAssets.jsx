import React, { useState } from 'react';
import axios from 'axios';

const ViewAssets = () => {
    const [userId, setUserId] = useState('');
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchAssets = async () => {
        if (!userId) {
            alert('Please enter a user ID.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/assets', { userId });
            console.log('Response:', response.data);
            if (response.data.success) {
                setAssets(response.data.assets);
            } else {
                setError('Failed to fetch assets');
            }
        } catch (error) {
            console.error('Error fetching assets:', error);
            setError('Error: ' + error.message);
        } finally {
            setLoading(false);
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
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {assets.map((asset, index) => (
                    <li key={index}>{asset}</li>
                ))}
            </ul>
        </div>
    );
};

export default ViewAssets;
