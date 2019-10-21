let resolverContractAddress = "0x9C4c3B509e47a298544d0fD0591B47550845e903"
let resolverABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "key",
				"type": "string"
			},
			{
				"name": "value",
				"type": "string"
			}
		],
		"name": "setText",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "contentTypes",
				"type": "uint256"
			}
		],
		"name": "ABI",
		"outputs": [
			{
				"name": "contentType",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "x",
				"type": "bytes32"
			},
			{
				"name": "y",
				"type": "bytes32"
			}
		],
		"name": "setPubkey",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "content",
		"outputs": [
			{
				"name": "ret",
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
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "addr",
		"outputs": [
			{
				"name": "ret",
				"type": "address"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "key",
				"type": "string"
			}
		],
		"name": "text",
		"outputs": [
			{
				"name": "ret",
				"type": "string"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "contentType",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "setABI",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "name",
		"outputs": [
			{
				"name": "ret",
				"type": "string"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "setContent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "pubkey",
		"outputs": [
			{
				"name": "x",
				"type": "bytes32"
			},
			{
				"name": "y",
				"type": "bytes32"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setAddr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "ensAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "a",
				"type": "address"
			}
		],
		"name": "AddrChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "ContentChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			}
		],
		"name": "NameChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "contentType",
				"type": "uint256"
			}
		],
		"name": "ABIChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "x",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "y",
				"type": "bytes32"
			}
		],
		"name": "PubkeyChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "indexedKey",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "key",
				"type": "string"
			}
		],
		"name": "TextChanged",
		"type": "event"
	}
]
let resolvercontract;

import { ethers } from 'ethers';

async function initialize(web3){
  ethereum.enable()

  provider = new ethers.providers.Web3Provider(web3.currentProvider)
  utils = ethers.utils

  let accounts = await provider.listAccounts()
  signer = provider.getSigner(accounts[0])

  resolverContract = new ethers.Contract(resolverContractAddress,resolverABI,signer)

}


async function send(){
  let address = document.getElementById("addressTo").value
  let amount = document.getElementById("toAmount").value
  let tx = {
      to: address,
      // ... or supports ENS names
      // to: "ricmoo.firefly.eth",

      // We must pass in the amount as wei (1 ether = 1e18 wei), so we
      // use this convenience function to convert ether to wei.
      value: ethers.utils.parseEther(amount)
  }

  let sendPromise = signer.sendTransaction(tx);
}

async function resolveAddress(address){

    if (address.includes(".")){
			let nameHash = utils.namehash(address)
			address = await resolverContract.addr(nameHash)
		}
		return address
}
