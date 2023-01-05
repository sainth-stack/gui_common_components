import * as React from 'react';
import { forwardRef } from 'react';
import Popover from '@mui/material/Popover';
import { useTheme,} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { IoMdMenu } from "react-icons/io";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Appbar } from './styles';
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowRight} from "react-icons/md";
import { DrawerHeader } from './styles';
import Collapse from '@mui/material/Collapse';
import { hasChildren } from "./util";
import {StyleDrawer} from './styles';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
interface SidebarProps {
    variant:	'permanent',  
    anchor:	 'left' ,
    sx?:any,
    sidedata?:Array<NavLink>,
    appbar?:boolean,
    drawerheader?:boolean,
    handlecallback?:any,
    drawerWidth?:any,
    openDrawer?:boolean,
    ROUTE_MAPPER ?: {
      [key : string] : string
  },
}



interface UrlLink{
  id : string,
  label ?: string,
  url ?: string,
  isSubLinks ?: boolean,
  sublinks ?:  Array<UrlLink>, 
  shouldOpenNewTab ?: boolean
}

export interface NavLink extends UrlLink{
  icon ?: React.ReactNode,
  navigate ?: () => void  
}
const SingleLevel = ({ item,open,ROUTE_MAPPER }:any) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const openPopup = Boolean(anchorEl);
 const navigateTo=(url:string)=>()=>{
  navigate(url)
 }
const navigateToExternalUrl = (url: string) => () => {
  window.open(url, "_blank");
}
const location = useLocation()

  return (
    <Box>
    <ListItem 
    aria-owns={openPopup ? 'mouse-over-popover' : undefined}
    aria-haspopup="true"
    onMouseEnter={handlePopoverOpen}
    onMouseLeave={handlePopoverClose}
    sx={{
      "& .MuiListItemButton-root.Mui-selected": {
        color:'#1c84ee',
        backgroundColor:'white',
        ':hover':{
          backgroundColor:  'white'
        },
        }
    }}>
       <ListItemButton selected={item.url === location.pathname}  onClick={!(item?.sublinks) && (item?.shouldOpenNewTab) ? navigateToExternalUrl(item?.url as string) : navigateTo(item?.url as string) }>  
       <ListItemIcon sx={{marginTop:"10px" }}>{item.icon}</ListItemIcon>
       <ListItemText aria-selected={true} sx={{ marginRight:"10px"}} primary={item.label} />
      </ListItemButton>
    </ListItem>
    {/* {
      !open && <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: 'none',
        marginLeft:"50px",
      

      }}
      open={openPopup}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
       <ListItemText primary={item.label} sx={{color:  '#1c84ee',width:"150px",height:"40px",paddingLeft:"20px",paddingTop:"10px"}}/>
    </Popover>
    } */}
    </Box>
  );
};

const MultiLevel = ({ item ,open}:any) => {
  const location = useLocation()
  const { sublinks: children } = item;
  const Filter=(child:any)=>{
  const data = child.filter((item:any)=>{
    if(item?.isSubLinks){
      console.log(item)
      return item?.sublinks?.filter((item:any)=>item.url === location.pathname) .length >0
     }
     else return (item.url === location.pathname)
   })
   console.log(data)
   return data
  }
  const selectedChild=Filter(children)
  const [openchild, setOpenchild] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };  

  const openPopup = Boolean(anchorEl);
  const handleClick = () => {
    setOpenchild((prev:any) => !prev )  
  };
  return (
    <React.Fragment>
      <ListItem  onClick={open ? handleClick :()=>{} } aria-owns={openPopup ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        sx={{
          backgroundColor:'transparent',
          "& .Mui-selected": {
            color:'#1c84ee',
            backgroundColor:'transparent',
            ':hover':{
              backgroundColor:  'white'
            },
            }
        }}
        // onMouseLeave={handlePopoverClose}
        >   
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemButton selected={selectedChild.length>0}>
        <ListItemText primary={item.label} />
        {openchild ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
        </ListItemButton>
     
      </ListItem>
    
      <Collapse in={open && openchild }  timeout="auto" unmountOnExit>
 
      <List component="div" disablePadding >
        
          {children?.map((child:any, key:any) => (         
            <Box sx={{paddingLeft:'10px'}}  ><MenuItem key={key} item={child} open={open} /></Box>
          ))}
        </List>
      </Collapse>
      {/* {!open && <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          marginLeft:"50px",
          marginTop:"150px",
        }}
        
        open={openPopup}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
          <Box><ListItemText   primary={item.label} sx={{paddingLeft:"10px",color:  '#1c84ee'}} />
         <List >
          {children?.map((child:string, key:any) => (
            <MenuItem key={key} item={child}  open={open}/>  
          ))}
          </List>
          </Box>
      </Popover>} */}
    </React.Fragment>
  );
};

const MenuItem = ({ item ,open}:any) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item}   open={open}  />;
};

const Sidebar = forwardRef(({ sidedata,appbar=false,drawerWidth=300,openDrawer=true,drawerheader=false,handlecallback,ROUTE_MAPPER,...other } : SidebarProps, ref) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(()=>{
   setOpen(!open)
  },[openDrawer])
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    {appbar &&   <Appbar position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <IoMdMenu />
          </IconButton>
        </Toolbar>
      </Appbar>}
      <StyleDrawer 
      drawerWidth={drawerWidth}
      appbar={appbar}
        open={open}             
        theme={theme}
        sx={{
          textOverflow:'hidden'
        }}
        {...other}>
       {
        drawerheader &&  <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' &&  <IconButton
            color="inherit"
            aria-label="open drawer"
          >
             <IoMdMenu />
          </IconButton> }
           </IconButton>
        </DrawerHeader>
       }
        <Divider />    
        {sidedata?.map((item, key) => <MenuItem key={key} item={item}  open={open}   ROUTE_MAPPER={ ROUTE_MAPPER}/>)}   
      </StyleDrawer>    
    </Box>
  );
}
);

export default Sidebar;