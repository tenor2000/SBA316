import { newEl } from "./utils.js";

function createPricing(priceObjects) {
  const pricing = newEl("section");
  pricing.setAttribute("id", "pricing");
  const heading = newEl("h2");
  heading.textContent = "Pricing";
  pricing.appendChild(heading);
  return pricing;
}

export default createPricing;
