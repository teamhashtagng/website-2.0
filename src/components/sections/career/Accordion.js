import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionQuestion({title, description, panelNo, expanded, handleChange}) {
  console.log(panelNo)
  return (
    <div>
      <Accordion expanded={expanded === panelNo} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls= {`${panelNo}a-content`}
          id={`${panelNo}a-header`}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
