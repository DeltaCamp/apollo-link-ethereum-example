import { AbiMapping } from 'apollo-link-web3'

export const abiMapping = new AbiMapping()

abiMapping.addAbi('CoordinationGame', [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "verifications",
      "outputs": [
        {
          "name": "verifierSelectedAt",
          "type": "uint256"
        },
        {
          "name": "verifier",
          "type": "address"
        },
        {
          "name": "verifierSecret",
          "type": "bytes32"
        },
        {
          "name": "verifierSubmittedAt",
          "type": "uint256"
        },
        {
          "name": "verifierChallengedAt",
          "type": "uint256"
        },
        {
          "name": "verifierDepositWei",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "applicationStakeAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseApplicationFeeUsdWei",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "verifierTimeoutInSeconds",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "applicantRevealTimeoutInSeconds",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tilRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "games",
      "outputs": [
        {
          "name": "applicationId",
          "type": "bytes32"
        },
        {
          "name": "applicant",
          "type": "address"
        },
        {
          "name": "secretAndRandomHash",
          "type": "bytes32"
        },
        {
          "name": "randomHash",
          "type": "bytes32"
        },
        {
          "name": "hint",
          "type": "bytes"
        },
        {
          "name": "createdAt",
          "type": "uint256"
        },
        {
          "name": "updatedAt",
          "type": "uint256"
        },
        {
          "name": "applicationFeeWei",
          "type": "uint256"
        },
        {
          "name": "applicantTokenDeposit",
          "type": "uint256"
        },
        {
          "name": "randomBlockNumber",
          "type": "uint256"
        },
        {
          "name": "applicantSecret",
          "type": "bytes32"
        },
        {
          "name": "whistleblower",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "applicant",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "secretAndRandomHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "randomHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "hint",
          "type": "bytes"
        }
      ],
      "name": "NewApplication",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "applicant",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "verifier",
          "type": "address"
        }
      ],
      "name": "VerifierSelected",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "verifier",
          "type": "address"
        }
      ],
      "name": "VerifierSubmissionTimedOut",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "verifier",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "secret",
          "type": "bytes32"
        }
      ],
      "name": "VerifierSecretSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "verifier",
          "type": "address"
        }
      ],
      "name": "VerifierChallenged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        }
      ],
      "name": "ApplicantWon",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        }
      ],
      "name": "ApplicantLost",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "applicationId",
          "type": "bytes32"
        }
      ],
      "name": "ApplicationRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "applicationStakeAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "baseApplicationFeeUsdWei",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "verifierTimeoutInSeconds",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "applicantRevealTimeoutInSeconds",
          "type": "uint256"
        }
      ],
      "name": "SettingsUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "whistleblower",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "applicationId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "randomNumber",
          "type": "uint256"
        }
      ],
      "name": "Whistleblown",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        }
      ],
      "name": "isComplete",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_etherPriceFeed",
          "type": "address"
        },
        {
          "name": "_work",
          "type": "address"
        },
        {
          "name": "_tilRegistry",
          "type": "address"
        },
        {
          "name": "_applicationStakeAmount",
          "type": "uint256"
        },
        {
          "name": "_baseApplicationFeeUsdWei",
          "type": "uint256"
        }
      ],
      "name": "init",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationStakeAmount",
          "type": "uint256"
        }
      ],
      "name": "setApplicationStakeAmount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        },
        {
          "name": "_keccakOfSecretAndRandom",
          "type": "bytes32"
        },
        {
          "name": "_keccakOfRandom",
          "type": "bytes32"
        },
        {
          "name": "_hint",
          "type": "bytes"
        }
      ],
      "name": "start",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        }
      ],
      "name": "applicantRandomlySelectVerifier",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicant",
          "type": "address"
        },
        {
          "name": "_randomNum",
          "type": "uint256"
        }
      ],
      "name": "selectVerifier",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        },
        {
          "name": "_secret",
          "type": "bytes32"
        }
      ],
      "name": "verifierSubmitSecret",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        },
        {
          "name": "_randomNumber",
          "type": "uint256"
        }
      ],
      "name": "whistleblow",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        },
        {
          "name": "_secret",
          "type": "bytes32"
        },
        {
          "name": "_randomNumber",
          "type": "uint256"
        }
      ],
      "name": "applicantRevealSecret",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        }
      ],
      "name": "verifierChallenge",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        }
      ],
      "name": "removeApplication",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicant",
          "type": "address"
        }
      ],
      "name": "getApplicantsApplicationCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicant",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getApplicantsApplicationAtIndex",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicant",
          "type": "address"
        }
      ],
      "name": "getApplicantsLastApplicationID",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_verifier",
          "type": "address"
        }
      ],
      "name": "getVerifiersApplicationCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicant",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getVerifiersApplicationAtIndex",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_verifier",
          "type": "address"
        }
      ],
      "name": "getVerifiersLastApplicationID",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        }
      ],
      "name": "verifierSubmissionTimedOut",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        }
      ],
      "name": "applicantRevealExpired",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicationStakeAmount",
          "type": "uint256"
        },
        {
          "name": "_baseApplicationFeeUsdWei",
          "type": "uint256"
        },
        {
          "name": "_verifierTimeoutInSeconds",
          "type": "uint256"
        },
        {
          "name": "_applicantRevealTimeoutInSeconds",
          "type": "uint256"
        }
      ],
      "name": "updateSettings",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicantRevealTimeoutInSeconds",
          "type": "uint256"
        }
      ],
      "name": "setApplicantRevealTimeoutInSeconds",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_verifierTimeoutInSeconds",
          "type": "uint256"
        }
      ],
      "name": "setVerifierTimeoutInSeconds",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_baseApplicationFeeUsdWei",
          "type": "uint256"
        }
      ],
      "name": "setBaseApplicationFeeUsdWei",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "weiPerApplication",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "usdWeiPerEther",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "applicationCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "applicationAt",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_applicationId",
          "type": "bytes32"
        }
      ],
      "name": "applicationExists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ])
