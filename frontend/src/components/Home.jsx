import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
            <h1 className="text-3xl font-bold mb-6">Ownership Verification DApp</h1>
            <div className="space-x-4">
                <button
                    onClick={() => navigate('/otp-form')}
                    className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
                >
                    Register Ownership
                </button>
                <button
                    onClick={() => navigate('/verify')}
                    className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
                >
                    Verify Ownership
                </button>
            </div>
        </div>
    );
};

export default HomePage;
