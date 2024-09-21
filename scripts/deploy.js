const hre = require("hardhat");

async function main() {
    // Deploy the SecureBanking contract
    const SecureBanking = await hre.ethers.getContractFactory("SecureBanking");
    const secureBanking = await SecureBanking.deploy();
    await secureBanking.deployed();

    // Output the address where the contract is deployed
    console.log(`SecureBanking contract deployed to: ${secureBanking.address}`);
}

// Execute the main function and handle errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
