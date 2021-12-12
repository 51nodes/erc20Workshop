//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
// help 1, 2 : https://docs.openzeppelin.com/contracts/4.x/erc20

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// (1) use the imported ERC20 Contract
contract WorkshopERC20 {

// (2)implement the constructor
// give the name, symbol and amount to mint as arguments
// mint 1000 tokens to the deployer


// help 3 : https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-transfer-address-uint256-
// help 3: https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-_transfer-address-address-uint256-
// help 3: https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20-_burn-address-uint256-
// help 3: https://docs.soliditylang.org/en/v0.8.4/contracts.html?highlight=override#function-overriding
// (3) rewrite the transfer function to burn 1 token on each transfer
// example: alice send 11 tokens to Bob. After running the transfer tx Bob should have +10 (balance + 10) tokens, alice have -11 (balance - 11) and extra 1 token is burned

}
