export const ResABI = [
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
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NFTUnstaked",
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
      "type": "function",
      "name": "CheckRegistered",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address"
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
      "name": "FEE_WALLET",
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
      "name": "adWatches",
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
      "name": "addCollection",
      "inputs": [
        {
          "type": "string",
          "name": "collectionName",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "collectionReward",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "collectionAddress",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "rewardDuration",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "collections",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "collectionName",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "collectionType",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "collectionReward",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "colectionAddress",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "rewardDuration",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "collectionsByAddress",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "collectionName",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "collectionType",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "collectionReward",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "colectionAddress",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "rewardDuration",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "contractOwner",
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
      "name": "getReferralCode",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getReferralStakeCount",
      "inputs": [
        {
          "type": "string",
          "name": "refercode",
          "internalType": "string"
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
      "name": "getStakeHistory",
      "inputs": [
        {
          "type": "address",
          "name": "_user",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "tuple[]",
          "name": "",
          "components": [
            {
              "type": "address",
              "name": "staker",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "nftAddress",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "tokenId",
              "internalType": "uint256"
            },
            {
              "type": "bool",
              "name": "stakeCheck",
              "internalType": "bool"
            }
          ],
          "internalType": "struct NFTStakingContract.StakeHistory[]"
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
      "name": "isCodeValid",
      "inputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
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
      "name": "isStaked",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "collection",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
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
      "name": "lastStakeTime",
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
      "name": "referUnstakeNFT",
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
      "name": "referralCode",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "referralOwner",
      "inputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
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
      "name": "referralStakeNFT",
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
      "name": "referralcounts",
      "inputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "Referee",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "ReferCount",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "register",
      "inputs": [
        {
          "type": "string",
          "name": "fullname",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "refercode",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "referralProgramcode",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "registered",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
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
      "name": "showAdViews",
      "inputs": [
        {
          "type": "address",
          "name": "user",
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
      "name": "showMainNFT",
      "inputs": [],
      "outputs": [
        {
          "type": "tuple",
          "name": "",
          "components": [
            {
              "type": "string",
              "name": "collectionName",
              "internalType": "string"
            },
            {
              "type": "uint256",
              "name": "collectionType",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "collectionReward",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "colectionAddress",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "rewardDuration",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct NFTStakingContract.Collection"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "showReferralNFT",
      "inputs": [],
      "outputs": [
        {
          "type": "tuple",
          "name": "",
          "components": [
            {
              "type": "string",
              "name": "collectionName",
              "internalType": "string"
            },
            {
              "type": "uint256",
              "name": "collectionType",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "collectionReward",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "colectionAddress",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "rewardDuration",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct NFTStakingContract.Collection"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "showWeaponNFT",
      "inputs": [],
      "outputs": [
        {
          "type": "tuple",
          "name": "",
          "components": [
            {
              "type": "string",
              "name": "collectionName",
              "internalType": "string"
            },
            {
              "type": "uint256",
              "name": "collectionType",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "collectionReward",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "colectionAddress",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "rewardDuration",
              "internalType": "uint256"
            }
          ],
          "internalType": "struct NFTStakingContract.Collection"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakeDetails",
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
          "type": "address",
          "name": "collection",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "stakeTime",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "stakeEnd",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakeHistory",
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
          "type": "address",
          "name": "staker",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "nftAddress",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "bool",
          "name": "stakeCheck",
          "internalType": "bool"
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
      "name": "stakeStatus",
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
      "name": "stakedNFTs",
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
      "name": "stakingInfo",
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
          "name": "stakeCount",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "unstakeNFT",
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
      "name": "watchAd",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address"
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
      "type": "receive",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    }
  ] as const;