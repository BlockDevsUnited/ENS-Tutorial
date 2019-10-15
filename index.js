async function initialize(web3){
  ethereum.enable()


  provider = new ethers.providers.Web3Provider(web3.currentProvider)
  utils = ethers.utils

  let accounts = await provider.listAccounts()
  signer = provider.getSigner(accounts[0])
}

async function send(){
  let address = document.getElementByID("addressTo")
  let amount = parseAmount(document.getElementByID("toAmount"))
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
