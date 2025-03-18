import { heroData } from "./data/heroData.js";
import { featureData } from "./data/featureData.js";

// Cache at least one element using selectElementById.
const main = document.getElementById("container");
// Create at least one element using createElement.
const newEl = (element) => document.createElement(element);

// Data

const title = "Welcome to Cat Facts!";
const navItems = [
  { text: "Home", href: "#" },
  { text: "Features", href: "#about" },
  { text: "Pricing", href: "#pricing" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Sign Up", href: "#signup" },
];

// Driver

const header = createHeader(title);
const hero = createHero(heroData);
const features = createFeatures(featureData);
const pricing = createPricing();
const testimonials = createTestimonials();
const action = createSignUp();

main.appendChild(header);
main.appendChild(hero);
main.appendChild(features);
main.appendChild(pricing);
main.appendChild(testimonials);
main.appendChild(action);

// Functions

function createHeader(text) {
  const header = newEl("div");
  header.setAttribute("id", "header");
  const title = newEl("h1");
  title.textContent = text;
  header.appendChild(title);

  const navigation = createNavbar(navItems);
  header.appendChild(navigation);
  return header;
}

function createNavbar(navArray) {
  const nav = newEl("nav");
  const navBar = newEl("ul");

  nav.appendChild(navBar);

  navArray.forEach((item) => {
    const navItem = document.createElement("li");
    const link = document.createElement("button");
    link.href = item.href;
    link.textContent = item.text;
    navItem.appendChild(link);
    navBar.appendChild(navItem);
  });

  return nav;
}

function createHero(heroObj) {
  const hero = newEl("section");
  hero.setAttribute("id", "hero");
  const img = newEl("img");
  img.src = heroObj.src;
  img.alt = heroObj.alt;
  hero.appendChild(img);
  // Use the parent-child-sibling relationship to navigate between elements at least once.
  hero.firstChild.style.maxWidth = "800px";

  const tagline = newEl("h3");
  tagline.textContent = heroObj.tagline;
  hero.appendChild(tagline);
  return hero;
}

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

function createPricing() {
  const pricing = newEl("section");
  pricing.setAttribute("id", "pricing");
  const heading = newEl("h2");
  heading.textContent = "Pricing";
  pricing.appendChild(heading);
  return pricing;
}

function createTestimonials() {
  const testimonials = newEl("section");
  testimonials.setAttribute("id", "testimonials");
  const heading = newEl("h2");
  heading.textContent = "Testimonials";
  testimonials.appendChild(heading);
  return testimonials;
}

function createSignUp() {
  const signUp = newEl("section");
  signUp.setAttribute("id", "signup");
  const form = newEl("form");
  signUp.appendChild(form);

  const heading = newEl("h2");
  heading.textContent = "Sign Up";
  signUp.appendChild(heading);

  const label = newEl("label");
  label.textContent = "Email";
  const input = newEl("input");
  input.type = "email";
  input.placeholder = "Enter your email";
  form.appendChild(label);
  form.appendChild(input);

  const button = newEl("button");
  button.textContent = "Sign Up";
  form.appendChild(button);

  return signUp;
}

function createCard(cardObj) {
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
