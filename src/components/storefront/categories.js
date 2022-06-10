import React from 'react'
import {connect} from 'react-redux'
import { change, removeCart , getRemoteData } from '../../store/';
import ActiveCategory from './current-category';
import SimpleCart from '../cart/simplecart';
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import { useEffect } from 'react'



const useStyles = makeStyles((theme) => ({
  categoryContainer: {
    padding: 30,
  },
  title: {
    fontSize: 36,
  },
  allCategories: {
    display: "flex",
  },
  category: {
    margin: 20,
    textDecoration: "none",
  },
}));


const Categories = (props) => {
  const classes = useStyles();
  // useEffect(() => {
  //   props.get();
  // }, [])

  return (
    <section className={classes.categoryContainer}>
     
      <div className={classes.title}>Browse our Categories</div>
      <div className={classes.allCategories}>
        {Object.keys(props.category.allCategories).map(function(key, index) {
          return (
            <p key={key}>
              <Link href = '#'  color="inherit" onClick={()=> props.change(key)} className={classes.category}>{props.category.allCategories[key].displayName}</Link>
            </p>
          )
        })}
      </div>
      <ActiveCategory category={props.category.activeCategory} className={classes.centerBody}/>
      <SimpleCart/>
      {/* {props.cart.cart.map(function(product, index) {
          return (
            <div style={{display: "flex", flexDirection: "coloumn"}} key={index}>
            <button key={index} onClick={()=> props.removeCart(product)}>
              {product.name + ' remove from cart'}
            </button>
            </div>
          )
        })} */}

    </section>
  )
}

const mapStateToProps = state => ({
  category: state.categories,
  cart: state.cart
})


const mapDispatchToProps = (dispatch, getState) => ({ 
  get: ()=> dispatch(getRemoteData('categories')),
  change: (input)=> dispatch(change(input)),
  removeCart: (input)=> dispatch(removeCart(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories); 