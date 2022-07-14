require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/A5BzofeCqZ8aIc-oTNWJeenMlH-nZpSS",
      accounts: ["c92f7a659c5a6014da5a6f3e88832254bdf3a95672a8bd8825da30678ab32b2f"]
    },
  },
};