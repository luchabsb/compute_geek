import { createSlice } from '@reduxjs/toolkit';
import axios from '../utils/axios';

const initialState = {
  products: {},
  news: {},
  loading: false,
  productsError: {},
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts(state, action) {
      const products = action.payload;
      state.products = products;
      state.productsError = {}
    },
    getNews(state, action) {
      const news = action.payload;
      state.news = news;
      state.productsError = {}
    },
    changeLoading(state, action) {
      const loading = action.payload;
      state.loading = loading;
    },
    handleErrors(state, action) {
      const productsError = action.payload;
      state.productsError = productsError;
    },
  }
});

export const reducer = slice.reducer;

export const getProducts = () => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true))
  try {
    const response = await axios.get('/api/products')
    console.log(response)
    dispatch(slice.actions.getProducts(response.data))
    dispatch(slice.actions.changeLoading(false))

  } catch (err) {

    const response = {
    message: 'No fue posible cargar los productos, refresca la página'
    }

    dispatch(slice.actions.handleErrors(response))
    dispatch(slice.actions.changeLoading(false))
  }
};

export const getNews = () => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true))
  try {
    const response = await axios.get('/api/productsNews')
    dispatch(slice.actions.getNews(response.data))
    dispatch(slice.actions.changeLoading(false))

  } catch (err) {

    const response = {
    message: 'No fue posible cargar los productos, refresca la página'
    }

    dispatch(slice.actions.handleErrors(response))
    dispatch(slice.actions.changeLoading(false))
  }
};

export const postUsuario = (usuario) => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true));
  try {
    const response = await axios.post('api/usuarios', usuario)

    if (response.status === 200) {
      dispatch(slice.actions.postUsuario(response.data))
    }
    dispatch(slice.actions.changeLoading(false))
  } catch (err) {
    const response = {
    message: 'No es posible agregar el usuario'
    }
    dispatch(slice.actions.handleErrors(response))   
    dispatch(slice.actions.changeLoading(false))
  }
};

export const findUsuario = (cuil) => async (dispatch) => {

  dispatch(slice.actions.changeLoadingFindUsuario(true));

try {

  const response = await axios.get('/api/usuarios/mirecibo/' + cuil)
     
  dispatch(slice.actions.findUsuario(response.data.data_employee))
  dispatch(slice.actions.changeLoadingFindUsuario(false))

} catch (err) {

  const response = {
  message: 'No fue posible buscar el usuario'
  }

  dispatch(slice.actions.handleErrors(response))
  dispatch(slice.actions.changeLoadingFindUsuario(false))
}
};

export const patchUsuario = (data, id) => async (dispatch) => {

  try {
    const response = await axios.patch(`/api/usuarios/${id}`, data)
    if (response.status === 200) {
      dispatch(slice.actions.patchUsuario('modificado exitosamente'))
    } 
  } catch (err) {
    let response
      if (err.response.data.statusCode === 400) {
        response = {
            'statusCode': err.response.data.statusCode,
            'message': err.response.data.message
        }
      } else {
        response = {
            'statusCode': 500,
            'message': 'Ocurrió un error'
        }
      }
    dispatch(slice.actions.handleErrors(response))
  }
};

export const deleteUsuario = (id) => async (dispatch) => {

  try {

    const data = {
      'id': id
  }
  
    const response = await axios.delete(`/api/usuarios`, { data })
  
    if (response.status === 200) {
      dispatch(slice.actions.deleteUsuario('borrado exitosamente'))
    }
       
  } catch (err) {
  
    let response
      if (err.response.data.statusCode === 400) {
          response = {
              'statusCode': err.response.data.statusCode,
              'message': err.response.data.message
          }
      } else {
          response = {
              'statusCode': 500,
              'message': 'Ocurrió un error'
          }
      }
  
    dispatch(slice.actions.handleErrors(response))
  }
};

export const getRuta = (rutaState) => (dispatch) => {
  dispatch(slice.actions.getRuta(rutaState));
};

export default slice;
