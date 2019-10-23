## ENS Tutorial
### Introduction
The ENS, Ethereum Naming Service, is a decentralized naming service on Ethereum, built using smart contracts. The ENS creates human-readable names for Ethereum addresses and other content. https://ethgasstation.info/blog/what-is-ens/

### Hands on Tutorial
This tutorial will teach you how to interact with the ENS, and then integrate ENS functions into a simple front end Dapp.
a
A fully working sample Dapp is included.

### Objectives

* Register your ENS domain name
* Build front end
* Build smart contract
* Build Dapp
* install metamask create a wallet go to ropsten test network get testnet ether (click deposit, then Test faucet)



### Getting Started
<ul>
    <li>To Register an ENS domain name, go to app.ens.domains.</li>
    <li>Search the name you want for your domain</li>
    <li>Detailed instructions on the website will walk you through name registration</li>
    <li>Register a domain, e.g. toothbrush.eth</li>
    <li>Once you have registered the domain name, you can do the following</li>
    <li>Set the resolver (The smart contract which translates names into addresses) It's easiest to just use the default resolver and click save</li>
    <li>Set ENS records</li>
        <ul>
            <li>address (Ethereum address which the domain points to)</li>
            <li>other addresses (Other cryptocurrency addresses the domain points to)</li>
            <li>content (IPFS hash the domain points to)</li>
            <li>text (text content the domain points to)</li>
        </ul>
    <li>Set a Reverse Record (allowing you to translate an Ethereum address back into the name)</li>
    <li>Transfer Registration (Transfer ownership of the domain)</li>
    <li>Set the controller (Transfer admin privileges to another address)</li>
    <li>Register subdomains, e.g. abc.toothbrush.eth and abcd.toothbrush.eth</li>
    <li>Test your domain registration by sending ether to your new domain name using Metamask.</li>
</ul>

- Test your domain registration by sending ether to your new domain name using Metamask.

What is the resolver contract?
(explain)
there are multiple
you can deploy your own if you really want to

<h1>Building the Dapp</h1>

<h2>Build the front end</h2>
<h3>Get smart contract Info</h3>
<ul>
    <li>Resolver</li>
    <li>Get the resolver contract address</li>
    <li>Get the resolver contract ABI - Resolver ABI: https://pastebin.com/NXcdevmP</li>
</ul>

<h3>ERC20Token</h3>
<ul>
    <li>Get the token contract address</li>
    <li>Get the token contract ABI - ERC20ABI: https://pastebin.com/SBN5MjqW</li>
</ul>


 
<h2>Integrate Ethereum smart contracts into HTML using javascript</h2>
<h3>Import ethersjs</h3>
<ul>
    <li>Npm install -g ethersjs</li>
    <li>Top of index.html link https://cdn.ethers.io/scripts/ethers-v4.min.js</li>
</ul>


<h3>Connect to Metamask web3 provider</h3>
<ul>
    <li>Connect to web3 and ethereum objects injected by metamask</li>
    <li>Request permission to connect to metamask</li>
    <li>Create ethers.js provider object</li>
    <li>GET metamask accounts</li>
    <li>Create signer object based on active account (object to sign transactions)</li>
</ul>


<h3>Create Simple Eth wallet</h3>
<ul>
    <li>Display Metamask Address</li>
    <li>Get ETH Balance </li>
    <li>Send Eth to any address</li>
</ul>

 
<h3>Connect to smart contracts</h3>
<ul>
    <li>Create a ENS resolver contract object using the signer</li>
    <li>Create token contract object using the signer</li>
</ul>

<h3>Resolve ENS Names</h3>
<ul>
    <li>Write function to resolve ENS names into Ethereum addresses</li>
    <li>Test sending ETH to ENS name</li>
</ul>

<h3>Create simple ERC20 Token Wallet</h3>
<ul>
    <li>Load token from ENS domain name</li>
    <li>Display Token Info</li>
    <li>Get and Display token Balance</li>
    <li>Transfer Tokens to any address or ENS name</li>
</ul>
