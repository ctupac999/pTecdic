import { products } from './data/products.js';
import { renderProducts, filterAndSearch } from './components/productList.js';
import { openModal } from './components/modal.js';
import { initAnimations } from './components/buttonAnimation.js';
import { checkout } from './components/cart.js';  

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    categoryFilter.addEventListener('change', () => filterAndSearch(products));
    searchInput.addEventListener('input', () => filterAndSearch(products));

    initAnimations();
    
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', checkout);
});

productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('details-button')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        openModal(product);
    }
});




