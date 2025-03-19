import { heroData } from "./data/heroData.js";
import { featureData } from "./data/featureData.js";
import { priceData } from "./data/priceData.js";
import { testimonialData } from "./data/testimonialData.js";
import createHeader from "./components/header.js";
import createHero from "./components/hero.js";
import createFeatures from "./components/features.js";
import createPricing from "./components/pricing.js";
import createTestimonials from "./components/testimonials.js";
import createSignUp from "./components/signUp.js";

// Cache at least one element using selectElementById.
const main = document.getElementById("container");

const title = "Welcome to KIT10 AI!";
const navItems = [
  { text: "Home", href: "#" },
  { text: "Features", href: "#features" },
  { text: "Pricing", href: "#pricing" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Sign Up", href: "#signup" },
];

const header = createHeader(title, navItems);
const hero = createHero(heroData);
const features = createFeatures(featureData);
const pricing = createPricing(priceData);
const testimonials = createTestimonials(testimonialData);
const action = createSignUp();

// Use appendChild and/or prepend to add new elements to the DOM.
main.appendChild(header);
main.appendChild(hero);
main.appendChild(features);
main.appendChild(pricing);
main.appendChild(testimonials);
main.appendChild(action);
