// // import {createSlice} from "@reduxjs/toolkit";
// // const initialState = {
// //     cartItems: [],
// //     totalQty: 0,
// //     totalAmount: 0}
// // const cartSlice = createSlice({
// //     name : "cart",
// //     initialState,
// //     reducers: {
// //         addToCart: (state, action) => {
// //             state.cartItems.push(action.payload)
// //         }
// //      }})

// //      export const {addToCart} = cartSlice.actions;

// //      export default cartSlice.reducer;


// const initialState = {
//     cart: [],
//     count : 0,
//   }
  
  
//   // eslint-disable-next-line
//   export default (state = initialState, action) => {
  
//     const {type, payload, product} = action;
//     let sameProduct, index;
  
//     switch(type) {
//       case 'AddCart':
//         [sameProduct, index] = findExisting(state.inventory, product.name);
//         if(sameProduct) {
//           state.inventory.splice(index, 1, sameProduct)
//           return {...state};
//         }
//         return {...state, inventory: [...state.inventory, product]}
  
//       case 'RemoveCart':
//         [sameProduct, index] = findExisting(state.inventory, payload);
//         if(sameProduct && sameProduct.cart > 0) return {...state};
        
//         state.inventory.splice(index, 1)
//         return {...state};
  
//       default:
//         return state;
//     }
//   } 
  
// //   const removeOne = (products, choice) => {
// //     return products.filter(product => product.name !== choice);
// //   }
  
//   const findExisting = (products, name) => {
//     for(let i = 0; i < products.length; i++) {
//       if(products[i].name === name) return [products[i], i];
//     }
//     return [null, null];
//   }






let initialState = {
    cart: [],
    count: 0,
};

export default function CartReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_TO_CART':
            let cartArray = [...state.cart];
            let newItem = payload
            cartArray.push(newItem);
            return {count: state.count + 1, cart: cartArray}
        case "REMOVE_FROM_CART":
            let removeArr = [...state.cart];
            let removeItem = payload;
            removeArr.forEach((item, index) => {
                if (item.cartId === removeItem.cartId) {
                    removeArr.splice(index, 1);
                    return;
                }
            })

            return {count: state.count - 1, cart: removeArr}
        default:
            return state;
    }
}

export const addCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}
export const removeCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}

