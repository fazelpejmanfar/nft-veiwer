import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import * as s from './styles/style';
import Web3 from 'web3';


function App() {

  let chainid = "1";
  const [account, setaccount] = useState(null);
  const [web3, setweb3] = useState(null);
  const [NFTS, setNFTS] = useState("");

  const connect = async() => {
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      let web3 = new Web3(ethereum);
      setweb3(web3);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setaccount(accounts[0]);
        const networkId = await ethereum.request({
          method: "net_version",
        });
        if (networkId === chainid) {
          ethereum.on("accountsChanged", (accounts) => {
            setaccount(accounts[0]);
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          ethereum.on("disconnect", () => {
            setaccount(null);
          });
        }
      } catch (err) {
        alert("Something went wrong.");
      }
    } else {
      alert("Please Install Metamask.");
    }
  };
  if(account != null) {
    //console.log(Web3.utils.hexToNumber("0x000000000000000000000000000000000000000000000000000000000000000f"))
    console.log(web3._extend.utils.toBigNumber("0x0000000000000000000000000000000000000000000000000000000000000100").c[0]);
  }

const apiKey = "sKsU-IgWvOxFS4uz2JeRsH7kZVmjJqZt";
const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;
const fetchURL = `${baseURL}?owner=${account}`;

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const getnfts = () => {
  fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then((result) => {
    console.log(result.ownedNfts);
    setNFTS(result.ownedNfts)
  })
  .catch(error => console.log('error', error)) ;
};


useEffect(() => {
getnfts();
}, [account]);

  return (
    <s.Screen>
      <Header connect={connect} account={account}/>
      {NFTS ? (
      <Main NFT={NFTS} Convert={web3._extend.utils.toBigNumber}/>
      ) : (
        null
      )}
    </s.Screen>
  );
}

export default App;
