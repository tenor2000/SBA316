import { newEl, clearContainer } from "./utils.js";

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

function createCard(cardObj) {
  const card = newEl("div");
  card.setAttribute("class", "card");

  const img = newEl("img");
  img.src = cardObj.src;
  img.alt = cardObj.alt;
  card.appendChild(img);

  const heading = newEl("h3");
  heading.textContent = cardObj.heading;
  card.appendChild(heading);

  const textArea = newEl("div");
  textArea.setAttribute("class", "textArea");
  card.appendChild(textArea);

  const paragraph = newEl("p");
  textArea.appendChild(paragraph);

  const button = newEl("button");
  button.textContent = "Learn More";
  card.appendChild(button);

  button.addEventListener("click", () => {
    // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
    if (button.textContent == "Learn More") {
      button.textContent = "Close";
      paragraph.textContent = cardObj.info;
      textArea.appendChild(paragraph);
    } else {
      clearContainer(paragraph);
      button.textContent = "Learn More";
    }
  });

  return card;
}

export default createFeatures;
