import { newEl } from "./utils.js";

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

export default createHero;
