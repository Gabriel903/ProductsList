import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ProductInfo from './ProductInfo'

const PRODUCTS = gql`
          query loadMore($s: Int)
          {
            skus(size: $s, sellerId:"5d1617f6e5f0c14f45d86532")
            {
              edges
              {
                node{
                  id
                  ean
                  name
                  code
                  sellerId
                  status
                  quantity
                  salePrice
                  promotionalPrice
                  images {
                    url
                    type
                    createdAt
                    deletedAt
                  }
                }
              }
              pageInfo {
                startCursor
                endCursor
              }
            }
        }  
      `

const ListProducts = () => {
  const { data, error, fetchMore } = useQuery(PRODUCTS)
  const [productInfo, handleProductInfo] = useState(false)
  const [idProduct, actualIdProduct] = useState('')
  const [size, incrementSize] = useState(5)

  const handleClick = (e) => {
    productInfo === false ? handleProductInfo(true) : handleProductInfo(false)
    let id = idProduct
    id = e.target.id
    actualIdProduct(id)
  }

  const handleClose = () => {
    handleProductInfo(false)
  }

  const loadMore = () => {
      fetchMore({variables: {
        s: size,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        incrementSize(size + 5)
        return (fetchMoreResult)
      }
    })
  }

  if (error) return <p>ERROR</p>
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Promotional Price</th>
            <th>Sale Price</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {data.skus && data.skus.edges.map((product, index) => (
            <tr key={index} >
              <td>{product.node.name}</td>
              <td>{product.node.promotionalPrice}</td>
              <td>{product.node.salePrice}</td>
              <td>{product.node.quantity}</td>
              <td>
                <button id={product.node.id} onClick={handleClick}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {productInfo && <ProductInfo data={data} productInfo={productInfo} idProduct={idProduct} handleClose={handleClose} />}
      <button onClick={loadMore}>
        Load More
          </button>
    </Fragment>
  )
}
export default ListProducts