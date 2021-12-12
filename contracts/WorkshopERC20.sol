//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
// help 1, 2 : https://docs.openzeppelin.com/contracts/4.x/erc20

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// (1) use the imported ERC20 Contract
contract WorkshopERC20 is ERC20 {

// (2)implement the constructor
// give the name, symbol and amount to mint as arguments
// mint 1000 tokens to the deployer
constructor(string memory name, string memory symbol, uint256 amountToMint) ERC20(name, symbol) {
    _mint(msg.sender, amountToMint);
}


// help 3 : https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-transfer-address-uint256-
// help 3: https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-_burn-address-uint256-
// (3) rewrite the transfer function to burn 1 token on each transfer
  function _transfer(address sender, address recipient, uint256 amount) internal override {
        uint256 burnedAmount = 1 * 10 ** 18;
        super._transfer(sender, recipient, amount);
        _burn(recipient, burnedAmount);
    }

}
