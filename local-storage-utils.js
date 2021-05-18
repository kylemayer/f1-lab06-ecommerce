import { findById } from './utils.js';

const CART = 'CART';

export function getCart() {
    const strCart = localStorage.getItem(CART);

    const parCart = JSON.parse(strCart);

    if (parCart) { 
        return parCart;
    } else {
        return [];
    }
}


export function setCart(myCart) {
    const strCart = JSON.stringify(myCart);

    localStorage.setItem(CART, strCart);
}



export function addItemToCart(productId) {
    const shopCart = getCart ();
    const shopCartItem = findById(shopCart, productId);
    
    if (shopCartItem) {
        shopCartItem.quantity++;
    } else {
        const lineItem = {
            id: productId,
            quantity: 1
        };
        shopCart.push(lineItem);
    }
    setCart(shopCart);
}





