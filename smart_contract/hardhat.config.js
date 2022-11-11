require("@nomiclabs/hardhat-ethers");
const URL = import.meta.env.GOERLI_URL;
const ACCOUNT = import.meta.env.ACCOUNT;
module.exports = {
  solidity: '0.8.0',
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `${URL}`,
      accounts: [`${ACCOUNT}`]
    }
  }
}