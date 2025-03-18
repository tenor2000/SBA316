import { newEl } from "./utils.js";

function createTestimonials() {
  const testimonials = newEl("section");
  testimonials.setAttribute("id", "testimonials");
  const heading = newEl("h2");
  heading.textContent = "Testimonials";
  testimonials.appendChild(heading);
  return testimonials;
}
export default createTestimonials;
