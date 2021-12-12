// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  //const name = 'Workshop ERC20';
  //const symbol = 'WERC';
  //const mintAmount = BigNumber.from('1000000000000000000000');
  //const WorkshopERC20 = await hre.ethers.getContractFactory("WorkshopERC20");
  //const erc20Instance = await WorkshopERC20.deploer(name, symbol, mintAmount);
  //await erc20Instance.deployed();
  //console.log("ERC20 deployed to:", erc20Instance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
