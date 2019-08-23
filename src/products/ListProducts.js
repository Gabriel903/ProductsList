import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ProductInfo from './ProductInfo'

const PRODUCTS = gql`
      {
          skus(size: 5, sellerId:"5d1617f6e5f0c14f45d86532")
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

const ListProducts = (props) => {
  const { data, error, fetchMore } = useQuery(PRODUCTS)
  const [productInfo, handleProductInfo] = useState(false)
  const [idProduct, actualIdProduct] = useState('')

  const handleClick = (e) => {
    productInfo === false ? handleProductInfo(true) : handleProductInfo(false)
    let id = idProduct
    id = e.target.id
    actualIdProduct(id)
  }

  const handleClose = () => {
    handleProductInfo(false)
  }

  if (error) return <p>ERROR</p>
  return (
    <Fragment>
      <table>
        <tbody>
          {data.skus && data.skus.edges.map((product, index) => (
            <tr key={index} >
              <td onClick={handleClick} id={product.node.id}>{product.node.name}</td>
              <td>
                <button className="button muted-button">Edit</button>
                <button className="button muted-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {productInfo && <ProductInfo productInfo={productInfo} idProduct={idProduct} handleClose={handleClose} />}
      <button onClick={() => {
        fetchMore({
          variables: {
          }
        })
      }}>
        Load More
          </button>
    </Fragment>
  )
}
export default ListProducts