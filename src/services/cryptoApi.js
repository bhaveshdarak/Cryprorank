import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4997265247msh6a52ba0b5169f2ep16701fjsn72cee9e3c122',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    

}),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
 
} = cryptoApi;

