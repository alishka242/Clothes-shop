function initBasket() {
    let titles = [
        'MARINA CLUB People T-shirt',
        'Mango People Red Bluse',
    ];

    let prices = [32.00, 42.00];

    let amounts = [4, 2];

    const basket = {
        items: [],
        total: null,
        container: null, //basket_items
        wrapper: null, //basket-all
        sum: 0,
        totalContainer: null,
        init() {
            this.container = document.querySelector('#basket_items');
            this.wrapper = document.querySelector('#basket_inner');
            this.totalContainer = document.querySelector('#basket_sum');
            this.items = getBasketItems(titles, prices, amounts);
            this._render();
        },
        _render() {
            let htmlStr = '';

            this.items.forEach((item, i) => {
                htmlStr += renderBasketTemplate(item, i);
            });

            this.container.innerHTML = htmlStr;
            
            this._calcSum();
            this.add();
        },
        _calcSum() {
            this.sum = 0;
            this.items.forEach(item => {
                this.sum += item.productAmount * item.productPrice;
            });
            this.totalContainer.innerText = this.sum;
        },
        add(item = {productId: 0}) {
            
            let  toggle = false;  
              
            this.items.forEach((el, index) => {
                if(el.productId === item.productId){
                    el.productAmount += 1;
                    toggle = true;
                    this._render();
                }
            });
            if(!toggle && item.productId !== 0 ){
                console.log("добавили");
                this.items.push(item);
                this._render();
            }
        },
        _remove() {
            //реализовать
        },
        _handleEvents() {
            // +++ организовать скрытие/показ корзины по клику а не по ховеру
        }
    }
    return basket;
    //basket.init();
}

function getBasketItems(titles, prices, amounts) {
    let arr = [];

    for (let i = 0; i < titles.length; i++) {
        arr.push(createBasketItem(i, titles, prices, amounts));
    }

    return arr;
}

function createBasketItem(index, titles, prices, amounts) {
    return {
        productId: `prod_${index + 1}`,
        productName: titles[index],
        productPrice: prices[index],
        productAmount: amounts[index],
    }
}


function renderBasketTemplate(item, i) {
    return `
    <div class="selected-item">
        <a href="#"><img src="../crs/accets/img/1_header/item-${i + 1}.jpg" alt="photo"></a>
        <div>
            <p><a href="#" class="item-name">Rebox Zane</a></p>
            <p class="item-stars">
                <a href="#">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                </a>
            </p>
            <p class="item-price">${item.productAmount} x &#36; ${item.productPrice}</p>
        </div>
        <a href="#"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>
    </div>
    `
}