import React from 'react';

import ListProducts from './products/ListProducts'

const App = () => {
  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ListProducts />
        </div>
        <div className="flex-large">
        </div>
      </div>
    </div>
  )
}

export default App;
