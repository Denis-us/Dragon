import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const dragonsApi = createApi({
    reducerPath: 'dragonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spacexdata.com/v4'}),
    endpoints: (build) => ({
        getDragons: build.query({
            query: () => 'dragons'
        })
    })
})

export const {useGetDragonsQuery} = dragonsApi