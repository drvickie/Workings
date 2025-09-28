const cart = [];
const cartItemsContainer = document.getElementById("cart-items");

// Function to render the cart list
function renderCart() {
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}</span </br> ${item.price}`;
    cartItemsContainer.appendChild(li);
  });
}

// Select all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const name = product.querySelector(".name").textContent;
    const price = product.querySelector(".price").textContent;
    cart.push({ name, price });
    renderCart();

    console.log("Cart now:", cart);
  });
});


