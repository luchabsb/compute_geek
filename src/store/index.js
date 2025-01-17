import { 
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
  } from 'react-redux';
  import { configureStore } from '@reduxjs/toolkit';
  import rootReducer from './rootReducer';
  
  const store = configureStore({
    reducer: rootReducer,
    devTools: false,
  });
  
  export const useSelector = useReduxSelector;
  
  export const useDispatch = () => useReduxDispatch();
  
  export default store;
  