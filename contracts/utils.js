import { ethers } from "ethers"
import contractABI from "./contract_abi.json"
const contractAddress = "0x0B2f7BBbb52a237aFd955A261760A20815aEf839"
const provider =  new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
export const contract = new ethers.Contract(contractAddress, contractABI, signer)