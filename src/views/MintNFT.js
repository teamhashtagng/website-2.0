import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
// import sections
import Hero from '../components/sections/Hero';
import { Box, TextField, Typography, CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import SectionHeader from '../components/sections/partials/SectionHeader';
import LayoutDefault from '../layouts/LayoutDefault'
import Button from '../components/elements/Button'



import { createNFT } from '../utils/interact';

const innerClasses = classNames(
    'testimonial-inner section-inner',
  );

const MintNFT = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const [disableBtn, setDisableBtn] = useState(false)
    const [mintText, setMintText] = useState("Mint")
    const [mintLoading, setMintLoading] = useState(false)

    const [errMsg, setErrMsg] = useState("")

    const [status, setStatus] = useState("")

    const onMintClicked = async (e) => {
        e.preventDefault()

        try {
            if (url === "" || name === "" || description === "") {
                setErrMsg("Input fields cannot be empty!")
                return
            } else {
                setMintLoading(true)
                setDisableBtn(true)
                setMintText("Minting")
                setName("")
                setUrl("")
                setDescription("")
                
                const { status } = await createNFT(url, name, description)
                if (status) {
                    setMintLoading(false)
                    setDisableBtn(false)
                    setMintText("Mint")
                    toast.success(`Minted ${name} NFT successfully`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    })
                }
                setStatus(status)
                
            }
        } catch (err) {
            console.error(err)
            toast.error(`Error minting ${name} NFT`, {
                position: "bottom-right",
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