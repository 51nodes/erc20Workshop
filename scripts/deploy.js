const hre = require("hardhat");

async function main() {

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  const name = 'Workshop ERC20';
  const symbol = 'WERC';
  const mintAmount = hre.ethers.BigNumber.from('1000000000000000000000');
  // get compiled and relevant data
  const WorkshopERC20 = await hre.ethers.getContractFactory("WorkshopERC20");
  // deploy contract
  const erc20Instance = await WorkshopERC20.deploy(name, symbol, mintAmount);
  await erc20Instance.deployed();
  console.log("ERC20 deployed to:", erc20Instance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
