import {  styled } from '@mui/material/styles';
import {   Theme, CSSObject } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';

// const drawerWidth = 300;

const openedMixin = (theme: Theme,drawerWidth?:any): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  overflowY: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  '& .MuiTypography-root':{
   display:"none"
  },
  '& .MuiListItemIcon-root':{
    paddingBottom:"35px"
  },
 
  overflowX: 'hidden',
  overflowY: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth?:any;
}
interface SidebarBarProps extends DrawerProps {
  open?: boolean;
  appbar?: boolean;
  drawerWidth?:any
}


export const Appbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open,drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const StyleDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' },)<SidebarBarProps>(
  ({ theme, open,appbar,drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflow:'hidden',
    overflowY: 'hidden',
    // boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme,drawerWidth),
      '& .MuiDrawer-paper': openedMixin(theme,drawerWidth),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),     
    }),
    '& .MuiListItemButton-root':{
    ':hover':{
      color: theme.palette.primary.light,
      backgroundColor:"white"
    },
    ':active':{
      opacity:'0.67'
    },
    paddingLeft:'0px',
    paddingRight:'0',
    marginRight:'10px',
},
    '& .MuiTypography-root':{
      fontSize: '.865rem',
    },
   
    '& .MuiListItem-root':{
      paddingTop:'0px',
      paddingBottom:'0px',
      paddingLeft:'17px',
      ':hover':{
         backgroundColor:"white"
      },
    },
    '& .MuiListItemIcon-root':{
      minWidth: '30px',
      flexShrink:0,
    },
    '& .css-1r9jet7':{
      backgroundColor:theme.palette.primary.main,
      border: "none"
    },
    '& .MuiSvgIcon-root':{
     color:"white"
    },
    ...(!appbar && {
      '& .MuiPaper-root': {
        marginTop: "70px",
      },
    }),
    '& .MuiListItemText-root':{
      paddingLeft: "10px"
    }
  }),
);
