import React from 'react';
import Web3ContextProvider from './Web3Context';
import RegisterOwnership from './components/RegisterOwnership';
import VerifyOwnership from './components/VerifyOwnership';

function App() {
    return (
        <Web3ContextProvider>
            <div className="App">
                <h1>Ownership Verification DApp</h1>
                <RegisterOwnership />
                <VerifyOwnership />
            </div>
        </Web3ContextProvider>
    );
}

export default App;
