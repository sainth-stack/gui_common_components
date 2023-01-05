import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import xsiLogo from "../../assets/images/xsiLogo.svg";
import AppBar from '@mui/material/AppBar';
import { Box, Mixins, Palette, Shadows, Theme, Transitions, ZIndex } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';

export const Logo = styled('div')(({ theme }) => ({
        width: "250px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        '& > .MuiPaper-root': {
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "90%",
          width: "200px",
          height: "45px",
          backgroundColor: "inherit"
        },
        [theme.breakpoints.down('sm')]: {
          display: "none"
        }
}))

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface HeaderProps {
  theme: {
    mixins: Mixins;
    palette: Palette;
    shadows: Shadows;
    transitions: Transitions;
    typography: Typography;
    zIndex: ZIndex;
    unstable_strictMode?: boolean;
  }
}

export const StyledHeader = styled(AppBar)(({ theme }: HeaderProps) => {
  const headerStyles = {}
  return {
    ...headerStyles
  }
})