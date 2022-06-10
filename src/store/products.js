const initialState = {
    allProducts: [
      {category: 'food', name: 'mansaf', description: 'mansaf is a very famous jordanian dish', price: '17 JD', inventory: 4},
      {category: 'electronics', name: 'Iphone 12', description: 'a smart phone devoloped by apple', price: '700 JD', inventory: 1},
      {category: 'makeup', name: 'brush', description: 'a tool used to apply makeup', price: '2 JD', inventory: 25},
      {category: 'kitchen', name: 'knife sets', description: 'very fancy knife set', price: '30 JD', inventory: 35},
    ],
    displayedProducts: []
  }
  
  
  // eslint-disable-next-line
  export default (state = initialState, action) => {

    const {type, payload} = action;
   
    switch(type) {
      case 'ChangeCat':
        let displayedProducts = filterProductsCat(state.allProducts, payload[0]);
        return {...state, displayedProducts};

        case 'GET.P':
      return {...state, allProducts: payload.results};
      
        case 'INCREMENT_INVENTORY':
        let item = state.allProducts.find(product => product.name === payload.name);
        item.inventory++;
        return {...state};
        case 'DECREMENT_INVENTORY':
        let item2 = state.allProducts.find(product => product.name === payload.name);
        item2.inventory--;
        return {...state};

      default:
        return state;
    }
  } 
  
  const filterProductsCat = (products, choice) => {
    return products.filter(product => product.category === choice);
  }
  
  export const incrementInventory = (item)=>{
    return{
    type : 'INCREMENT_INVENTORY',
    payload : item
    }
  }

export const decrementInventory = (item)=>{
  return{
    type : 'DECREMENT_INVENTORY',
    payload : item
  }
}