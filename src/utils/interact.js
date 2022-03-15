
import { pinJSONToIPFS } from './pinata'
import { uploadToIPFS } from './ipfs'

import { contractAddress } from '../config/constants'

require('dotenv').config()
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(alchemyKey)



const contractABI = require('../config/abi')

export const createNFT = async (url, name, description) => {
    // error handling
    if (url.trim() === "" || (name.trim() === "" || description.trim() === "")) {
        return {
            success: false,
            status: "Please make sure all fields are completed before minting!"
        }
    }

    // make metadata
    const metadata = new Object();
    metadata.name = name
    metadata.image = url
    metadata.description = description

    console.log(metadata)
    // make ipfs call

    // let tokenURI = ""
    const pinataResponse = await pinJSONToIPFS(metadata)

    // console.log(tokenURI)

    if (!pinataResponse.success) {
      return
    }

    window.contract = await new web3.eth.Contract(contractABI, contractAddress)

    //set up your Ethereum transaction
    const transactionParameters = {
        gas: '500000',
        to: contractAddress, // required during contract publications
        from: window.ethereum.selectedAddress, //must match user's active address
        'data': window.contract.methods.safeMint(pinataResponse.pinataUrl).encodeABI()
    }

    // sign the transaction via Metamask
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters]
            })
        return {
            success: true,
            status: "Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "Something went wrong: " + error.message
        }
    }
}

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } 
  };


  export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    }
  };