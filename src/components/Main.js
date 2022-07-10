import React from 'react'
import * as s from '../styles/style';
import NFTCard from './NFTCard';


function Main({NFT, Convert}) {

  return (
    <s.Container>
                { NFT ? NFT.map(nft => {
                       return (
                        <NFTCard name={nft.metadata.name}
                        desc={nft.metadata.description}
                        img={nft.media[0].raw.substring(7)}
                        ctn={nft.contract.address}
                        tid={Convert(nft.id.tokenId).c[0]}/>
                       )
                   }) : 
                   <div>No NFTs found</div>}

    </s.Container>
  )
}

export default Main