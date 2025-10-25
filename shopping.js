
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, product_name: "Product 1", price: 29.1 },
    { id: 2, product_name: "Product 2", price: 30.1 },
    { id: 3, product_name: "Product 3", price: 35.1111 },
  ];
  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartsMessage = document.getElementById("empty-cart");
  const cart_totalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutButton = document.getElementById("checkout-button");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
       <span>${product.product_name}-$${product.price.toFixed(2)}</span>
       <button data-id="${product.id}">Add to Cart</button>
       `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
      console.log(product);
    }
  });
  function addToCart(product) {
    cart.push(product);
    console.log(cart);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartsMessage.classList.add("hidden");
      cart_totalMessage.classList.remove("hidden");
      cart.forEach((cart) => {
        totalPrice += cart.price;
        const cartDiv = document.createElement("div");
        cartDiv.classList.add("cart");
        cartDiv.innerHTML = `
        <span>${cart.product_name}-$${cart.price}</span>
        `;
        cartItems.classList.remove("hidden");
        cartItems.appendChild(cartDiv);
        totalPriceDisplay.innerText = `${totalPrice.toFixed(2)}`
      });
    } else {
      emptyCartsMessage.classList.remove("hidden");
    }
  }
  checkOutButton.addEventListener('click',()=>
{
    cart.length=0;
    alert("Checkout Successfully!");
    renderCart();
    totalPriceDisplay.innerText=0.0;
})
});
