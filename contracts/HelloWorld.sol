// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.10 and less than 0.9.0 
pragma solidity ^0.8.0;

//contract name is MyFirstPolygonContract 
contract HelloWorld {


    string private name;
    uint private amount;

//set
    function setName(string memory newName) public {
        name = newName;
    }

//get
    function getName () public view returns (string memory) {
        return name;
    }
    
//set
    function setAmount(uint newAmount) public {
        amount = newAmount;      
    }

//get
    function getAmount() public view returns (uint) {
        return amount;
    }
}