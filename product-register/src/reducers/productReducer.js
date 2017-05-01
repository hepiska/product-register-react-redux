
import { FETCH_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from '../actions/constants';

const initstate = [
];

//  load data from server
const fetchDataProcess = (payloads) => {
  const products = payloads.map((payload) => {
    return {
      name: payload.name,
      imageurl: payload.imageurl,
      price: payload.price,
      id: payload.id,
    };
  });
  return products;
};

//  add new product
const addProduct = (state, payloadProduct) => {
  const ids = state.map(product => product.id);
  const newId = Math.max(...ids) + 1;
  const newProduct = {
    id: newId,
    name: payloadProduct.name,
    imageurl: payloadProduct.imageurl,
    description: payloadProduct.description,
    price: payloadProduct.price,
  };
  const newstate = [...state, newProduct];
  return newstate;
};

// delete Product
const deleteProduct = (state, id) => {
  const newstate = state.filter(product => product.id !== id);
  return newstate;
};

const ProductReducer = (state = initstate, action) => {
  switch (action.type) {
    case FETCH_PRODUCT : {
      const newstate = fetchDataProcess(action.payload);
      return newstate;
    }
    case ADD_PRODUCT : return addProduct(state, action.payload);
    case DELETE_PRODUCT :return deleteProduct(state, action.payload);
    default: return state;
  }
};


export default ProductReducer;
