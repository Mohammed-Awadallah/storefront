import { connect } from 'react-redux';
import {removeCart} from '../../store/cart'
import {incrementInventory} from '../../store/products'

function SimpleCart(props) {
    function handleRemoveCart(product) {
        props.removeCart(product);
        props.incrementInventory(product);
    }
    return (
        <div>
            {props.cart.cart.map(function (product, index) {
                return (
                    <div style={{ display: "flex", flexDirection: "coloumn" }} key={index}>
                        <button key={index} onClick={() => handleRemoveCart(product)}>
                            {product.name + ' remove from cart'}
                        </button>
                    </div>
                )

            })}
        </div>)
    }
const mapStateToProps = state =>{
    return {
    cart: state.cart
}}
const mapDispatchToProps =  {
    removeCart: removeCart,
    incrementInventory : incrementInventory
} 
    

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);