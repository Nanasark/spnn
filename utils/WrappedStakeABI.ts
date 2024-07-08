export const WrappedStakeABI = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [
        {
          "type": "address",
          "name": "_rewardToken",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_rewardInterval",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        }
      ],
      "outputs": []
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": []
    },
    {
      "type": "event",
      "name": "AdWatched",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "wrappedTokenId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newExpiryTime",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NFTStaked",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "nftContract",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "wrappedTokenId",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "type": "address",
          "name": "previousOwner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "newOwner",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardClaimed",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardIntervalIncreased",
      "inputs": [
        {
          "type": "uint256",
          "name": "newInterval",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardTokensDeposited",
      "inputs": [
        {
          "type": "address",
          "name": "depositor",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardTokensWithdrawn",
      "inputs": [
        {
          "type": "address",
          "name": "withdrawer",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "WrappedNFTBurned",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "wrappedTokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "WrappedNFTMinted",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "nftContract",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "originalTokenId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "wrappedTokenId",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "REWARD_PER_HOUR",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "addAuthorizedContract",
      "inputs": [
        {
          "type": "address",
          "name": "_contractAddress",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "claimReward",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "depositRewardTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasWrappedNFT",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "increaseRewardInterval",
      "inputs": [
        {
          "type": "uint256",
          "name": "newInterval",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "lastAdWatchTime",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "lastRewardTime",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "removeAuthorizedContract",
      "inputs": [
        {
          "type": "address",
          "name": "_contractAddress",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rewardBalance",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rewardInterval",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rewardToken",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "showReward",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakeNFT",
      "inputs": [
        {
          "type": "address",
          "name": "nftContract",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "stakedNFTsTime",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "type": "address",
          "name": "newOwner",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "userWrappedNFTs",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "watchAd",
      "inputs": [
        {
          "type": "uint256",
          "name": "wrappedTokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawRewardTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "wrappedNFTExists",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "wrappedTokenDetails",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "nftContract",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "staker",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "receive",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    }
  ] as const