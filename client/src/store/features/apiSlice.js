// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with local host address
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getCities: builder.query({
      // The URL for the request is '"http://localhost:5000/all'
      query: () => '/all'
    }),
    /*getItineraries: builder.query({
      query: () => '/itineraries/all'
    }),*/
    getOneItinerary: builder.query({
      query: title => `itineraries/${title}`
    })
  })
})

// Export the auto-generated hook for the `getCities` query endpoint
export const { useGetCitiesQuery } = apiSlice
export const { useGetItinerariesQuery } = apiSlice
export const { useGetOneItineraryQuery } = apiSlice