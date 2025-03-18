// Create at least one element using createElement.
export const newEl = (element) => document.createElement(element);

export function createCard(cardObj) {
  const card = newEl("div");
  card.setAttribute("class", "card");

  const img = newEl("img");
  img.src = cardObj.src;
  img.alt = "kittens";
  img.style.maxWidth = "200px";
  card.appendChild(img);
  const textArea = newEl("div");
  textArea.setAttribute("class", "text-area");
  card.appendChild(textArea);
  const heading = newEl("h3");
  heading.textContent = cardObj.heading;
  textArea.appendChild(heading);
  const paragraph = newEl("p");
  paragraph.textContent = cardObj.description;
  textArea.appendChild(paragraph);

  return card;
}
