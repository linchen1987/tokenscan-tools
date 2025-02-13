# Token Tools

A collection of cryptocurrency tools for reading information from various blockchain networks.

这是一个加密货币工具集，用于读取各种区块链网络的信息。

## Features | 功能

- EVM account information query (balance, transaction count, token balance) | EVM 账户信息查询（余额、交易数量、代币余额）
- ERC20 token information query (name, symbol, decimals, total supply) | ERC20 代币信息查询（名称、符号、小数位数、总供应量）

## Prerequisites | 前置要求

- Node.js (v20 or higher)
- npm

## Installation | 安装

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install
```

## Configuration | 配置

Create a `.env` file in the root directory with the following variables:

在根目录创建包含以下变量的 `.env` 文件：

```
CHAIN=             # Chain name (e.g. mainnet, sepolia)
EVM_ADDRESS=       # Your EVM wallet address (0x...)
TOKEN_ADDRESS=     # ERC20 token contract address (0x...)
```

## Available Scripts | 可用脚本

- `tsx scripts/evm-address-info.ts`: Query EVM account information (balance, transaction count, token balance) | 查询 EVM 账户信息（余额、交易数量、代币余额）
- `tsx scripts/token-info.ts`: Query ERC20 token information (name, symbol, decimals, total supply) | 查询 ERC20 代币信息（名称、符号、小数位数、总供应量）

## Example Usage | 使用示例

1. Query account information | 查询账户信息:
```bash
tsx scripts/evm-address-info.ts
```

2. Query token information | 查询代币信息:
```bash
tsx scripts/token-info.ts
```
