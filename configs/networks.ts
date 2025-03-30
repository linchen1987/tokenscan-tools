import { mainnet, flare, sepolia } from 'viem/chains';
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

const ganache: Chain = {
  id: 137,
  name: 'Ganache',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:7545'] },
    public: { http: ['http://127.0.0.1:7545'] },
  },
};

const flareTestnet: Chain = {
  // 114 coston2
  // 16 coston
  id: 16,
  name: 'Flare Coston',
  rpcUrls: {
    default: { http: ['https://coston-api.flare.network/ext/bc/C/rpc'] },
    public: { http: ['https://coston-api.flare.network/ext/bc/C/rpc'] },
  },
  nativeCurrency: {
    name: 'Coston',
    symbol: 'CFLR',
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: 'Flare Explorer',
      url: 'https://coston-explorer.flare.network/',
      apiUrl: 'https://coston-api.flare.network/ext/bc/C/rpc',
    },
  },
};

const flareSongbirdNet: Chain = {
  id: 19,
  name: 'Flare Songbird',
  rpcUrls: {
    default: { http: ['https://songbird-api.flare.network/ext/bc/C/rpc'] },
    public: { http: ['https://songbird-api.flare.network/ext/bc/C/rpc'] },
  },
  nativeCurrency: {
    name: 'Songbird',
    symbol: 'SGB',
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: 'Songbird Explorer',
      url: 'https://songbird-explorer.flare.network/',
      apiUrl: 'https://songbird-api.flare.network/ext/bc/C/rpc',
    },
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
  flareTestnet,
  flareSongbirdNet,
  hardhat,
  ganacheSepolia,
  ganache,
  sepolia,
};
