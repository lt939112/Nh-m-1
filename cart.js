const list = document.getElementById("cartList");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveAndReload() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  if (!list) return;
  if (cart.length === 0) {
    list.innerHTML = `<div class="empty-cart" style="text-align:center; padding:50px; color:white;">
        <p>Giỏ hàng đang trống.</p>
        <button onclick="window.location.href='index.html'" class="checkout-btn">Tiếp tục mua sắm</button>
    </div>`;
    return;
  }

  let total = 0;
  let html = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    return `
      <li class="cart-item-row">
        <div class="cart-item-left">
          <img src="${item.image}" class="cart-img">
          <div class="cart-info">
            <strong class="cart-name">${item.name}</strong> 
            <div class="item-total-price">${itemTotal.toLocaleString()}đ</div>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="qty-wrapper">
            <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
            <input type="number" class="qty-input-manual" value="${item.qty}" min="1" onchange="updateQtyManual(${index}, this.value)">
            <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
          </div>
          <button class="remove-btn-premium" onclick="removeItem(${index})">✕</button>
        </div>
      </li>`;
  }).join("");

  html += `
    <div class="cart-footer">
      <div class="total-section">
        <span class="total-label">TỔNG CỘNG:</span>
        <span class="total-amount">${total.toLocaleString()}đ</span>
      </div>
      <div class="cart-action-buttons">
        <button class="clear-all-btn" onclick="clearAllCart()">Xóa tất cả</button>
        <button class="checkout-btn" onclick="handleCheckout()">Thanh toán ngay</button>
      </div>
    </div>`;
  list.innerHTML = html;
}

window.changeQty = (index, delta) => {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) removeItem(index);
  else saveAndReload();
};

window.updateQtyManual = (index, value) => {
  let newQty = parseInt(value);
  if (isNaN(newQty) || newQty < 1) newQty = 1;
  cart[index].qty = newQty;
  saveAndReload();
};

window.removeItem = (index) => {
  if (confirm("Xóa sản phẩm này?")) {
    cart.splice(index, 1);
    saveAndReload();
  }
};

window.clearAllCart = () => {
  if (confirm("Xóa toàn bộ giỏ hàng?")) {
    cart = [];
    saveAndReload();
  }
};

// QUAN TRỌNG: Hàm lưu đơn hàng vào Lịch sử
window.handleCheckout = () => {
  if (cart.length === 0) return;
  if (confirm("Xác nhận thanh toán đơn hàng?")) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      orderId: "DH" + Math.floor(Math.random() * 90000 + 10000),
      date: new Date().toLocaleString("vi-VN"),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + (item.price * item.qty), 0)
    };
    orders.unshift(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    
    alert("Thanh toán thành công! Đơn hàng đã được lưu vào Lịch sử.");
    cart = [];
    localStorage.removeItem("cart");
    renderCart(); // Cập nhật lại giao diện giỏ hàng trống
  }
};

renderCart();