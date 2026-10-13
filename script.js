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

function formatCurrency(amount) {
  return `₱${amount.toFixed(2)}`;
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

renderProducts();
