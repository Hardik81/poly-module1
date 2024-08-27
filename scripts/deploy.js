const hre = require("hardhat");

async function main() {
  // Get the smart contract
  const Mytoken = await hre.ethers.getContractFactory("MyToken");

  // Deploy it
  const mytoken = await Mytoken.deploy();
  await mytoken.waitForDeployment();

  // Display the contract address
  console.log(`Contract deployed to ${mytoken.target}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
