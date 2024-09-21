// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SecureBanking {
    // Events
    event KYCVerified(address indexed user);
    event Transaction(address indexed user, string transactionType, uint256 amount);
    event DailyLimitSet(address indexed user, uint256 limit);
    event DailySpentReset(address indexed user);

    // State variables
    mapping(address => bool) private isKYCVerified;
    mapping(address => uint256) private dailyLimit;
    mapping(address => uint256) private dailySpent;
    mapping(address => uint256) private transactionCount;

    // Example maximum daily limit
    uint256 public constant MAX_DAILY_LIMIT = 100 ether;

    // Modifier to check if KYC is verified
    modifier onlyVerified() {
        require(isKYCVerified[msg.sender], "KYC verification required");
        _;
    }

    // Function to verify KYC
    function verifyKYC() public {
        require(!isKYCVerified[msg.sender], "Already verified");
        isKYCVerified[msg.sender] = true;
        emit KYCVerified(msg.sender);
    }

    // Function to set daily limit for transactions
    function setDailyLimit(uint256 limit) public onlyVerified {
        require(limit > 0, "Limit must be greater than 0");
        require(limit <= MAX_DAILY_LIMIT, "Limit exceeds maximum daily limit");
        dailyLimit[msg.sender] = limit;
        emit DailyLimitSet(msg.sender, limit);
    }

    // Function to make transactions
    function makeTransaction(uint256 amount) public onlyVerified {
        require(amount > 0, "Transaction amount must be greater than zero");
        require(amount <= getRemainingDailyLimit(), "Transaction exceeds remaining daily limit");

        // Update daily spent and transaction count
        dailySpent[msg.sender] += amount;
        transactionCount[msg.sender] += 1;
        
        // Emit transaction event
        emit Transaction(msg.sender, "Payment", amount);
    }

    // Function to get total spent today
    function getTotalSpentToday() public view onlyVerified returns (uint256) {
        return dailySpent[msg.sender];
    }

    // Function to get total number of transactions today
    function getTotalTransactionsToday() public view onlyVerified returns (uint256) {
        return transactionCount[msg.sender];
    }

    // Function to get the remaining daily limit
    function getRemainingDailyLimit() public view onlyVerified returns (uint256) {
        return dailyLimit[msg.sender] - dailySpent[msg.sender];
    }

    // Function to reset daily spending and transaction count
    function resetDailySpent() public {
        dailySpent[msg.sender] = 0;
        transactionCount[msg.sender] = 0;
        emit DailySpentReset(msg.sender);
    }

    // Function to check if KYC is verified for the current user
    function isUserKYCVerified() public view returns (bool) {
        return isKYCVerified[msg.sender];
    }

    // Function to get user's daily limit
    function getUserDailyLimit() public view onlyVerified returns (uint256) {
        return dailyLimit[msg.sender];
    }
}
