const hre = require('hardhat');

async function main() {
	const supplyChainFactory = await hre.ethers.getContractFactory('SupplyChain');
	const supplyChain = await supplyChainFactory.deploy();

	await supplyChain.deployed();

	console.log('SupplyChain deployed...');
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
