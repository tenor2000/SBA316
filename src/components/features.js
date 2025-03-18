import { newEl, createCard } from "./utils.js";

function createFeatures(featureObjects) {
  const features = newEl("section");
  features.setAttribute("id", "features");

  const heading = newEl("h2");
  heading.textContent = "Features";
  features.appendChild(heading);

  const cardContainer = newEl("div");
  cardContainer.setAttribute("class", "card-container");
  features.appendChild(cardContainer);

  featureObjects.forEach((feature) => {
    const card = createCard(feature);
    cardContainer.appendChild(card);
  });

  return features;
}

export default createFeatures;
