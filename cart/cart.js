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

totalDiv.textContent = `Total: ${totalPrice.toLocaleString ('en-US', {
    style: 'currency',
    currency: 'USD'
})}`;

const placeButton = document.getElementById('place');

placeButton.addEventListener('click', () => {
    alert(`You're order has been placed! Please wait 17 weeks before arrival.`);
});
