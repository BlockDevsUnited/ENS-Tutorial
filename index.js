async function initialize(web3){
  ethereum.enable()


  provider = new ethers.providers.Web3Provider(web3.currentProvider)
  utils = ethers.utils

  let accounts = await provider.listAccounts()
  signer = provider.getSigner(accounts[0])
}

async fucntion send(){
  let address = document.getElementByID("addressTo")
  let amount = parseAmount(document.getElementByID("toAmount"))


}
