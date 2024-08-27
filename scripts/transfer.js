const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyToken.sol/MyToken.json");

const tokenAddress = "0xaA1b39aaC096e53708bb880f183F7AF98458322E";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xd9740752c06962F700e6F3292DEAa20d30e6ac4F";

async function main() {

  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootTunnel);

  for (let i = 0; i <5; i++) {
    const approveTx = await tokenContract.approve(FxERC721RootTunnel, i);
    await approveTx.wait();
    console.log('Approval confirmed');

    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
    console.log("Tokens deposited");
  }
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
