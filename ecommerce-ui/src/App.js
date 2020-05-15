import React from 'react';
import {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import Header from "./Header"; 
import Rentals from "./Rentals"; 
import Cart from "./Cart";


const useStyles = makeStyles({
  headerStyle: {
    fontStyle: 'oblique',
    color: "pink",
    fontsize: "60px"
  },
  descr:{
    fontStyle: 'oblique',
    marginTop:"50px",
    marginBottom:"50px",
    fontsize: "30px"
  }
   
});

function App() {
   const classes = useStyles();

  return (
    <Grid container direction ="column">

      <Grid item className={classes.headerStyle}>
         <Header />
    
      </Grid>
      <Grid item container className={classes.descr}>
      <Grid item sm={2}/> 
      <Grid item sm={8}> 
       Choose Your Vacation Rentals from one of the below options :
      </Grid>
      <Grid item sm={2}/> 
      </Grid>
      <Grid item container>
         <Grid item xs={0} sm={2} /> 
         <Grid item xs={12} sm={8} > 
           <Rentals />
          
         </Grid> 
         <Grid item xs={0} sm={2} >  </Grid>
         
      </Grid>
        
    
    </Grid>
  
  );
}

export default App;
