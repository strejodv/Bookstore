document.addEventListener('DOMContentLoaded', function() {
    // Initialize the cart array
    let cart = [];

    // Get all the elements we need
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const ctaReviewCartButton = document.querySelector('.cta-button'); // Review Cart button in hero section
    const cartModal = document.createElement('div');
    const cartModalContent = document.createElement('div');
    const modalOverlay = document.createElement('div');
    const clearCartButton = document.createElement('button');
    const processOrderButton = document.createElement('button');

    // Create and style the modal for the cart
    cartModal.classList.add('cart-modal');
    cartModalContent.classList.add('cart-modal-content');
    modalOverlay.classList.add('modal-overlay');

    cartModal.appendChild(modalOverlay);
    cartModal.appendChild(cartModalContent);
    document.body.appendChild(cartModal);

    // Function to update the cart modal with the current cart content
    function updateCart() {
        // Clear the current modal content
        cartModalContent.innerHTML = '';

        // If the cart is empty, display a message
        if (cart.length === 0) {
            cartModalContent.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        // Display the items in the cart
        const cartList = document.createElement('ul');
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} - $${item.price}`;
            cartList.appendChild(listItem);
        });
        cartModalContent.appendChild(cartList);

        // Add Clear Cart and Process Order buttons
        clearCartButton.textContent = 'Clear Cart';
        processOrderButton.textContent = 'Process Order';
        cartModalContent.appendChild(clearCartButton);
        cartModalContent.appendChild(processOrderButton);
    }

    // Add items to the cart when "Add to Cart" is clicked
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productElement = button.closest('.product');
            const title = productElement.querySelector('.product-title').textContent;
            const price = parseFloat(productElement.querySelector('.product-price').textContent.replace('$', ''));

            // Add item to the cart
            cart.push({ title, price });

            // Show "Item added" message
            alert('Item added to cart');

            // Update the cart display in the modal
            updateCart();
        });
    });

    // Open the cart modal when the "Review Cart" button is clicked
    if (ctaReviewCartButton) {
        ctaReviewCartButton.addEventListener('click', function() {
            cartModal.style.display = 'block'; // Show the modal
            document.body.style.overflow = 'hidden'; // Disable scrolling
        });
    } else {
        console.error("The 'Review Cart' button was not found!");
    }

    // Close the modal when the overlay is clicked
    modalOverlay.addEventListener('click', function() {
        cartModal.style.display = 'none'; // Hide the modal
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Clear the cart when the "Clear Cart" button is clicked
    clearCartButton.addEventListener('click', function() {
        cart = []; // Clear the cart array
        updateCart(); // Update the modal to reflect the empty cart
    });

    // Process the order when the "Process Order" button is clicked
    processOrderButton.addEventListener('click', function() {
        alert('Thank you for your order');
        cart = []; // Empty the cart
        updateCart(); // Update the modal to show that the cart is empty
    });
});
