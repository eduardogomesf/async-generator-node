const { randomUUID } = require('crypto');

const getProducts = async () => Array.from({ length: 1000 }, (_, index) => {
    const basePrice = 150;

    return {
        id: randomUUID(),
        name: `cellphone-${index}`,
        price: index ? index * basePrice : basePrice,
    }
});

module.exports = { getProducts }
