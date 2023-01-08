import React from 'react'
import { StyledButtonGroup } from './styles';
import { Button } from '@mui/material';

export interface Tab{
  id : string, 
  title : string,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode
}

interface ButtonGroup {
    color?: 'inherit'| 'primary'| 'secondary'| 'error'| 'info'| 'success'| 'warning',
    disabled?: boolean,
    disableElevation?: boolean,
    disableFocusRipple?: boolean,
    disableRipple?: boolean,
    fullWidth?: boolean,
    orientation?: 'horizontal'| 'vertical',
    size?: 	'small'| 'medium'| 'large',
    sx?: any,
    variant?: 'contained'| 'outlined'| 'text',
    tabs?: Array<any>,
    activeTabs?: Array<any>,
    setActiveTab ?: (tab : Tab) => void,
    isGroup?: boolean
}

const ButtonGroup = (buttonGroupProps: ButtonGroup) => {
    const {color,disabled,disableElevation,disableRipple,disableFocusRipple,fullWidth,orientation,size,sx,variant, tabs=[], setActiveTab = () => {/* */}, activeTabs, isGroup} = buttonGroupProps;
  return (
    <StyledButtonGroup
        {...{
            color: color,
            disabled: disabled,
            disableElevation,
            disableFocusRipple,
            disableRipple,
            fullWidth: fullWidth,
            orientation: orientation,
            size: size,
            sx:{...sx},
            variant: variant,
        }}
    >
        {
            tabs.map((tab,index) => <Button
                variant={activeTabs?.includes(tab) ? "contained" : "outlined"}
                key={index}
                onClick={() =>setActiveTab(tab)} 
                sx={{mr:isGroup ? 0 : 2,'& .MuiButtonBase-root': {border: "none"}}}
                disableElevation
                startIcon={tab?.startIcon && tab?.startIcon}
                endIcon={tab?.endIcon && tab?.endIcon}
            >
                {tab.title}
            </Button>)
        }
    </StyledButtonGroup>
  )
}

export default ButtonGroup