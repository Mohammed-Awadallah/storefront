const initialState = {
    allProducts: [
      {category: 'food', name: 'mansaf', description: 'mansaf is a very famous jordanian dish', price: '17 JD', inventory: 99},
      {category: 'electronics', name: 'Iphone 12', description: 'a smart phone devoloped by apple', price: '700 JD', inventory: 99},
      {category: 'makeup', name: 'brush', description: 'a tool used to apply makeup', price: '2 JD', inventory: 99},
      {category: 'kitchen', name: 'knife sets', description: 'very fancy knife set', price: '30 JD', inventory: 99},
    ],
    displayedProducts: []
  }
  
  
  // eslint-disable-next-line
  export default (state = initialState, action) => {
  
    const {type, payload} = action;
  
    switch(type) {
  
      case 'Change':
        let displayedProducts = filterProducts(state.allProducts, payload);
        return {...state, displayedProducts};
  
      default:
        return state;
  
    }
  } 
  
  const filterProducts = (products, choice) => {
    return products.filter(product => product.category === choice);
  }