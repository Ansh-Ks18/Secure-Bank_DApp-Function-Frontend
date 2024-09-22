# 🌐 Welcome to SecureBank DApp

> 💸 A Comprehensive Web3 Banking Platform with Enhanced Security Features.

## Description

The **SecureBank DApp** is an advanced decentralized banking application leveraging Ethereum smart contracts to deliver a secure and efficient banking experience. Users can manage Ether transactions, perform KYC (Know Your Customer) verification, set daily transaction limits, track their spending, and ensure secure interactions within the blockchain ecosystem. This project employs Solidity for smart contracts, Ethers.js for blockchain interaction, and MetaMask for account management.

## 🎥 Video Tutorial

For a detailed video walkthrough, watch the [video](https://drive.google.com/file/d/17A9XLpUIn5b6CzPtGkpkeFMz1NRPLWn3/view?usp=sharing).

## Technologies Used 🛠️

![JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg) ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white) ![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white) ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![MetaMask](https://avatars.githubusercontent.com/u/11744586?s=48&v=4) ![Hardhat](https://hardhat.org/_next/static/media/hardhat-logo.5c5f687b.svg)

This project incorporates several leading technologies:

- **Solidity**: Utilized to write smart contracts for KYC verification, daily transaction limits, and secure Ether transfers. [Learn more about Solidity](https://docs.soliditylang.org/).
  
- **Ethers.js**: JavaScript library to interact with Ethereum, used for transactions and interacting with the deployed contract. [Explore Ethers.js](https://docs.ethers.org/v5/).

- **MetaMask**: A wallet browser extension to handle Ethereum accounts and sign transactions. [Get MetaMask](https://metamask.io/).

- **Hardhat**: A powerful Ethereum development environment used for smart contract deployment and testing. [Discover Hardhat](https://hardhat.org/).

## Key Features ✨

1. **KYC Verification**: Users must complete KYC verification before performing transactions.
2. **Daily Transaction Limit**: Users can set and monitor their daily transaction limits.
3. **Transaction Monitoring**: Tracks daily spending and transaction count to prevent overspending.
4. **Transaction Reset**: Daily transaction and spending can be reset at the start of each new day.

## Installation ⬇️

### Get the project running locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/securebank-dapp.git
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Start the Hardhat node**:
   ```sh
   npx hardhat node
   ```
4. **Deploy the SecureBanking contract**:
   ```sh
   npx hardhat run --network localhost scripts/deploy.js
   ```
5. **Start the development server**:
   ```sh
   npm run dev
   ```

## MetaMask Configuration 🦊

1. **Add Hardhat's local blockchain**:
   - **Network Name**: Localhost
   - **RPC URL**: http://127.0.0.1:8545/
   - **Chain ID**: 31337
   - **Currency Symbol**: ETH
2. **Import Hardhat Accounts**: Use the private keys from Hardhat to import testing accounts into MetaMask for interacting with the dApp.

Refer to [this guide](https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node) for more detailed steps.

## Usage 🪜

1. **KYC Verification**: Start by verifying your identity using the "Verify KYC" option.
2. **Set Daily Limit**: Use the "Set Daily Limit" function to define your transaction limit.
3. **Make Transactions**: Perform transactions (e.g., payments) and track your daily usage.
4. **Reset Daily Spending**: Reset your daily limits to refresh your transaction allowances.

## Smart Contract Details 🔗

The `SecureBanking` contract located in `contracts/SecureBanking.sol` offers advanced functionality for a secure banking experience.

### Key Contract Functions

- **verifyKYC**: Verifies KYC for users, enabling transactions.
- **setDailyLimit**: Allows users to set a limit on their daily spending.
- **makeTransaction**: Facilitates Ether payments while tracking spending.
- **getTotalSpentToday**: Shows how much Ether has been spent today.
- **resetDailySpent**: Resets daily spending and transaction count.

### Example Usage:

```solidity
// Set daily transaction limit
function setDailyLimit(uint256 limit) public onlyVerified { 
    require(limit <= MAX_DAILY_LIMIT, "Limit exceeds maximum"); 
    dailyLimit[msg.sender] = limit; 
}

// Perform transaction
function makeTransaction(uint256 amount) public onlyVerified { 
    require(amount <= getRemainingDailyLimit(), "Exceeds daily limit"); 
    dailySpent[msg.sender] += amount; 
    emit Transaction(msg.sender, "Payment", amount);
}
```

## Project Structure 📁

- **`contracts/`**: Contains the Solidity smart contracts.
  - `SecureBanking.sol`: Main smart contract for Secure Bank DApp.
- **`scripts/`**: Deployment scripts.
  - `deploy.js`: Deploys the `SecureBanking` contract.
- **`src/`**: Front-end React components and application logic.
   - `index.js`: Application entry point.

## Future Improvements 🛠️

- **Role-Based Access Control**: Add roles for admin, users, and managers to enhance security.
- **Multi-Factor Authentication**: Integrate 2FA for more secure transactions.
- **User Dashboard**: Provide users with a detailed transaction history and analytics.
- **Notifications**: Real-time alerts for spending limits and transaction confirmations.

## Contributing 🤝

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a feature branch**.
3. **Commit your changes**.
4. **Open a pull request**.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Project Demo and Screenshots
# 🌐 Welcome to SecureBank DApp

> 💸 A Comprehensive Web3 Banking Platform with Enhanced Security Features.

## Description

The **SecureBank DApp** is an advanced decentralized banking application leveraging Ethereum smart contracts to deliver a secure and efficient banking experience. Users can manage Ether transactions, perform KYC (Know Your Customer) verification, set daily transaction limits, track their spending, and ensure secure interactions within the blockchain ecosystem. This project employs Solidity for smart contracts, Ethers.js for blockchain interaction, and MetaMask for account management.

## Technologies Used 🛠️

![JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg) ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white) ![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white) ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![MetaMask](https://avatars.githubusercontent.com/u/11744586?s=48&v=4) ![Hardhat](https://hardhat.org/_next/static/media/hardhat-logo.5c5f687b.svg)

This project incorporates several leading technologies:

- **Solidity**: Utilized to write smart contracts for KYC verification, daily transaction limits, and secure Ether transfers. [Learn more about Solidity](https://docs.soliditylang.org/).
  
- **Ethers.js**: JavaScript library to interact with Ethereum, used for transactions and interacting with the deployed contract. [Explore Ethers.js](https://docs.ethers.org/v5/).

- **MetaMask**: A wallet browser extension to handle Ethereum accounts and sign transactions. [Get MetaMask](https://metamask.io/).

- **Hardhat**: A powerful Ethereum development environment used for smart contract deployment and testing. [Discover Hardhat](https://hardhat.org/).

## Key Features ✨

1. **KYC Verification**: Users must complete KYC verification before performing transactions.
2. **Daily Transaction Limit**: Users can set and monitor their daily transaction limits.
3. **Transaction Monitoring**: Tracks daily spending and transaction count to prevent overspending.
4. **Transaction Reset**: Daily transaction and spending can be reset at the start of each new day.

## Installation ⬇️

### Get the project running locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/securebank-dapp.git
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Start the Hardhat node**:
   ```sh
   npx hardhat node
   ```
4. **Deploy the SecureBanking contract**:
   ```sh
   npx hardhat run --network localhost scripts/deploy.js
   ```
5. **Start the development server**:
   ```sh
   npm run dev
   ```

## MetaMask Configuration 🦊

1. **Add Hardhat's local blockchain**:
   - **Network Name**: Localhost
   - **RPC URL**: http://127.0.0.1:8545/
   - **Chain ID**: 31337
   - **Currency Symbol**: ETH
2. **Import Hardhat Accounts**: Use the private keys from Hardhat to import testing accounts into MetaMask for interacting with the dApp.

Refer to [this guide](https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node) for more detailed steps.

## Usage 🪜

1. **KYC Verification**: Start by verifying your identity using the "Verify KYC" option.
2. **Set Daily Limit**: Use the "Set Daily Limit" function to define your transaction limit.
3. **Make Transactions**: Perform transactions (e.g., payments) and track your daily usage.
4. **Reset Daily Spending**: Reset your daily limits to refresh your transaction allowances.

## Smart Contract Details 🔗

The `SecureBanking` contract located in `contracts/SecureBanking.sol` offers advanced functionality for a secure banking experience.

### Key Contract Functions

- **verifyKYC**: Verifies KYC for users, enabling transactions.
- **setDailyLimit**: Allows users to set a limit on their daily spending.
- **makeTransaction**: Facilitates Ether payments while tracking spending.
- **getTotalSpentToday**: Shows how much Ether has been spent today.
- **resetDailySpent**: Resets daily spending and transaction count.

### Example Usage:

```solidity
// Set daily transaction limit
function setDailyLimit(uint256 limit) public onlyVerified { 
    require(limit <= MAX_DAILY_LIMIT, "Limit exceeds maximum"); 
    dailyLimit[msg.sender] = limit; 
}

// Perform transaction
function makeTransaction(uint256 amount) public onlyVerified { 
    require(amount <= getRemainingDailyLimit(), "Exceeds daily limit"); 
    dailySpent[msg.sender] += amount; 
    emit Transaction(msg.sender, "Payment", amount);
}
```

## Project Structure 📁

- **`contracts/`**: Contains the Solidity smart contracts.
  - `SecureBanking.sol`: Main smart contract for Secure Bank DApp.
- **`scripts/`**: Deployment scripts.
  - `deploy.js`: Deploys the `SecureBanking` contract.
- **`src/`**: Front-end React components and application logic.
    - `index.js`: Application entry point.

## Future Improvements 🛠️

- **Role-Based Access Control**: Add roles for admin, users, and managers to enhance security.
- **Multi-Factor Authentication**: Integrate 2FA for more secure transactions.
- **User Dashboard**: Provide users with a detailed transaction history and analytics.
- **Notifications**: Real-time alerts for spending limits and transaction confirmations.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Project Demo and Screenshots

![Screenshot (428)](https://github.com/user-attachments/assets/bd3cae77-8c8f-468f-9583-965d94d9ba9a)


## 👨‍💻 Authors

<img src="https://github.com/user-attachments/assets/2c7a71d9-b247-4955-86f7-40c10eeaf80d " width="50" height="40">**Anshu Kumar** - [@AnshuKumar](https://github.com/Ansh-Ks18)

Passionate about solving real-world problems through code and constantly striving for excellence in software development. Connect with me on GitHub to explore innovative projects and collaborative contributions!

---

Thank you for using SecureBank DApp! If you have any suggestions or issues, feel free to raise them in the repository.

