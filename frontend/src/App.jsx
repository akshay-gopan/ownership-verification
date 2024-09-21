import React from 'react';
import Web3ContextProvider from './Web3ContextProvider';
import RegisterOwnership from './components/RegisterOwnership';
import VerifyOwnership from './components/VerifyOwnership';
import ViewAssets from './components/DisplayAssets';

function App() {
    return (
        <Web3ContextProvider>
            <div className="App">
                <h1>Ownership Verification DApp</h1>
                <RegisterOwnership />
                <VerifyOwnership />
                <ViewAssets />
            </div>
        </Web3ContextProvider>
    );
}

export default App;
