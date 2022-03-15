
import React, { useEffect } from 'react';
import { getDefaultProvider } from 'ethers'
import { NftProvider, useNft } from 'use-nft'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Grid, Box } from '@mui/material';
import NftImage from '../../assets/images/nft_item.jpg';
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

  require('dotenv').config()
  const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
  const web3 = createAlchemyWeb3(alchemyKey)

  const contractABI = require('../../config/abi')

  // We are using the "ethers" fetcher here.
  const ethersConfig = {
    provider: getDefaultProvider("homestead"),
  }

  useEffect(async () => {

    const getNfts = async () => {
      window.contract = await new web3.eth.Contract(contractABI, contractAddress)
      const urls = await window.contract.methods.tokenURIs(1).call()
      console.log(urls)
      return urls
    }
    getNfts()
  }, [])

  
  

  const nfts = [
    {
        name: "Blue Ocean", 
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    },
    {
        name: "Red Tree",
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    },
    {
      name: "Green Snake",
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    },
  ];

  const Nft = () => {
    const { loading, error, nft } = useNft(
      contractAddress,
      "90473"
    )

    // nft.loading is true during load.
    if (loading) return <p>Loading…</p>

    // nft.error is an Error instance in case of error.
    if (error || !nft) return <p>Error loading NFTs.</p>

    return (
      <Grid container spacing={3} sx={{mt: 4}}>
        { nfts.map((nft) => (
          <Grid item xs={12} md={4} sm={3} key={nft.name}>
            <Box className="nft__item" style={{padding: '20px'}}>
              <Box>
                <Image
                  src={NftImage}
                  alt="Hero" 
                  style={{borderRadius: 15}}
                />
              </Box>
              <h6>{nft.name}</h6>
              <p>{nft.description}</p>
            </Box>
          </Grid>
        ))

        }
      </Grid>
    )
  }

  return (
    <section
        {...props}
        className={outerClasses}
    >
        <div className="container">
        <div className={innerClasses}>

          <NftProvider fetcher={["ethers", ethersConfig]}>
            
                  <SectionHeader data={sectionHeader} className="center-content" />
                  <Nft/>

          </NftProvider>
          <Link to="/mint" className="button button-primary button-wide-mobile button-sm">Mint NFT</Link>
          </div>

        </div>
    </section>

  );
}

NFTs.propTypes = propTypes;
NFTs.defaultProps = defaultProps;

export default NFTs;