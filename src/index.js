import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const BASE_URL = 'https://api.dev.nodis.com.br/sku_seller/v1/graphql'

const client = new ApolloClient({
    uri: BASE_URL,
  })

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
  );
  
