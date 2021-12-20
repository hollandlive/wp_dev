import getData from "./getData";

const cart = () => {

    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    //this method is faster then the second one
    const cartModalClose = cartModal.querySelector('.cart-close');
    //const cartModal = document.querySelector('.cart-close');

    const openCart = () => {
        cartModal.style.display = 'flex';
    }
    const closeCart = () => {
        cartModal.style.display = 'none';
    }
    // cartBtn.onclick = function () {
    //     openCart();
    // }

    cartBtn.addEventListener('click', openCart);

    cartModalClose.addEventListener('click', () => {
        closeCart();
    });

    getData('get Data from Cart');

}

export default cart;