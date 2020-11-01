let titles = [
    'MARINA CLUB People T-shirt',
    'Mango People Red Bluse',
    'Mango People Jacket',
    'Mango People Bluse With Flowers',
    'Mango People Bluse in Line',
    'Mango People Hat',
    'Mango People Pants',
    'Mango People Blue Hoody'
];

let prices = [32, 42, 84, 35, 12, 54, 68, 90];

const catalog = {
    items: [],
    container: null,
    init() {
        this.container = document.querySelector('#catalog');
        this.items = getItems();
    }
}

catalog.init();

function getItems(){
    let arr = [];
    for(let i = 0; i < titles.length; i++){
        arr.push(createItem(i));
    }
    return arr;
}

function createItem(index) {
    return {
        productName: titles[index],
        productPrice: prices[index],
        productId: `prod_${index + 1}`,
    }
}