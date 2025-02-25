import { mainnet, flare } from 'viem/chains';
import { Chain } from 'viem';

export const ETH_MAINNET_PROVIDER = 'https://eth.llamarpc.com';
export const ETH_MAINNET_CHAIN_ID = 1;
export const ETH_MAINNET_CHAIN_NAME = 'Ethereum Mainnet';
export const ETH_MAINNET_CHAIN_SYMBOL = 'ETH';
export const ETH_MAINNET_CHAIN_DECIMALS = 18;
export const ETH_MAINNET_CHAIN_BLOCK_EXPLORER = 'https://etherscan.io';

export const ETH_TESTNET_PROVIDER = 'https://api.zan.top/eth-sepolia';
export const ETH_TESTNET_CHAIN_ID = 11155111;
export const ETH_TESTNET_CHAIN_NAME = 'Sepolia';
export const ETH_TESTNET_CHAIN_SYMBOL = 'ETH';
export const ETH_TESTNET_CHAIN_DECIMALS = 18;
export const ETH_TESTNET_CHAIN_BLOCK_EXPLORER = 'https://sepolia.etherscan.io';

const ganacheSepolia: Chain = {
  id: 11155111,
  name: 'Ganache Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Sepolia Ether',
    symbol: 'SepoliaETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:7545'] },
    public: { http: ['http://127.0.0.1:7545'] },
  },
};

const hardhat: Chain = {
  id: 31337,
  name: 'Hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] },
  },
};

export const CHAINS = {
  mainnet,
  flare,
  hardhat,
  ganacheSepolia,
};
