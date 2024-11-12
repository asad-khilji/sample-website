// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch the products JSON file
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        // Find the product with the matching ID
        const product = products.find(p => p.id == productId);
        
        if (product) {
            const productDetails = document.getElementById('product-details');
            productDetails.innerHTML = `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                    </div>
                    <div class="product-info">
                        <h2>${product.name}</h2>
                        <p class="price"><strong>Price:</strong> ${product.price}</p>
                        <p class="description">${product.description}</p>
                        <a href="collection.html" class="btn">Back to Collection</a>
                    </div>
                </div>
            `;
        } else {
            document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
        }
    })
    .catch(error => console.error('Error loading product details:', error));