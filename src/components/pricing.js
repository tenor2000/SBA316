import { newEl } from "./utils.js";

function createPricing(priceObjects) {
  const pricing = newEl("section");
  pricing.setAttribute("id", "pricing");
  const heading = newEl("h2");
  heading.textContent = "Pricing";
  pricing.appendChild(heading);

  const cardContainer = newEl("div");
  cardContainer.setAttribute("class", "card-container price-div");

  priceObjects.forEach((tier) => {
    const card = createCard(tier);
    cardContainer.appendChild(card);
  });

  pricing.appendChild(cardContainer);
  return pricing;
}

function createCard(cardObj) {
  const card = newEl("div");
  card.setAttribute("class", "card price-card magnify");

  const banner = newEl("div");
  card.appendChild(banner);
  const title = newEl("h3");
  title.textContent = cardObj.name;
  banner.appendChild(title);

  const price = newEl("p");
  price.setAttribute("class", "price");
  price.textContent = `$${cardObj.price}/month`;
  banner.appendChild(price);

  const benefitList = newEl("ul");
  benefitList.setAttribute("class", "benefits");
  cardObj.benefits.forEach((benefit) => {
    const li = newEl("li");
    li.textContent = benefit;
    benefitList.appendChild(li);
  });
  card.appendChild(benefitList);

  return card;
}

export default createPricing;
