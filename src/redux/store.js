import {configureStore} from "@reduxjs/toolkit"
import {dragonsApi} from './dragonsApi'
import {oneDragonApi} from './oneDragonApi'

export const store = configureStore({
    reducer: {
        [dragonsApi.reducerPath]: dragonsApi.reducer,
        [oneDragonApi.reducerPath]: oneDragonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dragonsApi.middleware)
})