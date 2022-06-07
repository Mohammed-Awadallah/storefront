const initialState = {
    allProducts: [
      {category: 'food', name: 'mansaf', description: 'mansaf is a very famous jordanian dish', price: '17 JD', inventory: 99},
      {category: 'electronics', name: 'Iphone 12', description: 'a smart phone devoloped by apple', price: '700 JD', inventory: 99},
      {category: 'makeup', name: 'brush', description: 'a tool used to apply makeup', price: '2 JD', inventory: 99},
      {category: 'kitchen', name: 'knife sets', description: 'very fancy knife set', price: '30 JD', inventory: 99},
    ],
    displayedProducts: []
  }
  
  
  // Reducer
export default (state = initialState, action) => {

  const {type, payload, product} = action;
  let changedProduct;
  console.log(payload);
  console.log("products ----------> :", state);

  switch(type) {
    case 'ChangeCat':
      let displayedProducts = filterProductsCat(state.allProducts, payload);
      return {...state, displayedProducts};

    case 'AddCart':
        if (product.inventory > 0) {
          let allProducts = incrementDecrement(state.allProducts, product.name, true);
        return {...state, allProducts};
        }
        return {...state}

    case 'RemoveCart':
      if (product.cart > 0) {
        let allProducts = incrementDecrement(state.allProducts, product.name, false);
        return {...state, allProducts};
      }

    default:
      return state;
  }
} 

const filterProductsCat = (products, choice) => {
  return products.filter(product => product.category === choice);
}

const incrementDecrement = (products, name, boolean) => {
  return products.map((product) => {
    if (product.name === name) {
      if (boolean) {
        product.inventory--;
        product.cart++;
        return product;
      } else {
        product.inventory++;
        product.cart--;
        return product;
      } 
    } else {
      return product;
    };
  });
}