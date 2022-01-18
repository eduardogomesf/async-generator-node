const { createServer } = require('http');

const PORT = 3000;

async function handler(request, response) {
    if (
        request.method === 'GET' &&
        request.url.includes('products/stock')
    ) {
        const { query: { productId } } = parse(request.url, true);

        const stock = Math.floor(Math.random() * 100); // generate stock randomly

        return response.end(JSON.stringify({ stock, productId }));
    }

    return response.end('Oops!')
}

createServer(handler)
    .listen(PORT, () => console.log(`Stock API is running on ${PORT}`))