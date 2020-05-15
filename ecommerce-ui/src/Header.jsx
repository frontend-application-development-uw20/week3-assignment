import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core"; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from "./Cart";
import {CartProvider} from './CartContext';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import  {useContext} from 'react';
import {CartContext} from './CartContext';
import {Grid} from "@material-ui/core";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';

  
  const drawerWidth = 340;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    typographyStyles: {
        flex: 1, 
        color:"white",
    },
   buttonStyles: {
        
        color:"white",
    }, 
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      marginLeft:10,
      flexGrow: 1,
    },
    carttitle: {
        marginLeft:10,
        fontSize:20,
      },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }));
  

const Header = () => {
  
    const classes = useStyles();
    const theme = useTheme();
    const [cart, setCart]= useContext(CartContext); 
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
     const addToCart = () => { };
 return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Vacation Rentals
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
             
            <ShoppingCartIcon  />  {cart.length} items
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
    
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
        <Divider />
        <List>
        <Typography variant="h6" noWrap className={classes.title}>
            Cart
          </Typography>
        </List>
        <Divider />
        <List>
        <Typography variant="h6" noWrap className={classes.carttitle}>
           
          Items in your Cart
          
          </Typography>
        </List>
        <Divider />
        <List>
        <Typography variant="h6" noWrap className={classes.carttitle}>
        <Cart/>
        </Typography>
            
           
        </List>
       
      </Drawer>
    </div>
 )
//  <AppBar position="static" >
//      <Toolbar>

//          <Typography className={classes.typographyStyles} >
//             Vacation Rentals
//          </Typography>
        
//          <Button onClick={addToCart} className={classes.buttonStyles}>
         
//                         <ShoppingCartIcon  ></ShoppingCartIcon>
     
//           </Button>
//                        <Cart/>
            
//             {/* {this.state.isActive ? <h1> <Cart /></h1> : null }
//              <button onClick={this.handleShow}>Show</button>
//              <button onClick={this.handleHide}>Hide</button> */}       
         
//      </Toolbar>
//  </AppBar>
 
}; 

export default Header; 