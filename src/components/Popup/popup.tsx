import React from 'react';
// import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { StyledPopup } from './styles';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import {RxCross2} from "react-icons/rx";
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';
import { TransitionProps } from '@mui/material/transitions';

interface PopupModalProps{
    isOpen ?: boolean,
    onClose ?: () => void,
    heading ?: string,
    sx?:any,
    children ?: React.ReactNode,
    footer ?: React.ReactNode,
    disableFooter ?: boolean,
    id: string,
    isDraggable?: boolean,
    scroll?: 'body'| 'paper',
    maxWidth?: 'xs'| 'sm'| 'md'| 'lg'| 'xl',
    fullWidth?: boolean,
    fullScreen?: boolean,
    transition?: 'fade'| 'grow'| 'slide'| 'zoom',
    slideDirection?: 'down'| 'left'| 'right'| 'up'
}


const Popup = forwardRef(({children, heading="",onClose, isOpen=false, sx, ...other}:PopupModalProps, ref) => {
    const theme = useTheme();

    function PaperComponent(props: PaperProps) {
        return (
          <Draggable
            handle={`#${other.isDraggable ? "customized" : "idle"}-dialog-title`}
            cancel={'[class*="MuiDialogContent-root"]'}
          >
            <Paper {...props} />
          </Draggable>
        );
      }

      const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <>
            {other.transition === "fade" && <Fade in={isOpen} mountOnEnter unmountOnExit ref={ref} {...props} /> }
            {other.transition === "slide" && <Slide direction={other.slideDirection} in={isOpen} mountOnEnter unmountOnExit ref={ref} {...props} />}
            {other.transition === "grow" && <Grow in={isOpen} mountOnEnter unmountOnExit ref={ref} {...props}  />}
            {other.transition === "zoom" && <Zoom in={isOpen} mountOnEnter unmountOnExit ref={ref} {...props} />}
        </>
      });

    return (
        <StyledPopup
            sx={{
            ...sx
            }}          
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={isOpen}
            fullScreen={other.fullScreen}
            fullWidth={other.fullWidth}
            maxWidth={other.maxWidth}
            scroll={other.scroll}
            PaperComponent={PaperComponent}
            keepMounted
            // TransitionComponent={Transition}
            {...other}
        >
            <DialogTitle sx={{ m: 0, p: 2, maxWidth: "none" }} {...other} style={{cursor: "move"}} id={`customized-dialog-title`}>
                {heading}
                {onClose ? (
                    <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        opacity: 0.9,
                        color: (theme) => theme.palette.grey[800],
                    }}
                    >
                        <RxCross2 />
                    </IconButton>
                ) : null}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant='contained' size='large' onClick={onClose}>
                    Cancel
                </Button>
                <Button variant='contained' size='large' onClick={onClose}>
                    Save
                </Button>
                </DialogActions>
        </StyledPopup>
    )
}) 

export default Popup
