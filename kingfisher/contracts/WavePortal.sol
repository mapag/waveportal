// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => string) waveMessages;

    constructor() {
        console.log("Initializing Wave Portal smart contract");
    }

    function wave(string memory _waveMessage) public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
        waveMessages[msg.sender] = _waveMessage;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getMessageAddress(address _address)
        public
        view
        returns (string memory)
    {
        console.log("Message of the address", _address, "is: ", waveMessages[_address]);
        return waveMessages[_address];
    }
}
