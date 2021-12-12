const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20", function () {

  let accounts;
  let WorkshopERC20;
  let erc20Instance;
  let deployer, alice, eve;
  const name = 'Workshop ERC20';
  const symbol = 'WERC';
  const mintAmount = BigNumber.from('1000');

  before( async () => {
    accounts = await ethers.getSigners();
    [deployer, alice, eve] = accounts;
    WorkshopERC20 = await ethers.getContractFactory("WorkshopERC20");
    erc20Instance = await WorkshopERC20.deploy(name, symbol, mintAmount.mul(BigNumber.from('1000000000000000000')));
    await erc20Instance.deployed();
  });

  it("Should return total supply and the balance of the owner", async function () {
    // check total supply
    // help https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-totalSupply--
    const totalSupply = await // get total supply
    expect(totalSupply.toString()).to.equal(mintAmount.mul(BigNumber.from('1000000000000000000')).toString());

    // check the balance of the deployer
    // help https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-balanceOf-address-
    const addressOfDeployer = deployer.address;
    const balanceOfDeployer = await // get balance of deployer
    expect(balanceOfDeployer.toString()).to.equal(mintAmount.mul(BigNumber.from('1000000000000000000')).toString());

    // transfer tokens from deployer to alice
    // help https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-transfer-address-uint256-
    const oneToken = BigNumber.from(`1000000000000000000`);
    const amountToTransfer = BigNumber.from('11000000000000000000');
    const addressOfAlice = alice.address;
    const transferTx = await erc20Instance.connect(deployer) // transfer token to alice
    await transferTx.wait();

    // check the balance of deployer
    const balanceOfAlice = await // get balance of alice
    expect(balanceOfDeployer.toString()).to.equal(amountToTransfer.sub(oneToken).toString());

    // check the balance of alice
    const newBalanceOfDeployer = await // get balance of deployer
    expect(balanceOfDeployer.toString()).to.equal(mintAmount.sub(amountToTransfer).toString());

  });
});
