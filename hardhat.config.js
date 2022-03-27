require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  networks: {
    mumbai: {
      url: process.env.RPC,
      accounts: [process.env.PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000
    }
  },
  solidity: {
    version: "0.8.4",
  },
  paths: {
    sources: './contracts',
  },
};
