import { newEl } from "./utils.js";

function createTestimonials(testimonialObjects) {
  const testimonials = newEl("section");
  testimonials.setAttribute("id", "testimonials");
  const heading = newEl("h2");
  heading.textContent = "Testimonials";
  testimonials.appendChild(heading);

  const cardContainer = newEl("div");
  cardContainer.setAttribute("class", "card-container");
  testimonials.appendChild(cardContainer);

  testimonialObjects.forEach((testimonial) => {
    const card = createCard(testimonial);
    cardContainer.appendChild(card);
  });
  return testimonials;
}

function createCard(cardObj) {
  const card = newEl("div");
  card.setAttribute("class", "card testimonial-size magnify");

  const img = newEl("img");
  img.src = cardObj.src;
  img.alt = cardObj.alt;
  card.appendChild(img);

  const textArea = newEl("div");
  textArea.setAttribute("class", "textArea");
  card.appendChild(textArea);

  const paragraph = newEl("p");
  const reviewer = newEl("p");
  paragraph.innerHTML = `"${cardObj.quote}"`;
  reviewer.textContent = `- ${cardObj.author}`;
  textArea.appendChild(paragraph);
  textArea.appendChild(reviewer);

  return card;
}

export default createTestimonials;
