const url1 = "./data.json";

async function fetchData(url) {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);

  const containerEl = document.querySelector(".all__cards");

  data.forEach((el) => {
    containerEl.insertAdjacentHTML(
      "beforeend",
      `
        <div class="product__card">
            <div class="prod__image_cont">
                <img class="product__image" src="${el.img}" alt="${el.title}"/>
                <button class="btn"><img src="./img/cart.png" alt="cart" />Add to Cart</button>
            </div>
            <div class="card__text">
                <h3>${el.title}</h3>
                <p>${el.description}</p>
                <h4>${el.price}</h4>
            </div>
        </div>
      `
    );
  });
});
