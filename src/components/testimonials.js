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
    const card = newEl("div");
    card.setAttribute("class", "card testimonial-size magnify");
    card.appendChild(createCard(testimonial));
    cardContainer.appendChild(card);
  });
  return testimonials;
}

function createCard(cardObj) {
  // Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
  const frag = new DocumentFragment();

  const img = newEl("img");
  img.src = cardObj.src;
  img.alt = cardObj.alt;
  frag.appendChild(img);

  const textArea = newEl("div");
  textArea.setAttribute("class", "textArea");
  frag.appendChild(textArea);

  const paragraph = newEl("p");
  const reviewer = newEl("p");
  paragraph.innerHTML = `"${cardObj.quote}"`;
  reviewer.textContent = `- ${cardObj.author}`;
  textArea.appendChild(paragraph);
  textArea.appendChild(reviewer);

  return frag;
}

export default createTestimonials;
