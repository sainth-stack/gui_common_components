import React, { forwardRef } from "react";
import { useTheme } from '@mui/material/styles';
import { Div, StyledAccordian } from "./styles";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaChevronDown } from 'react-icons/fa';
import { Box, ListItemAvatar, ListItemIcon } from '@mui/material'
interface AccordianLabel {
    title?: string,
    subtitle?: string
}
interface AccordianProps {
    startIcon?: React.ReactNode,
    accordianId?: string,
    accordianLabel?: AccordianLabel,
    sx?:React.CSSProperties,
    children?: React.ReactNode,
}
const Accordian = forwardRef((props: AccordianProps) => {
    const theme = useTheme();
    const {
        startIcon = null,
        accordianId,
        accordianLabel,
        children,
        sx
    } = props;

    return <StyledAccordian 
     sx={{
        ...sx
     }}>
        <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Div>
                {startIcon &&  <ListItemIcon sx={{mr:3}}>{startIcon}</ListItemIcon>}
                <Box>
                    <Typography variant="h6" gutterBottom sx={{
                        fontSize: ' 1.01563rem',
                        fontWeight: 500,
                        lineHeight: 1.2,
                        marginTop: 0,
                        marginBottom: '0.5rem',
                    }}>
                        {accordianLabel?.title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{
                         fontSize:  '0.8125rem',
                         fontWeight: 400,
                         marginTop: 0,
                         marginBottom:' 1rem',
                         lineHeight: 1.5
                    }}>
                        {accordianLabel?.subtitle}
                    </Typography>
                </Box>
            </Div>
        </AccordionSummary>
        <AccordionDetails>
            {children}
        </AccordionDetails>
    </StyledAccordian>
})

export default Accordian;