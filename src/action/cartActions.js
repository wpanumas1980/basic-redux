export const ADD_TO_CART = 'ADD_TO_CART';

// const action = {
//   type: '',
//   payload: {
//     id: '',
//     title: '',
//     price: 2,
//     quantity: 1
//   }
// }

export function addToCart(addedProduct) {
  return {
    type: ADD_TO_CART,
    paylload: addedProduct
  }
}