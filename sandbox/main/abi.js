
const abi = [

{
	"constant": false,
	"inputs": [
		{
			"name": "_img",
			"type": "string"
		},
		{
			"name": "_text",
			"type": "string"
		}
	],
	"name": "sendHash",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [],
	"name": "NewPost",
	"type": "event"
},
{
	"constant": true,
	"inputs": [],
	"name": "getCounter",
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
	"name": "getHash",
	"outputs": [
		{
			"name": "img",
			"type": "string"
		},
		{
			"name": "text",
			"type": "string"
		},
		{
			"name": "owner",
			"type": "address"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}
];