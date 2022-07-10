import React from 'react'
import * as s from '../styles/style';



function Header( { connect, account } ) {

  return (
    <s.Head>
        <div>
        <s.HText style={{color: '#CCF381'}}>
            NFT Viewer
        </s.HText>
        </div>
        <s.PText>
            Connect Your Wallet to see your NFTs
        </s.PText>
        <div>
            {account === null ? (
                <>
                 <s.ConnectBTN onClick={(e) => {
                e.preventDefault();
                connect();
            }}>
                Connect
            </s.ConnectBTN>
                </>
            ) : (
                <>
               <s.ConnectBTN >
                {account.toString().substring(0,4)}...{account.toString().substring(38,42)}
            </s.ConnectBTN>
                </>
            )}

        </div>
    </s.Head>
  )
}

export default Header