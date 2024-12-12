export function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} USD</p>
            <button class="details-button" data-id="${product.id}">Ver Detalles</button>
        `;
        productList.appendChild(productElement);
    });
}

export function filterAndSearch(products) {
    const selectedCategory = categoryFilter.value; 
    const searchTerm = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory; 
        const matchesSearch = product.name.toLowerCase().includes(searchTerm); 
        return matchesCategory && matchesSearch;
    });

    renderProducts(filteredProducts);
}
