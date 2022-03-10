require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: {
      url: "https://polygon-mumbai.infura.io/v3/a39885f9f4ce4e58a20fbc85c2a3b794",
      accounts: [
        "73d0f0398b2543e84b29c173dca222333fc44a835d523f31c1067dca4a7b25b6",
      ],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
