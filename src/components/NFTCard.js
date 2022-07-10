import React from 'react'
import * as s from '../styles/style';


function NFTCard({ name, desc, img, ctn, tid }) {

  return (
    <s.LINK href={`https://opensea.io/assets/ethereum/${ctn}/${tid}`} target={"_blank"}>
    <s.BoxWrapper>
        <div>
        <img src={`https://opensea.mypinata.cloud/ipfs/${img}`} alt='' width={200}/>
        </div>
        <div>
            <s.HText>{name}</s.HText>
        </div>
        <div>
            <s.PText>{desc}</s.PText>
        </div>
    </s.BoxWrapper>
    </s.LINK>
  )
}

export default NFTCard