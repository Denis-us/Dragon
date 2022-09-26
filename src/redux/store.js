import {configureStore} from "@reduxjs/toolkit"
// import { authApi } from './authApi';
import {dragonsApi} from './dragonsApi'
import {oneDragonApi} from './oneDragonApi'
import authReducer from './auth/authSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        [dragonsApi.reducerPath]: dragonsApi.reducer,
        [oneDragonApi.reducerPath]: oneDragonApi.reducer,
        // [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dragonsApi.middleware)
})