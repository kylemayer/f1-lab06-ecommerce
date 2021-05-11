import gems from '../data/gems.js'
import { cartItems } from '../cart-items.js';

import { findById } from '../utils.js';


export function renderCartItem(cartItem) {
    const gemstones = findById(gems, cartItem.id);

    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = gemstones.category;
    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = gemstones.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const total = gemstones.price * cartItem.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    tr.append(nameTd, quantityTd, priceTd, totalTd);
    return tr;
}

export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartItems) {
        const gemstones = findById(gems, item.id);
        const total = item.quantity * gemstones.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}