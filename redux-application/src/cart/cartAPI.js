import axios from "axios";

// Getting the data from the api
export function fetchItems() {
  return axios.get('http://localhost:8080/cart')
}

// adding the data to the api
export function addItems(item) {
  return axios.post('http://localhost:8080/cart',item)
}

// updating the data on the api
// here the idem is the attribute of the particular item that has to be updated
export function updateItems(id,item) {
  return axios.patch(`http://localhost:8080/cart/${id}`,item)
}

// deleting the data from the api
export function deleteItems(id) {
  return axios.delete(`http://localhost:8080/cart/${id}`)
}
