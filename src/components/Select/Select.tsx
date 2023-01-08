import React, { forwardRef, useState,useEffect } from "react";
import { StyledSelect } from "./styles";
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import { SelectChangeEvent, FormControl } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type Option = {
    id?: string | number,
    label?: string,
    value?: string | number,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode
}
interface FormInputProps {
    type?: React.HTMLInputTypeAttribute,
    size?: "small" | "medium",
    variant?: "outlined" | "filled" | "standard",
    name?: string,
    disabled?: boolean,
    multiple?: boolean,
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
    innerRef?: React.RefObject<HTMLInputElement>,
    startIcon?: React.ReactSVGElement | React.ReactNode,
    endIcon?: React.ReactSVGElement | React.ReactNode,
    options?: Array<Option>,
    optionsType: string,
    sx?:React.CSSProperties,
    itemHeight?:any,
    itemPaddingTop?:any,
    itemWidth?:any,
    itemStyles?:React.CSSProperties,
    onChange?:any
}

const Select = forwardRef((props: FormInputProps, ref) => {
    const theme = useTheme();
    const [selected, setSelected] = React.useState<any>([]);

    const handleChange = (event: SelectChangeEvent<typeof selected>) => {
        const {
            target: { value },
        } = event;
        setSelected(
            typeof value === 'string' ? value.split(',') : value,
        );
        props.onChange(event)
    }; const {
        size = "small",
        variant = "outlined",
        name,
        disabled = false,
        onBlur,
        onFocus,
        options=[],
        multiple = false,
        optionsType = 'default',
        sx,
        itemHeight=48,
        itemPaddingTop=8,
        itemWidth=250,
        itemStyles,
    } = props;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: itemHeight * 4.5 + itemPaddingTop,
                width: itemWidth,
            },
        },
    };
    useEffect(()=>{
        if(options.length>0){
            setSelected(
                typeof options[0].value === 'string' ? options[0].value.split(',') : options[0].value,
            );
        }
    },[])
    return (
        <FormControl sx={{minWidth:'100%'}}>
            {/* <InputLabel id="demo-simple-select-label" sx={{ paddingBottom: '20px' }} color="primary">Name</InputLabel> */}
            <StyledSelect
                ownerState={{size}}
                id="demo-simple-select-standard"
                labelId="demo-simple-select-label"
                size={size}
                theme={theme}
                variant={variant}
                value={selected}
                onChange={handleChange}
                renderValue={optionsType == "chips" && multiple ? (selected: any) => {
                    const optionLabel=options.filter((item)=>selected === item.value)
                    return (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value: any) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box> 
                    )
                } : ()=>{
                    const optionLabel=options.filter((item)=>selected === item.value)
                    return (<>{optionLabel[0].label} </>)
                }
                }
                sx={{
                    ':before': { borderBottom: '1px solid #ced4da' },
                    ':after': { borderBottom: '1px solid #ced4da' },
                    ...sx
                }}
                MenuProps={MenuProps}
                {...{
                    name,
                    disabled,
                    multiple,
                    onBlur,
                    onFocus
                }}
            >
                {optionsType == "checkbox" ? options?.map((option: any, index: any) => (
                    <MenuItem
                        key={index}
                        value={option.value}
                        sx={{...itemStyles}}
                    >
                        <Checkbox checked={selected.indexOf(option.label) > -1} />
                        <ListItemText primary={option.label} />
                    </MenuItem>
                ))
                    :
                    options?.map((option: any, index: any) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                            sx={{...itemStyles}}
                        >
                            {option.label}
                        </MenuItem>
                    ))
                }
            </StyledSelect>
        </FormControl>
    )

})
export default Select;
