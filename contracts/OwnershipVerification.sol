// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract OwnershipVerification {
    // Mapping to store ownership hashes
    mapping(bytes32 => address) public ownershipHashes;

    // Mapping to track assets for each user
    mapping(address => bytes32[]) public userAssets;

    // Register ownership
    function registerOwnership(bytes32 _ownershipHash) public {
        ownershipHashes[_ownershipHash] = msg.sender; // Store the ownership hash
        userAssets[msg.sender].push(_ownershipHash); // Track the asset for the user
    }

    // Check ownership
    function isOwner(bytes32 _ownershipHash) public view returns (address) {
        return ownershipHashes[_ownershipHash];
    }

    // Get assets for the caller
    function getAssets() public view returns (bytes32[] memory) {
        return userAssets[msg.sender]; // Return assets for the user calling the function
    }
}
