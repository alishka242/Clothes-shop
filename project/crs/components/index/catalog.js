function initCatalog() {
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
        basket: null,
        init(basket) {
            this.container = document.querySelector('#catalog');
            this.items = getCatalogItems(titles, prices);
            this.basket = basket;
            this._render();
            this._handeleEvents();
        },

        _render() {
            let htmlStr = '';

            this.items.forEach((item, i) => {
                htmlStr += renderCatalogTemplate(item, i);
            });

            this.container.innerHTML = htmlStr;
        },

        _handeleEvents() {
            this.container.addEventListener('click', event => {
                if(event.target.name == 'add') {
                    // console.log('КУПЛЕНО!')
                    let id = event.target.dataset.id; //from data-id
                    let item = this.items.find(el => el.productId == id);

                    item = Object.assign({}, item, { productAmount: 1 });
                    this.basket.add(item);
                }
            });
        }
    }

    return catalog;
}

function getCatalogItems(titles, prices) {
    let arr = [];
    for (let i = 0; i < titles.length; i++) {
        arr.push(createCatalogItem(i, titles, prices));
    }
    return arr;
}

function createCatalogItem(index, titles, prices) {
    return {
        productName: titles[index],
        productPrice: prices[index],
        productId: `prod_${index + 1}`,
    }
}

function renderCatalogTemplate(item, i) {
    return `
    <div class="clothes">
        <div class="clother_photo">
            <img src="../crs/accets/img/4_fetured/fetured_${i + 1}.jpg" alt="photo">
            <div class="ftr-product_hover">
                <button name="add" data-id="${item.productId}">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Add to Cart
                </button>

            </div>
        </div>
        <div class="clothers-p">
            <a href="#" class="ftr-name">${item.productName}</a>
            <p class="ftr-price">&#36;&nbsp;${item.productPrice}</p>
        </div>
    </div>
    `
}