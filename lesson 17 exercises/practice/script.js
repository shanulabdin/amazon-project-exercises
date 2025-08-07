const products = [
  {
    id: '1',
    name: 'Umbrella',
    image: 'umbrella.jpg',
    priceCents: 150000,
    rating: {
      stars: 4.5,
      count: 120
    }
  },
  {
    id: '2',
    name: 'Backpack',
    image: 'backpack.jpg',
    priceCents: 3000,
    rating: {
      stars: 4.0,
      count: 90
    }
  }
];


let productHTML = '';

products.forEach((product) => {
  productHTML += `
    <div class="product-container">

      <img class="product-image" src="${product.image}">
      <h3>${product.name}</h3>
      <p>Price: $${(product.priceCents / 100).toFixed(2)}</p>

      <select class="js-quantity-selector-${product.id}">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button class="button-primary js-add-to-cart" data-product-id="${product.id}">
      Add to Cart
      </button>

    </div>
  `
});

document.querySelector('.js-products-grid')
  .innerHTML = productHTML;

const cart = [];

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {

      const productIdentity = button.dataset.productId;

      const quantitySelector = document.querySelector(`.js-quantity-selector-${productIdentity}`);

      const quantity = Number(quantitySelector.value);

      cart.push({
        productIdentity,
        quantity
      })
      console.log(cart);
    })
  });