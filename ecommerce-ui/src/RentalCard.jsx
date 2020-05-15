import React, { Component } from 'react';
import  { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { IconButton } from '@material-ui/core';
import airbnbs from './_data/airbnbs.json';
import FaceIcon from '@material-ui/icons/Face';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HouseIcon from '@material-ui/icons/House';
import { CartContext } from './CartContext';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
     verticalAlign:'middle',
     display:'block',
     justifyContent:'center',
   
    
    },
    textSize:{
        fontSize: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    avatar: {
        backgroundColor: "teal",
      },
      mintypography:{
          fontSize:12,
          fontWeight:'bold',
          color:'teal',
      }
  });

const RentalCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {title,houseType,imgSrc,city,country,cost,description,hostName,isSuperhost,stars,reviews }= props; 
  
  const [cart, setCart]= useContext(CartContext); 
  const addToCart = () => {
      const rental={title:props.title, cost:props.cost};
       setCart(curr => [...curr,rental]); 
       
  }
  return (
   
                
    <Card>
           
        <CardHeader
                  avatar={
                      <Avatar aria-label="settings" className ={classes.avatar}>
                           { houseType === "Apartment" ?
                           <div>  <HomeWorkIcon /></div>: <div><HouseIcon/></div> 
                          }
                          
                      </Avatar>
                  }
              action ={<IconButton onClick={addToCart} area-label="settings">
                         <AddShoppingCartIcon />
                  </IconButton>}

                  //title={title}
                  subheader={houseType}
        />
    
     
          <CardMedia
        className={classes.media}
        image = {imgSrc}
      />

      <CardContent>
         
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       Cost: ${cost}   

        </Typography>
        <Typography variant="h5" component="h2">
            {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {city} {country}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
          <br />
         Host Name: {hostName} 
        </Typography>
        <Typography className={classes.mintypography}>
         { isSuperhost === true ?
         <div> Is A Super Host</div>: <div /> 
        }
            <br></br>
        
      
        </Typography>

        <Typography className={classes.textSize} >
        { stars=== 1 ?
         <div> <StarIcon /><StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /><StarBorderIcon /> {reviews} </div>: <div /> 
        }
          { stars=== 2 ?
         <div > <StarIcon />  <StarIcon /> <StarBorderIcon /><StarBorderIcon /><StarBorderIcon />  {reviews}</div>: <div /> 
        }
         { stars=== 3 ?
         <div> <StarIcon /> <StarIcon /> <StarIcon /><StarBorderIcon /><StarBorderIcon /> {reviews}</div>: <div /> 
        }
         { stars=== 4 ?
         <div > <StarIcon />  <StarIcon />  <StarIcon /> <StarIcon /> <StarBorderIcon />{reviews}</div>: <div /> 
        }
         { stars=== 4.5 ?
         <div > <StarIcon />  <StarIcon />  <StarIcon /> <StarIcon /><StarHalfIcon />{reviews}</div>: <div /> 
        }
            { stars=== 5 ?
         <div > <StarIcon />  <StarIcon />  <StarIcon /><StarIcon /><StarIcon /> {reviews}</div>: <div /> 
        }
       
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCart}> Add to Cart </Button>
      </CardActions>

    </Card>

  ); 


}

export default RentalCard; 