import {configureStore} from "@reduxjs/toolkit"
import {dragonsApi} from './api/dragonsApi'
import {oneDragonApi} from './api/oneDragonApi'
import {favouritesSlice} from './favourite/favouritesSlice'
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
        favouritesDragons: favouritesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dragonsApi.middleware)
})