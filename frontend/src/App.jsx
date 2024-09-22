import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Web3ContextProvider from './Web3ContextProvider';
import RegisterOwnership from './components/RegisterOwnership';
import VerifyOwnership from './components/VerifyOwnership';
import ViewAssets from './components/ViewAssets';
import OtpForm from './components/OtpForm';
import HomePage from './components/Home';

function App() {
    return (
        <Web3ContextProvider>
            <Router>
                <div>
                   
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/otp-form" element={<OtpForm />} />
                        <Route path="/register" element={<RegisterOwnership />} />
                        <Route path="/verify" element={<VerifyOwnership />} />
                        <Route path="/view-assets" element={<ViewAssets />} />
                    </Routes>
                </div>
            </Router>
        </Web3ContextProvider>
    );
}

export default App;
