let cartCount = 0;


function addToCart(itemName) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert(`${itemName} added to your cart!`);
}


function showOffer() {
  alert("Use code 'ZEST15' at checkout for 15% off!");
}


function filterMenu(category, e) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => tab.classList.remove('active'));
  e.target.classList.add('active');

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}