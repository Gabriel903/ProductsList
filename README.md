## Desafio CRUD com hooks

Construir um CRUD em ReactJS 16.8 (hooks) com componentes de apresentação e containers consumindo as nossas APIs em GraphQL (preferência utilizando o Apolo).  Pode ser utilizado qualquer layout (CSS) para o projeto.

1) Criar uma listagem de produtos com paginação, consumindo a query abaixo:

URL: https://api.dev.nodis.com.br/sku_seller/v1/graphql

Body
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

2)  Ao clicar no item da lista, exibir o detalhe em uma ficha com popup com 2 botões: Salvar e Cancelar.

URL: https://api.dev.nodis.com.br/sku_seller/v1/graphql

Body
{
  sku(id:"5d2cc6f654deaa8d4ef5d5a0"){
    id
    code
    ean
    name
    description
    quantity
    salePrice
    promotionalPrice
    package {
      height
      width
      depth
      weight
    }
    category {
      id
      name
    }
    images {
      url
      type
      createdAt
      deletedAt
    }
  }
}

3) Na tela de detalhe do produto, deixar apenas os campos salePrice, promotionalPrice e name editável. Ao clicar no botão de salvar, usar o mutation abaixo para atualizar os dados:

URL: https://api.dev.nodis.com.br/sku_seller/v1/graphql

Body

mutation updateSku {
  updateSku(data: {
    id: "5d2cc6f654deaa8d4ef5d5a0"
    salePrice: 20
    promotionalPrice: 19
    name: "Kley Hertz"
  }
  ),
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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dockerizado usado os seguintes comandos:
	- docker build -t listproduct .
	- docker run -it -p 8080:80 listproduct

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
