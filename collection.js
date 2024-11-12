// Fetch the products JSON file
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        // Loop through products and display them
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a href="product.html?id=${product.id}">View Details</a>
            `;
            productList.appendChild(productItem);
        });
    })
    .catch(error => console.error('Error loading products:', error));