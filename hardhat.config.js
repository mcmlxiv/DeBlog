require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: process.env.NEXT_PUBLIC_INFURA_ID,
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};