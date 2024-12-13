import { addToCart } from './cart.js';  

export function openModal(product) {
    const productModal = document.getElementById('productModal');
    
    let backdrop = document.getElementById('backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'backdrop';
        backdrop.className = 'backdrop';
        document.body.appendChild(backdrop);
    }

    if (!productModal.classList.contains('hidden')) return;

    productModal.innerHTML = `
        <div class="modal-header">
            <h2>${product.name}</h2>
            <button id="closeModal">X</button>
        </div>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p><strong>Precio:</strong> ${product.price} USD</p>
        <div class="modal-footer">
            <button class="add-to-cart" data-id="${product.id}">Añadir al Carrito</button>
        </div>
    `;

    productModal.classList.remove('hidden');
    backdrop.classList.remove('hidden');

    const addToCartButton = document.querySelector('.add-to-cart');
    
    addToCartButton.addEventListener('click', () => {
        addToCart(product);      
        setTimeout(() => {
            closeModal();  
        }, 700); 
    });

    document.getElementById('closeModal').addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
}

export function closeModal() {
    const productModal = document.getElementById('productModal');
    const backdrop = document.getElementById('backdrop');
    
    if (productModal) productModal.classList.add('hidden');
    if (backdrop) backdrop.classList.add('hidden');
}
