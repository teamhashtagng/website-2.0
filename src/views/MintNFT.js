import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
// import sections
import Hero from '../components/sections/Hero';
import { Box, TextField, Typography, CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import SectionHeader from '../components/sections/partials/SectionHeader';
import LayoutDefault from '../layouts/LayoutDefault'
import Button from '../components/elements/Button'

import { connectWallet, getCurrentWalletConnected } from '../utils/interact'


import { createNFT } from '../utils/interact';

const innerClasses = classNames(
    'testimonial-inner section-inner',
  );

const MintNFT = () => {
    const [walletAddress, setWallet] = useState('')
    const [status, setStatus] = useState('')

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const [disableBtn, setDisableBtn] = useState(false)
    const [mintText, setMintText] = useState("Mint")
    const [mintLoading, setMintLoading] = useState(false)

    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        fetchWallet()
    }, [])

    async function fetchWallet() {
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address);
        setStatus(status); 
        addWalletListener();
    }
    
      function addWalletListener() {
        if (window.ethereum) {
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setWallet(accounts[0]);
              setStatus("👆🏽 Write a message in the text-field above.");
            } else {
              setWallet("");
              setStatus("🦊 Connect to Metamask using the top right button.");
            }
          });
        } else {
          setStatus(
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          );
        }
      }


    const onMintClicked = async (e) => {
        e.preventDefault()
        // if (walletAddress > 0) {
                    
        // } else {
        //     setMintLoading(false)
        //     setDisableBtn(false)
        //     setMintText("Mint")
        //     toast.warning("Connect wallet first", {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //     }) 
        // }


        try {
            if (url === "" || name === "" || description === "") {
                setErrMsg("Input fields cannot be empty!")
                return
            } 

            if (walletAddress > 0) {
                setMintLoading(true)
                setDisableBtn(true)
                setMintText("Minting")
                setName("")
                setUrl("")
                setDescription("")
                const { success, status } = await createNFT(url, name, description)
                
                if (success) {
                    setMintLoading(false)
                    setDisableBtn(false)
                    setMintText("Mint")
                    toast.success(`Minted ${name} NFT successfully`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    })
                } 
                setStatus(status)
                
                setMintLoading(false)
                setDisableBtn(false)
                setMintText("Mint")
                toast.error(`Unable to mint!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                })

            } else {
                    setMintLoading(false)
                    setDisableBtn(false)
                    setMintText("Mint")
                    toast.warning("Connect wallet first", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    }) 
                }
                
        } catch (err) {
            console.error(err)
            setMintLoading(false)
            setDisableBtn(false)
            setMintText("Mint")
            toast.error(`Unable to mint`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            })
        }
        
    }

    const sectionHeader = {
        title: 'Mint your NFTs',
    };
    

    return (
        <LayoutDefault>
            <ToastContainer />
            <Hero className="illustration-section-01" />
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <Link to="/" className="button button-wide-mobile button-sm">Back</Link>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                        mt: 4
                    }}
                    
                    noValidate
                    autoComplete="off"
                    >
                        <Typography variant="h6"><b>Paste image link:</b></Typography>
                        <TextField 
                            id="standard-basic" 
                            size='small' 
                            error={!!errMsg}
                            helperText={errMsg}
                            value={url}
                            placeholder='eg https://' 
                            variant="outlined" 
                            onChange={e => {setUrl(e.target.value)}}
                        />

                        <Typography variant="h6"><b>Name:</b></Typography>
                        <TextField 
                            id="standard-basic" 
                            size='small'
                            error={!!errMsg}
                            helperText={errMsg}
                            value={name} 
                            placeholder='The Dome' 
                            variant="outlined" 
                            onChange={e => setName(e.target.value)}
                        />

                        <Typography variant="h6"><b>Description:</b></Typography>
                        <TextField 
                            id="standard-basic" 
                            error={!!errMsg}
                            helperText={errMsg}
                            value={description}
                            size='small' 
                            placeholder='Lorem Ipsum Dolor' 
                            variant="outlined" 
                            onChange={e => setDescription(e.target.value)}
                        />
                        <Box sx={{width: "30%"}}>
                           
                            <Button disabled={disableBtn} onClick={onMintClicked}>{mintLoading && <CircularProgress sx={{ color: '#fff', padding: '5px' }} />}
                            &nbsp;{mintText}</Button>
                                {/* <Button disabled={true} style={{color: "#fff"}} className="button button-wide-mobile button-sm">Mint</Button>   */}
                            
                        </Box>

                        <p>{status}</p>
                    </Box>
                </div>
            </div>
        </LayoutDefault>
    );
}

export default MintNFT;