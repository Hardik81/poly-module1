// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyToken.sol/MyToken.json");


const tokenAddress = "0xaA1b39aaC096e53708bb880f183F7AF98458322E"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    let prompts=["make me an image of fire elemental with fire powers","make me an image of water elemental with water powers","make me an image of air elemental with air powers","make me an image of earth elemental with earth powers","make me an image of life elemental with all powers"];
    let uris=["https://cyan-permanent-tiglon-346.mypinata.cloud/ipfs/QmbheZekqPoEWKDg6WJNNzztR8e6JWFFS5QSG7bqnV7GSp","https://cyan-permanent-tiglon-346.mypinata.cloud/ipfs/QmXuEX4cYZBN2jJ4fLztRU5fG9iMp57H7ymNZgjhTRUiBP","https://cyan-permanent-tiglon-346.mypinata.cloud/ipfs/QmaZfRfhSsr6Bq6ANDbf7xs1CGFb71a9ifCuB9MfsdHpYc","https://cyan-permanent-tiglon-346.mypinata.cloud/ipfs/QmXMWdqdENuoJEL6UX9GnuHZ15oMA6vHxQc1bPnjQw1KiN","https://cyan-permanent-tiglon-346.mypinata.cloud/ipfs/QmdE8c7jMf1dnZqWNJtbAesaD3tdAdxE8uvt6gz2depM2Y"];
    for(let i=0; i<prompts.length;i++){
        const tx = await token.safeMint(uris[i],prompts[i]);
        await tx.wait();
        console.log("token minted successfully");
  }
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
