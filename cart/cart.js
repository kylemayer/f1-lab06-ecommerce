import { renderCartItem, getCartTotal } from './render-cart-item.js';
import { cartItems } from '../cart-items.js';

const anc = document.querySelector('tbody');
const total = document.querySelector('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anc.append(tableRow);

}

const totalPrice = getCartTotal();

total.textContent - totalPrice.toLocaleString ('en-US', {
    style: 'currency',
    currency: 'USD'
});
