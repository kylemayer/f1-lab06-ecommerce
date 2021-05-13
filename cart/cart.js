import { renderCartItem, getCartTotal } from './render-cart-item.js';

import { getCart } from '../local-storage-utils.js';

const cartItems = getCart();

const anc = document.querySelector('tbody');


for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anc.append(tableRow);

}

const totalPrice = getCartTotal();
const total = document.getElementById('total');

total.textContent = `Total: ${totalPrice.toLocaleString ('en-US', {
    style: 'currency',
    currency: 'USD'
})}`;

const placeButton = document.getElementById('place');
const emptyButton = document.getElementById('empty');

placeButton.addEventListener('click', function () {
    console.log(placeButton);
});

emptyButton.addEventListener('click', function () {
    console.log(emptyButton);



});