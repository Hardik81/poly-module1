require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {    
    hardhat: {},   
    sepolia: {     
     url: `https://rpc.sepolia.org`,      
     accounts: ["private key here"],   
    },
    polygon_amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      account: ["private key here"], 
    }
  }
};
