require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ganache');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL;
const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY;

module.exports = {
	defaultNetwork: 'ganache',
	solidity: '0.8.9',
	networks: {
		rinkeby: {
			url: RINKEBY_RPC_URL,
			accounts: [RINKEBY_PRIVATE_KEY],
		},
		ganache: {
			url: GANACHE_RPC_URL,
		},
		hardhat: {},
	},
};
