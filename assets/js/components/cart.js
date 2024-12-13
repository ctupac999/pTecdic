export let cart = [];  
export function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();  
}

export function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();  
}

export function updateCartUI() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; 
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" />
                <p>${item.name}</p>
                <p>${item.price} €</p>
                <p>Cantidad: ${item.quantity}</p>
                <button class="remove-btn" data-id="${item.id}">Eliminar</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = `Total: ${total} €`;

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            removeFromCart(Number(productId)); 
        });
    });
}

export function checkout() {
    if (cart.length === 0) return alert('El carrito está vacío.');
    alert('Compra realizada con éxito.');
    cart = [];
    updateCartUI();
}   