import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

axios.defaults.baseURL = 'https://mongodb-project-dragons.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

const registration = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('/api/auth/register', credentials)
        token.set(data.token)
        return data
    } catch (error) {

    }
})

const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const {data} = await axios.post('/api/auth//login', credentials)
        token.set(data.token)
        return data
    } catch (error) {

    }
})

const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/api/auth//logout')
        token.unset()
    } catch (error) {

    }
})

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, {getState, rejectWithValue}) => {
    const state = getState()
    const persistedToken = state.auth.token
    
    if(persistedToken === null) {
        return rejectWithValue()
    }

    token.set(persistedToken)

    try {
        const {data} = await axios.get('/users/current')
        console.log(data)
        return data
    } catch (error) {
        rejectWithValue(error.message)
        token.unset();
        toast.warn('Время авторизации истекло! Пожалуйста, повторите аутентификацию!');
    }
    
})

const authOperations = {registration, login, logout, getCurrentUser}

export default authOperations