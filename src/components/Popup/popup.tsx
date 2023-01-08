import React from 'react';
// import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { StyledPopup } from './styles';
import { Box } from '@mui/material';

interface PopupModalProps{
    isOpen ?: boolean,
    onClose ?: () => void,
    sx?:any,
    children ?: React.ReactNode,
    id: string,
}


const Popup = forwardRef(({children,onClose, isOpen=false, sx, ...other}:PopupModalProps, ref) => {
    const theme = useTheme();

    return (
        <StyledPopup          
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={isOpen}
            {...other}
        > 
            <Box sx={{
            ...sx
            }}>
              {children}
            </Box>            
        </StyledPopup>
    )
}) 

export default Popup
