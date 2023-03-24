import Close from "../icons/icon_close.png";

const addToCartBtn = document.querySelectorAll(".addToCart");
addToCartBtn.forEach((addToCartButton) => {
  addToCartButton.addEventListener("click", addToCartBtnClick);
});
const shoppingCartItemContainer = document.querySelector(".shopping-cart");

function addToCartBtnClick(event) {
  const button = event.target;
  const productCard = button.closest(".product-card");

  const productCardTitle = productCard.querySelector(".prod-title").textContent;
  const productCardPrice = productCard.querySelector(".prod-price").textContent;
  const productCardImg = productCard.querySelector(".prod-img").src;

  addProductToCart(productCardTitle, productCardPrice, productCardImg);
}

function addProductToCart(productCardTitle, productCardPrice, productCardImg) {
  const shoppingCartRow = document.createElement("div");
  shoppingCartRow.classList.add("shopping-cart");
  const shoppingCartContent = `
    <div className="shoppingCart">
    <figure>
      <img
        src=${productCardImg}
        alt="bike"
      />
    </figure>
    <p>${productCardTitle}</p>
    <p>
      <span>$</span>
      <span id="product-price">${productCardPrice}</span>,00
    </p>
    <img src=${Close} alt="close" class="remove-prod"/>
  </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemContainer.append(shoppingCartRow)
}

