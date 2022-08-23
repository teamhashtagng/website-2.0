import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import TabContext from '@mui/lab/TabContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Developer from "./Developer";


export default function (){

    const theme = createTheme({
        palette: {
          primary: {
            main: '#00B9BC',
          },
        },
        typography: {
            fontFamily: [
              'Red Hat Display',
              'sans-serif',
            ].join(','),
        },
      });

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
        <div className='container' style={{ marginBottom: '10%' }} id='open-postions'>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} style={{ zIndex: '1'}} className="btns">
                {/* <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>OONFTs</b></p> */}
                <h2 className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{color: '#2E2F6E', marginTop: '5%', textAlign: 'center'}}>
                    Open Positions
                </h2>
                </Grid>
            </Grid>

            <Box sx={{ width: '100%', marginTop:'8%' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, border: 'none' }}>
                    <TabList onChange={handleChange} className="tab" aria-label="lab API tabs example" variant="scrollable" allowScrollButtonsMobile>
                        <Tab label="Developer" className="tab" value="1" />
                        <Tab label="Marketing" className="tab" value="2" />
                        <Tab label="Designer" className="tab" value="3" />
                        <Tab label="Researcher" className="tab" value="4" />
                    </TabList>
                    </Box>
                    <TabPanel value="1"> <Developer/> </TabPanel>
                    <TabPanel value="2">Nothing for now</TabPanel>
                    <TabPanel value="3">Nothing for now</TabPanel>
                    <TabPanel value="4">Nothing for now</TabPanel>
                </TabContext>
            </Box>
        </div>
        </ThemeProvider>
    )
}