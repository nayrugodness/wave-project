require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/A5BzofeCqZ8aIc-oTNWJeenMlH-nZpSS",
      accounts: ["YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY"]
    },
  },
};