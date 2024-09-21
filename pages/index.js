

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const contractAddress = "0x4eb77cd652e8dea30c68cd6719d7d72d46b15970"; 
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "limit",
				"type": "uint256"
			}
		],
		"name": "DailyLimitSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "DailySpentReset",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "KYCVerified",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "makeTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetDailySpent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "limit",
				"type": "uint256"
			}
		],
		"name": "setDailyLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "transactionType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Transaction",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "verifyKYC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRemainingDailyLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalSpentToday",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalTransactionsToday",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserDailyLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isUserKYCVerified",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_DAILY_LIMIT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function App() {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [kycVerified, setKycVerified] = useState(false);
    const [dailyLimit, setDailyLimit] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0);
    const [totalTransactions, setTotalTransactions] = useState(0);
    const [amount, setAmount] = useState('');  // Define the state for the amount input
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractABI, signer);
                setProvider(provider);
                setContract(contract);
                const accounts = await provider.send('eth_requestAccounts', []);
                setAccount(accounts[0]);
                await fetchDailyLimit();
                await fetchTotalSpent();
                await fetchTotalTransactions();
            } catch (error) {
                console.error("Initialization failed:", error);
            }
        };
        init();
    }, []);

    const fetchDailyLimit = async () => {
        try {
            const limit = await contract.getUserDailyLimit();
            setDailyLimit(ethers.utils.formatEther(limit));
        } catch (error) {
            console.error("Failed to fetch daily limit:", error);
        }
    };

    const fetchTotalSpent = async () => {
        try {
            const spent = await contract.getTotalSpentToday();
            setTotalSpent(ethers.utils.formatEther(spent));
        } catch (error) {
            console.error("Failed to fetch total spent:", error);
            setMessage("Failed to fetch total spent: " + error.message);
            setIsError(true);
        }
    };

    const fetchTotalTransactions = async () => {
        try {
            const transactions = await contract.getTotalTransactionsToday();
            setTotalTransactions(transactions.toString());
        } catch (error) {
            console.error("Failed to fetch total transactions:", error);
            setMessage("Failed to fetch total transactions: " + error.message);
            setIsError(true);
        }
    };

    const verifyKYC = async () => {
        try {
            await contract.verifyKYC();
            setKycVerified(true);
            setMessage("KYC verification successful!");
            setIsError(false);
        } catch (error) {
            setMessage("KYC verification failed: " + error.message);
            setIsError(true);
        }
    };

    const setLimit = async (limit) => {
        try {
            await contract.setDailyLimit(ethers.utils.parseEther(limit));
            setDailyLimit(limit);
            setMessage(`Daily limit set to ${limit} ETH.`);
            setIsError(false);
        } catch (error) {
            setMessage("Failed to set daily limit: " + error.message);
            setIsError(true);
        }
    };

    const makeTransaction = async (amount) => {
        try {
            const txResponse = await contract.makeTransaction(ethers.utils.parseEther(amount));
            await txResponse.wait();  // Wait for transaction to be mined
            // Update totals locally
            setTotalSpent(prevTotalSpent => prevTotalSpent + parseFloat(amount));
            setTotalTransactions(prevTotalTransactions => prevTotalTransactions + 1);
            setMessage(`Transaction of ${amount} ETH successful!`);
            setIsError(false);
        } catch (error) {
            setMessage("Transaction failed: " + error.message);
            setIsError(true);
        }
    };
    const resetDailySpent = async () => {
        try {
            await contract.resetDailySpent();
            await fetchTotalSpent();
            await fetchTotalTransactions();
            setMessage("Daily spending and transaction count reset successfully.");
            setIsError(false);
        } catch (error) {
            setMessage("Failed to reset daily spending: " + error.message);
            setIsError(true);
        }
    };

    return (
        <div className="App">
            <h1>Secure Banking DApp</h1>
            <div className="account-info">
                <p><strong>Connected Account:</strong> {account}</p>
                <p><strong>KYC Verified:</strong> {kycVerified ? <FaCheckCircle style={{ color: 'green' }} /> : <FaTimesCircle style={{ color: 'red' }} />} {kycVerified ? "Yes" : "No"}</p>
                <p><strong>Daily Limit:</strong> {dailyLimit} ETH</p>
                <p><strong>Total Spent Today:</strong> {totalSpent} ETH</p>
                <p><strong>Total Transactions Today:</strong> {totalTransactions}</p>
            </div>

            {message && (
                <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>
            )}

            <div className="actions">
                <button onClick={verifyKYC} className="action-button">Verify KYC</button>
                <div className="input-group">
                    <input type="number" placeholder="Set Daily Limit (ETH)" onBlur={(e) => setLimit(e.target.value)} />
                </div>
                <div className="input-group">
                    <input
                        type="number"
                        placeholder="Enter the amount in ETH"
                        value={amount}  // Bind to amount state
                        onChange={(e) => setAmount(e.target.value)}  // Update amount as input changes
                    />
                </div>
                <button onClick={() => makeTransaction(amount)} className="action-button">Make Transaction</button>
                <button onClick={resetDailySpent} className="action-button">Reset Daily Spent</button>
            </div>

            <style jsx>{`
                .App {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(to right, #f0f4c3, #8bc34a);
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
                    max-width: 600px;
                    margin: auto;
                    text-align: center;
                }
                h1 {
                    color: #333;
                    margin-bottom: 20px;
                }
                .account-info p {
                    font-size: 18px;
                    margin: 10px 0;
                }
                .input-group {
                    margin: 10px 0;
                }
               .input-group {
    display: flex;
    justify-content: center; /* Center the input field */
    margin: 10px 0;
}

input[type="number"] {
    width: 80%; /* Set a specific width for better centering */
    padding: 7px;
    border: 2px solid #ccc;
    border-radius: 8px;
    margin-top: 5px;
}

              button.action-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 10px; /* Add this line for space between buttons */
}

button.action-button:hover {
    background-color: #0056b3;
}

                button.action-button:hover {
                    background-color: #0056b3;
                }
                .message {
                    font-size: 16px;
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 8px;
                }
                .success {
                    color: green;
                    background-color: #d4edda;
                }
                .error {
                    color: red;
                    background-color: #f8d7da;
                }
            `}</style>
        </div>
    );
}

export default App;
