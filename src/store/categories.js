const initialState = {
    allCategories: {
        food: {name:'Food', displayName: 'food', description: 'all food related products', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
        electronics: {name:'Electronics', displayName: 'electronics', description: 'all electronics'},
        makeup: {name:'Makeup', displayName: 'makeup', description: 'All makeup related products'},
        kitchen: {name:'Kitchen', displayName: 'kitchen', description: 'all kitchen related products'},
    },
      activeCategory: {name:'choose-category', displayName: 'Catagories', description: 'choose a category to see what we have available'},
  }
  
  
  // eslint-disable-next-line
  export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
      case 'Change':
        console.log(payload, state.allCategories[payload]);
        return {...state, activeCategory: state.allCategories[payload]};
  
      default:
        return state;
    }
  }
