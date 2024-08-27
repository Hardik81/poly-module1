const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyToken.sol/MyToken.json");


const tokenAddress = "0xaA1b39aaC096e53708bb880f183F7AF98458322E"; // place your contract address here
const tokenABI = tokenContractJSON.abi;

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for(let i=0;i<5;i++){
        const tx = await token.promptdescription(i);
        console.log('The prompt for the token number',i," is", tx);
    }
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
