const Ownership = artifacts.require("OwnershipVerification");

module.exports = function (deployer) {
    deployer.deploy(Ownership);
};
