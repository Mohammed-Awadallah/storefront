
import React from "react";
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));




const Header = (props) => {
  const classes = useStyles();




  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>


          <Typography variant="h6" className={classes.title} >
           
            StoreFront
          </Typography>

          <div>

            <IconButton aria-label="cart">

               <ShoppingCartIcon /> {props.cart.count} 

            </IconButton>

          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Header); 