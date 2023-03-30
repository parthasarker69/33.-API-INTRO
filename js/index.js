const shop = {
    name: 'Alia shop',
    location: 'dhamrai',
    profit: 14000,
    owner: {
        name: 'alia bhutt',
        proffesion: 'actor',
        income: 1200000
    },
    products: ['apple watch', 'fruits']
}

const shopStrigyfied = JSON.stringify(shop);
console.log(shopStrigyfied)
const shopParse = JSON.parse(shopStrigyfied)
console.log(shopStrigyfied)
