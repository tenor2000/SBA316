import { newEl, createCard } from "./utils.js";

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
    card.style.color = "black";
    card.style.textAlign = "center";
    card.setAttribute("class", "card");
    const quote = newEl("p");
    quote.innerHTML = testimonial.quote;
    card.appendChild(quote);
    const author = newEl("p");
    author.textContent = `-${testimonial.author}`;
    card.appendChild(author);
    cardContainer.appendChild(card);
  });
  return testimonials;
}
export default createTestimonials;
