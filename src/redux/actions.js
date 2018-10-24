import axios from 'axios';


export const removeHouse = (id) => {
  return {
    type: 'REMOVE',
    id: id
  }
}
export const getHouses = () => {
  return dispatch => {
    axios.get('http://localhost:8080/api/houses')
    .then(res => {
      dispatch ({
        type: "GET",
        payload: res
      })
    })
    .catch(error => console.error(error))
  }
  }


export const newHouse = (newHouse) => {
  return {
    type: 'NEW_HOUSE',
    payload : newHouse
  }
}
export const newUrl = (url) => {
  return {
    type: 'ADD_URL',
    payload : url
  }
}
export const cancel = () => {
  return {
    type: 'CANCEL'
  }
}