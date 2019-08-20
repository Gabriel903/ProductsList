import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Product from './Product'

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
        console.log("aaa",props)
        if (error) return <p>ERROR</p>
        return (
            <Fragment>
                {data.skus && data.skus.edges.map(product => (
                    <Product name={product.node.name} />
                ))}
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