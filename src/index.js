const axios = require('axios');
const { getProducts } = require('./products');

const STOCK_URL = 'http://localhost:3000/products/stock'

async function* getProductsWithStock() {
    const products = await getProducts();
    
    for(const product of products) {
        const { data: stockInfo } = await axios.get(`${STOCK_URL}?productId=${product.id}`);

        const { stock } = stockInfo;

        const productWithStock = { stock };

        Object.assign(productWithStock, product);

        yield productWithStock;
    }
}

async function main() {
    for await (const product of getProductsWithStock()) {
        console.log(`${product.name}(${product.id}) processado com sucesso`);
        console.log('---------------------------------------------------------------------------------------------');
    }
}

main();