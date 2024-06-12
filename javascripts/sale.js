const products = {
  1: { name: "Original blend 200g", price: 500 },
  2: { name: "Original blend 500g", price: 900 },
  3: { name: "Special Blend 200g", price: 700 },
  4: { name: "Special Blend 500g", price: 1200 }
};

let purchases = [];

function add() {
  const productId = parseInt(document.getElementById("product").value);
  const quantity = parseInt(document.getElementById("number").value);
  
  if (!productId || !quantity) {
      window.alert("Please select a product and quantity.");
      return;
  }
  
  const product = products[productId];
  purchases.push({ ...product, quantity });
  
  window.alert(`Added: ${product.name}, ${quantity} units. Subtotal: ${product.price * quantity} yen.`);
}

function calc() {
  if (purchases.length === 0) {
      window.alert("No products added.");
      return;
  }

  let subtotal = 0;
  let details = "Products:\n";
  
  purchases.forEach(purchase => {
      const productTotal = purchase.price * purchase.quantity;
      subtotal += productTotal;
      details += `${purchase.name}, ${purchase.quantity} units, ${productTotal} yen\n`;
  });

  let shipping = 0;
  if (subtotal < 2000) {
      shipping = 500;
  } else if (subtotal < 3000) {
      shipping = 250;
  }

  const total = subtotal + shipping;
  
  window.alert(`${details}Subtotal: ${subtotal} yen\nShipping: ${shipping} yen\nTotal: ${total} yen`);
}
