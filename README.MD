<h1>Async generator</h1>

![Node JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br />

Async generator is an example of how to use async generators to process data on demand.

 * It has a http server without framework
 * Generates an array with 1000 products
 * The http server provides an endpoint to get a stock value, generated randomly, for a product
 * After getting the stock value of a product, the product can be processed

 <br/>

<h2>Installation</h2>
<hr />

 If you use npm, then run:
```bash
npm install
```

If you use yarn, then run:
```bash
yarn
```

<br />

<h2>Running the project</h2>
<hr />

 First, it's necessary to run the http server, so run:
```bash
node ./src/services/stock.js
```

To starting processing the products, run:
```bash
node ./src/index.js
```