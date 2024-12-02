const data = JSON.parse(dataProducts);
const featuredCards = document.querySelector(".fetured__cards");
const feturedCardEl = document.querySelectorAll(".fetured__card");

data.forEach((element) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("fetured__card");

  const featuredImgEl = document.createElement("img");
  featuredImgEl.classList.add("fetured__card_img");
  featuredImgEl.src = element.url;

  const featureCardTextEl = document.createElement("div");
  featureCardTextEl.classList.add("fetured__card_text");

  const featuredCardTitle = document.createElement("h5");
  featuredCardTitle.classList.add("fetured__card_title");
  featuredCardTitle.textContent = element.name;

  const featuredCardDescription = document.createElement("p");
  featuredCardDescription.classList.add("fetured__card_par");
  featuredCardDescription.textContent = element.description;

  const featuredPrice = document.createElement("span");
  featuredPrice.classList.add("fetured__card_price");
  featuredPrice.textContent = element.price;

  featuredCards.appendChild(cardEl);
  cardEl.appendChild(featuredImgEl);
  cardEl.appendChild(featureCardTextEl);
  featureCardTextEl.appendChild(featuredCardTitle);
  featureCardTextEl.appendChild(featuredCardDescription);
  featureCardTextEl.appendChild(featuredPrice);
});
