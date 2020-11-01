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

let prices = [32.00, 42.00, 84.00, 35.00, 12.00, 54.00, 68.00, 90.00];

const catalog = {
    items: [],
    container: null,
    init() {
        this.container = document.querySelector('#catalog');
        this.items = getItems();
        this._render();
    },
    _render() {
        let htmlStr = '';

        this.items.forEach((item, i) => {
            htmlStr += `
            <div class="clothes">
                <a href="#">
                    <img src="img/4_fetured/fetured_${i + 1}.jpg" alt="photo">
                    <div class="ftr-product_hover">
                        <p><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Add to Cart</p>
                    </div>
                </a>
                <div class="clothers-p">
                    <p class="ftr-name">${item.productName}</p>
                    <p class="ftr-price">&#36;&nbsp;${item.productPrice}</p>
                </div>
            </div>
            `;
        });
        this.container.innerHTML = htmlStr;
    }
}

catalog.init();

function getItems() {
    let arr = [];
    for (let i = 0; i < titles.length; i++) {
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