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

const handleClick = () => {
  productInfo == false ? handleProductInfo(true) : handleProductInfo(false)
  console.log(productInfo)
  }

  if (error) return <p>ERROR</p>
  return (
    <Fragment>
      {data.skus && data.skus.edges.map((product, index) => (
        <table>
        <tr key={index} >
          <td onClick={handleClick}>{product.node.name}</td>
          <td>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
          </td>
        </tr>
        </table>
      ))}
      {productInfo && <ProductInfo />}
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