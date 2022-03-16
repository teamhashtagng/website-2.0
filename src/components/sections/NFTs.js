
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Grid, Box, CircularProgress } from '@mui/material';
import { contractAddress } from '../../config/constants'


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const NFTs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  require('dotenv').config()
  const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
  const web3 = createAlchemyWeb3(alchemyKey)

  const contractABI = require('../../config/abi')

  const [tokenMetadata, setTokenMetadata] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      getNfts()
    } catch (err) {
      console.error(err)
    }
  }, [])

  
  
  const getNfts = async () => {
    const contract = await new web3.eth.Contract(contractABI, contractAddress)
    const totalSupply = await contract.methods.totalSupply().call()

    console.log('totalSupply', totalSupply)
    
    let tokenMetadata = []
    // started from 3 cos the tokenurls link of the preceedence is broken
    for (let i = 3; i <= totalSupply; i++) {
      let url = await contract.methods.tokenURI(i).call()

      const data = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await data.json()
      tokenMetadata.push(res)
      console.log(res)
    }
    setLoading(false)

    setTokenMetadata(tokenMetadata)

    // return tokenMetadata
  }

  
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'My NFTs',
  };




  return (
      <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Link to="/mint" className="button button-primary button-wide-mobile button-sm">Mint NFT</Link>
          <Box sx={{mt: 3}}>
            {loading && <CircularProgress />}
          </Box>
          <Grid container spacing={3} sx={{mt: 4}}>
            { tokenMetadata.map((nft) => (
              <Grid item xs={12} md={4} sm={3} key={nft.name} style={{}}>
                <Box className="nft__item" style={{padding: '20px', height: '200px'}}>
                  <Box>
                    <Image
                      src={nft.image}
                      alt="Hero" 
                      style={{borderRadius: 15}}
                    />
                  </Box>
                  <h6>{nft.name}</h6>
                  <p>{nft.description.length > 57 ? nft.description.slice(0,57).concat("...") : nft.description}</p>
                </Box>
              </Grid>
            ))

            }
          </Grid>
        </div>
      </div>
    </section>
    
  );
}

NFTs.propTypes = propTypes;
NFTs.defaultProps = defaultProps;

export default NFTs;