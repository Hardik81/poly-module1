# Nft transfer using fxroot Tunnel 

This is a project where a company basically wants to tranfer its data from sepolia to polygon.

## Getting Started

### Executing program

To run this program, you can use hardhat for every function and deploying contract.

Once you creat your own hardhat space you just have to initualize hardhat and make a hardhatconfig.js file using two commands

```
npm init -y
npx hardhat
```

when you do this you create two folders contracts and scripts. In contract you add solididty file that is your contract to be deployed and scripts we have 5 files:

1. balance.js: to check the number of nfts
2. mint.js : to mint tokens in contract to an address
3. deploy.js : to deploy our contract of tokens
4. pd.js : to run promptdescription method
5. transfer.js : to transfer the tokens from sepolia to polygon

also befor you run deploy.js file you need to add sepolia and polygon_amoy networks for more information check my hardhatconfig.js file
And fxERC721 contract is also available on the site github and for abi checkout my repo.

Atlast just run each script in order deploy->mint->transfer->balance->promptDescription(pd) 

```
npx hardhat run scripts/filename.js --network sepolia/polygon_amoy (as per requiremnt choose network)
```

## Authors

Hardik 
hardikxibscience238@gmail.com
