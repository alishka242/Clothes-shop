function initCatalog() {
    const catalog = {
        items: [],
        container: null,
        basket: null,
        url: 'https://raw.githubusercontent.com/alishka242/static/master/JSON/catalog.json',
        init(basket) {
            this.container = document.querySelector('#catalog');
            this.basket = basket;

            //async
            this._get(this.url)
            .then(catalog => {
                this.items = catalog;
                this._render();
                this._handelEvents();
            });
        },

        _get(url) {
            return fetch(url).then(d => d.json()); //сделает запрос за джейсоном, дождется ответа и преобразует джейсон в объект, который вернется из данного метода
        },

        _render() {
            let htmlStr = '';

            this.items.forEach((item, i) => {
                htmlStr += renderCatalogTemplate(item, i);
            });

            this.container.innerHTML = htmlStr;
        },

        _handelEvents() {
            this.container.addEventListener('click', event => {
                if (event.target.name == 'add') {
                    // console.log('КУПЛЕНО!')
                    let id = event.target.dataset.id; //from data-id
                    let item = this.items.find(el => el.productId == id);
                    this.basket.add(item);
                }
            });
        },
    };

    return catalog;
}

function renderCatalogTemplate(item, i) {
    return `
    <div class="clothes">
        <div class="clother_photo">
            <img src="${item.productImg}" alt="photo">
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