const initialState = {
  houses : [
    {id:0,name:'test',address:'test',city:'Provo',state:'ut',zip:84601},
    {id:1,name:'test2',address:'test2',city:'Provo',state:'ut',zip:84601}
  ],
}

const reducer = ( state = initialState, actions) => {
  switch (actions.type) {
    case "REMOVE": {
      return {...state, houses:state.houses.filter(state => state.id !== actions.id)}
    }
    

    
    default: return state
  }
}

export default reducer;