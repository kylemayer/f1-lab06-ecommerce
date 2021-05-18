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

placeButton.addEventListener('click', () => {
    alert(`You're order has been placed! Please wait 17 weeks before arrival.`);
});
