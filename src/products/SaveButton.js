import React from 'react'

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const UPDATE_PRODUCT = gql`
    mutation updateSku($id: ID!, $salePrice: Int!, $promotionalPrice: Int!, $name: String!) {
        updateSku(
            data: {
            id: $id
            salePrice : $salePrice,
            promotionalPrice: $promotionalPrice,
            name: $name
        }),
        {
            ok,
            sku{
              id
            }
            errors{
              field
              errors{
                message
              }
            }        
        }
    }  
    `

export default function SaveButton(props) {
    const [updateProduct, { data }] = useMutation(UPDATE_PRODUCT)

    const handleSave = (props) => {
        const product = props.productName.node
        updateProduct({
            variables: {
                id: product.id,
                salePrice: product.salePrice,
                promotionalPrice: product.promotionalPrice,
                name: product.name
            }
        });
    }

    return (
        <button className="button muted-button"
            onClick={() => handleSave(props)}
        >
            Salvar
        </button>
    )
}