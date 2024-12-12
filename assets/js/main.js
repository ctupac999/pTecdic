import { products } from './data/products.js';
import { renderProducts, filterAndSearch } from './components/productList.js';
import { openModal } from './components/modal.js';
import { initAnimations } from './components/animation.js';

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");
    renderProducts(products);

    categoryFilter.addEventListener('change', () => filterAndSearch(products));
    searchInput.addEventListener('input', () => filterAndSearch(products));

    initAnimations();
});

productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('details-button')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        openModal(product);
    }
});
