
const hre = require("hardhat");

async function main() {

  const OptimusPunksNFT = await hre.ethers.getContractFactory("OptimusPunksNFT");
  const optimusPunksNFT = await OptimusPunksNFT.deploy();


  console.log("OptimusPunksNFT deployed to: ", optimusPunksNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
