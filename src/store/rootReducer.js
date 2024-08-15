import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import { reducer as productsReducer } from '../slices/products'
import { reducer as usersReducer } from '../slices/users'
import { reducer as searchReducer } from '../slices/SearchProducts'


const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  users: usersReducer,
  search: searchReducer

});

export default rootReducer;
