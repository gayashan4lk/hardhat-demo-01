const hre = require('hardhat');

async function main() {
	const supplyChainFactory = await hre.ethers.getContractFactory('SupplyChain');
	const supplyChain = await supplyChainFactory.deploy();

	console.log('Deploying SupplyChain contract...');

	await supplyChain.deployed();

	console.log(`SupplyChain deployed to: ${supplyChain.address}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
