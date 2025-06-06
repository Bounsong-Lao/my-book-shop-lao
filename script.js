document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElem = document.querySelector('.cart-icon a'); // Assuming the link contains the count

    let cartItemCount = 0; // Simple counter for demonstration

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const bookTitle = event.target.dataset.bookTitle;
            alert(`"${bookTitle}" ຖືກເພີ່ມເຂົ້າກະຕ່າແລ້ວ!\n (ຟັງຊັນກະຕ່າຕົວຈິງຍັງບໍ່ໄດ້ພັດທະນາ)`);
            
            cartItemCount++;
            cartCountElem.textContent = `🛒 ກະຕ່າ (${cartItemCount})`;
            
            // Optionally disable the button after adding
            // event.target.disabled = true;
            // event.target.textContent = 'ເພີ່ມແລ້ວ';
        });
    });

    // You could add more complex cart logic here if needed for future expansion
    // For now, it's just a simple alert and counter.
});
