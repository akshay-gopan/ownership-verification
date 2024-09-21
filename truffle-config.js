// Uncomment and configure dotenv for managing secrets
// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Standard Ethereum port for Ganache
      network_id: 5777,      // Ganache network ID
      gas: 6721975,
      gasPrice: 20000000000, // 20 gwei
    },
    // To add more networks, uncomment and configure accordingly
    // goerli: {
    //   provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
    //   network_id: 5,       // Goerli network ID
    //   confirmations: 2,    // # of confirmations to wait
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out
    //   skipDryRun: true,    // Skip dry run before migrations
    // },
    // private: {
    //   provider: () => new HDWalletProvider(MNEMONIC, `https://network.io`),
    //   network_id: 2111,    // Custom network ID
    //   production: true,    // Treat as public network
    // }
  },

  mocha: {
    // Set mocha options like timeout here
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.19",     // Use this Solidity version
      // settings: {          // Solidity optimizer and EVM version settings
      //   optimizer: {
      //     enabled: false,
      //     runs: 200
      //   },
      //   evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB (disabled by default)
  // db: {
  //   enabled: false,
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
