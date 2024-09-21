import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';

export const Web3Context = createContext();

const Web3ContextProvider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    
    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(setAccounts);
        }
    }, []);

    return (
        <Web3Context.Provider value={{ web3, accounts }}>
            {children}
        </Web3Context.Provider>
    );
};

export default Web3ContextProvider;
