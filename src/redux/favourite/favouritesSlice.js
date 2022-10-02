import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
    name: 'favouritesDragons',
    initialState: {dragons: []},
    reducers: {
        addFavouriteDragon(state, {payload}) {state.dragons.push(payload)},
        removeFavouriteDragon(state, {payload}) {state.dragons.filter(dragon => dragon.id !== payload)},
        getFavouriteDragon(state, {payload}) {state.dragons.find(dragon => dragon.id === payload)}
    }
})

export const {addFavouriteDragon, removeFavouriteDragon, getFavouriteDragon} = favouritesSlice.actions