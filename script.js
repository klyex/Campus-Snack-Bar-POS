const products = [
  { id: "classic-burger", name: "Classic Burger", price: 55 },
  { id: "cheeseburger", name: "Cheeseburger", price: 65 },
  { id: "ham-sandwich", name: "Ham Sandwich", price: 40 },
  { id: "french-fries", name: "French Fries (Regular)", price: 45 },
  { id: "nachos", name: "Nachos", price: 50 },
  { id: "soda-can", name: "Soda (Can)", price: 25 },
];

const productList = document.querySelector("#product-list");
const productCount = document.querySelector("#product-count");
const cartList = document.querySelector("#cart-list");
const emptyCart = document.querySelector("#empty-cart");
const orderTotal = document.querySelector("#order-total");
const cartMessage = document.querySelector("#cart-message");

const cart = new Map();

function formatCurrency(amount) {
  return `₱${amount.toFixed(2)}`;
}

function findProduct(productId) {
  return products.find((product) => product.id === productId);
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <div>
      <p class="product-name">${product.name}</p>
      <p class="product-price">${formatCurrency(product.price)}</p>
    </div>
    <button class="add-button" type="button" data-product-id="${product.id}">
      Add to Cart
    </button>
  `;

  return card;
}

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    productList.appendChild(createProductCard(product));
  });
  productCount.textContent = `${products.length} items`;
}

function getCartTotal() {
  return Array.from(cart.values()).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function createCartItem(item) {
  const row = document.createElement("article");
  row.className = "cart-item";

  row.innerHTML = `
    <div class="cart-item-main">
      <div>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatCurrency(item.price)} each</p>
      </div>
      <p class="cart-item-subtotal">
        Subtotal <strong>${formatCurrency(item.price * item.quantity)}</strong>
      </p>
    </div>
    <div class="cart-actions">
      <div class="quantity-controls" aria-label="${item.name} quantity controls">
        <button class="icon-button" type="button" data-action="decrease" data-product-id="${item.id}" ${item.quantity === 1 ? "disabled" : ""}>-</button>
        <span class="quantity-value">${item.quantity}</span>
        <button class="icon-button" type="button" data-action="increase" data-product-id="${item.id}">+</button>
      </div>
      <button class="remove-button" type="button" data-action="remove" data-product-id="${item.id}">Remove</button>
    </div>
  `;

  return row;
}

function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item) => {
    cartList.appendChild(createCartItem(item));
  });

  emptyCart.classList.toggle("is-hidden", cart.size > 0);
  orderTotal.textContent = formatCurrency(getCartTotal());
}

function setCartMessage(message) {
  cartMessage.textContent = message;
}

function addToCart(productId) {
  const product = findProduct(productId);

  if (!product) {
    return;
  }

  const existingItem = cart.get(productId);
  if (existingItem) {
    existingItem.quantity += 1;
    setCartMessage(`${product.name} quantity increased.`);
  } else {
    cart.set(productId, { ...product, quantity: 1 });
    setCartMessage(`${product.name} added to cart.`);
  }

  renderCart();
}

function increaseQuantity(productId) {
  const item = cart.get(productId);

  if (!item) {
    return;
  }

  item.quantity += 1;
  setCartMessage(`${item.name} quantity increased.`);
  renderCart();
}

function decreaseQuantity(productId) {
  const item = cart.get(productId);

  if (!item || item.quantity <= 1) {
    return;
  }

  item.quantity -= 1;
  setCartMessage(`${item.name} quantity decreased.`);
  renderCart();
}

function removeFromCart(productId) {
  const item = cart.get(productId);

  if (!item) {
    return;
  }

  cart.delete(productId);
  setCartMessage(`${item.name} removed from cart.`);
  renderCart();
}

productList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");

  if (!button) {
    return;
  }

  addToCart(button.dataset.productId);
});

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");

  if (!button) {
    return;
  }

  const productId = button.dataset.productId;
  const action = button.dataset.action;

  if (action === "increase") {
    increaseQuantity(productId);
  } else if (action === "decrease") {
    decreaseQuantity(productId);
  } else if (action === "remove") {
    removeFromCart(productId);
  }
});

renderProducts();
renderCart();
