import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionQuestion({title, description, panelNo, expanded, handleChange}) {
  return (
    <div>
      <Accordion expanded={expanded === panelNo} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls= {`${panelNo}a-content`}
          id={`${panelNo}a-header`}
          sx={{paddingLeft: '3%'}}
        >
          <Typography sx={{color: '#2E2F6E', fontWeight: 700}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: '#E5E7EC', p: 4}}>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
