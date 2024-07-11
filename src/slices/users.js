import { createSlice } from '@reduxjs/toolkit';
import axios from '../utils/axios';

const initialState = {
  user: {},
  users: {},
  loading: false,
  userError: {},
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state, action) {
      const users = action.payload;
      state.users = users;
      state.userError = {}
    },
    getUser(state, action) {
      const user = action.payload;
      state.user = user;
      state.userError = {}
    },
    postUser(state, action) {
        const user = action.payload;
        state.user = user;
        state.userError = {}
    },
    signup(state, action) {
        const user = action.payload;
        state.user = user;
        state.userError = {}
    },
    changeLoading(state, action) {
      const loading = action.payload;
      state.loading = loading;
    },
    handleErrors(state, action) {
      const userError = action.payload;
      state.userError = userError;
    },
  }
});

export const reducer = slice.reducer;

export const getUsers = () => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true))
  try {
    const response = await axios.get('/api/users')
    dispatch(slice.actions.getUsers(response.data))
    dispatch(slice.actions.changeLoading(false))

  } catch (err) {

    const response = {
    message: 'No fue posible cargar los usuarios, refresca la página'
    }

    dispatch(slice.actions.handleErrors(response))
    dispatch(slice.actions.changeLoading(false))
  }
};

export const getUser = (user) => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true))
  try {
    const response = await axios.get(`/api/user/${user}`)
    dispatch(slice.actions.getUser(response.data))
    dispatch(slice.actions.changeLoading(false))

  } catch (err) {

    const response = {
    message: 'No fue posible encontrar el usuario, refresca la página'
    }

    dispatch(slice.actions.handleErrors(response))
    dispatch(slice.actions.changeLoading(false))
  }
};

export const postUser = (user) => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true));
  try {
    const response = await axios.post('api/users', user)

    if (response.status === 200) {
      dispatch(slice.actions.postUser(response.data))
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

export const signUp = (user) => async (dispatch) => {
    dispatch(slice.actions.changeLoading(true));
    try {
      const response = await axios.post('api/auth/signup', user)
  
      if (response.status === 200) {
        dispatch(slice.actions.signup(response.data))
      }
      dispatch(slice.actions.changeLoading(false))
    } catch (err) {
      dispatch(slice.actions.handleErrors(err.response.data))   
      dispatch(slice.actions.changeLoading(false))
    }
  };

export default slice;
