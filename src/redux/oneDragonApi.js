import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const oneDragonApi = createApi({
    reducerPath: 'oneDragonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spacexdata.com/v4'}),
    endpoints: (build) => ({
        getOneDragon: build.query({
            query: ({id}) => ({
                url: `dragons/${id}`,
                method: 'GET',
            })
        })
    })
})

export const {useGetOneDragonQuery} = oneDragonApi