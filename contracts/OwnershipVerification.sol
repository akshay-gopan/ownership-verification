// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract OwnershipVerification {
    mapping(bytes32 => address) public ownershipHashes;

    // Register ownership
    function registerOwnership(bytes32 _ownershipHash) public {
        ownershipHashes[_ownershipHash] = msg.sender;
    }

    // Check ownership
    function isOwner(bytes32 _ownershipHash) public view returns (address) {
        return ownershipHashes[_ownershipHash];
    }
}
