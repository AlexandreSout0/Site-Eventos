// import {createStore}  from "redux"
// import usuarioReducer from './usuarioReducer';

// const store = createStore(usuarioReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit'

import usuarioReducer from './usuarioReducer';

const store = configureStore({ reducer: usuarioReducer })

export default store;