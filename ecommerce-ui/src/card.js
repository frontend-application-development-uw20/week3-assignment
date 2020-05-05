import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CircularProgress } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCart from './cart';



class AirCard extends React.Component {

  render() {
    const classes = this.props.styles;
    const {
      title,
      houseType,
      image,
      location,
      payment,
      host,
      rating
    } = this.props.data;
 
    
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar aria-label="home"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={location.city}
          maxWidth="200"
        />
        {image ? (
          <CardMedia component="img" className={classes.media} src={image} />
        ) : (
          <CircularProgress />
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Property Type: {houseType}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Location: {location.city} {location.country}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {rating.stars}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Total Reviews: {rating.reviews}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Cost: ${payment.cost}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Host: {host.name}
          </Typography>
        </CardContent>

        {host.isSuperhost ? (
          <CardContent></CardContent>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            Superhost
          </Typography>
        )}

        {payment.description ? (
          <Typography variant="body2" color="textSecondary" component="p">
            {payment.description}
          </Typography>
        ) : (
          <CardContent></CardContent>
        )}

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default AirCard;
