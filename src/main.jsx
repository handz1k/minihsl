import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App.jsx'
import './index.css'
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from '@apollo/client'

const httpLink = createHttpLink({
  uri: `https://api.digitransit.fi/routing/v2/hsl/gtfs/v1?digitransit-subscription-key=${import.meta.env.VITE_HSL_KEY}`
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,  
})
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
