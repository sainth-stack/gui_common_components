import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { IoMdMenu, IoMdMore } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import {FiLayers} from "react-icons/fi";
import { Logo, Search, SearchIconWrapper, StyledHeader, StyledInputBase } from "./styles";
import Avatar from "../avatar";
import AvatarImg from "../../assets/images/avatar.jpg";
import { Paper, Typography } from "@mui/material";
import {MdKeyboardArrowDown} from "react-icons/md";

export interface controls{
    id?: string,
    label?: string,
    icon?: React.ReactNode
}

export interface menuItems{
    id?: string | number,
    label?: string,
    icon?: React.ReactNode
}

interface HeaderProps {
    color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent',
    enableColorOnDark?: boolean,
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky',
    sx?: any,
    searchBar?: boolean,
    controls?: Array<controls>
    user?: string,
    menuItems?: Array<menuItems>,
    logo?: React.ReactNode,
    avatarImg?: any
}

const Header = ({ color, position, enableColorOnDark, sx, searchBar=true,logo,avatarImg, ...other }: HeaderProps) => {
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {other.menuItems?.map((menuitem,index) => <MenuItem key={index} onClick={handleMenuClose} sx={{pt: 0, pb: 0, lineHeight: 0}}>
                <IconButton size="small">
                    {menuitem.icon && menuitem.icon}
                </IconButton>
                <p>{menuitem.label}</p>
            </MenuItem>)}
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {
                other.controls && other.controls.map((control,index) => <MenuItem key={index} sx={{lineHeight: 0, pt:0, pb:0}}>
                <IconButton size="medium" aria-label={control.id} color="inherit">
                    {control.icon && control.icon}
                </IconButton>
                <p>{control.label}</p>
            </MenuItem> )
            }
            <MenuItem onClick={handleProfileMenuOpen} sx={{lineHeight: 0, pt:0, pb:0}} >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Avatar variant="circular" src={avatarImg} size="lg" /> <Typography component={"span"} sx={{pl:1,color: "black",fontWeight: 500,fontSize: "0.8125rem"}}>{other.user}</Typography><MdKeyboardArrowDown size={25} />
                </IconButton>
            </MenuItem>
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledHeader position={position} color={color} enableColorOnDark={enableColorOnDark} sx={{ ...sx }} >
                <Toolbar>
                    <Logo>
                        <Paper sx={{backgroundImage: `url(${logo})`, boxShadow: "none"}}></Paper>
                    </Logo>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <IoMdMenu />
                    </IconButton>
                    {searchBar && <Search>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {other.controls && other.controls.map((control,index) => <IconButton key={index} size="large" aria-label={control.label} color="inherit">
                            {control.icon && control.icon}
                        </IconButton> )}
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                            sx={{p:0,m:0,borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.04)",borderRadius: 0}}
                        >
                            <Avatar variant="circular" src={avatarImg} size="lg" /> <Typography component={"span"} sx={{pl:1,color: "#E9ECEF",fontWeight: 500,fontSize: "0.8125rem"}}>{other.user}</Typography><MdKeyboardArrowDown size={25} />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <IoMdMore />
                        </IconButton>
                    </Box>
                </Toolbar>
            </StyledHeader>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    )
}

export default Header;