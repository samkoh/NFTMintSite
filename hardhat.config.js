
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.REACT_APP_GOERLI_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY
  }
};