## ENS Tutorial
### Introduction
The ENS, Ethereum Naming Service, is a decentralized naming service on Ethereum, built using smart contracts. The ENS creates human-readable names for Ethereum addresses and other content. https://ethgasstation.info/blog/what-is-ens/

### Hands on Tutorial
This tutorial will teach you how to interact with the ENS, and then integrate ENS functions into a simple front end Dapp.

A fully working sample Dapp is included.

### Objectives
<ol>
    <li>Register your ENS domain name</li>
    <li>Build front end</li>
    <li>Build smart contract</li>
    <li>Build Dapp</li>
    <li>install metamask create a wallet go to ropsten test network get testnet ether (click deposit, then Test faucet)</li>
</ol>


### Getting Started
<ol>
    <li>To Register an ENS domain name, go to app.ens.domains.</li>
    <li>Search the name you want for your domain</li>
    <li>Detailed instructions on the website will walk you through name registration</li>
    <li>Register a domain, e.g. toothbrush.eth</li>
    <li>Once you have registered the domain name, you can do the following</li>
    <li>Set the resolver (The smart contract which translates names into addresses) It's easiest to just use the default resolver and click save</li>
    <li>Set ENS records</li>
    <li>
        <ul>
            <li>address (Ethereum address which the domain points to)</li>
            <li>other addresses (Other cryptocurrency addresses the domain points to)</li>
            <li>content (IPFS hash the domain points to)</li>
            <li>text (text content the domain points to)</li>
        </ul>
    </li>
    <li>Set a Reverse Record (allowing you to translate an Ethereum address back into the name)</li>
    <li>Transfer Registration (Transfer ownership of the domain)</li>
    <li>Set the controller (Transfer admin privileges to another address)</li>
    <li>Register subdomains, e.g. abc.toothbrush.eth and abcd.toothbrush.eth</li>
    <li>Test your domain registration by sending ether to your new domain name using Metamask.</li>
</ol>

