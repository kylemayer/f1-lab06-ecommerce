import { renderCartItem, getCartTotal } from './render-cart-item.js';

import { getCart } from '../local-storage-utils.js';

const cartItems = getCart();

const anc = document.querySelector('tbody');
const totalDiv = document.querySelector('#total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anc.append(tableRow);

}

const totalPrice = getCartTotal();

totalDiv.textContent = totalPrice.toLocaleString ('en-US', {
    style: 'currency',
    currency: 'USD'
});
