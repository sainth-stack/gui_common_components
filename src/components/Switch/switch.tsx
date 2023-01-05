import * as React from 'react';
import { forwardRef } from 'react';
// import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {SwitchStyle} from "./styles"

interface SwitchProps {
    edge?: 	'end'
    | 'start'
    
    size?: 'small'
    | 'medium'
   
    color?: 		'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    

    control?: React.ReactNode
    label?: string
    sx?:any
}
// const iconStyle = {
//     width: 16,
//     height: 16,
//     '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
//   };

const Switch = forwardRef(({edge="end", size="medium", color="primary",  label="",sx={}}:SwitchProps,ref) => {
  return (
    <FormControlLabel
        control={<SwitchStyle {...{edge,size,color,sx:{...sx}}} defaultChecked />}
        label={label}
      />
  )
})
export default Switch;