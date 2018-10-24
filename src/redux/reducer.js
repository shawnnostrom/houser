const initialState = {
  houses : []
  ,
  newHouse: [],
  url: ''
}

const reducer = ( state = initialState, actions) => {
  switch (actions.type) {
    case "REMOVE": {
      return {...state, houses:state.houses.filter(state => state.id !== actions.id)}
    }
    case "GET": {
      return {...state, houses: actions.payload.data }
    }
    case 'NEW_HOUSE': {
      return {...state, newHouse: actions.payload}
    }
    case 'ADD_URL': {
      return {...state, url: actions.payload}
    }
    case 'CANCEL': {
      return {...state, url: '',newHouse:''}
    }
    
    default: return state
  }
}

export default reducer;