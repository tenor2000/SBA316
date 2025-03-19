import { newEl } from "./utils.js";

function createHero(heroObjArray) {
  const hero = newEl("section");
  hero.setAttribute("id", "hero");
  const img = newEl("img");
  img.src = heroObjArray[0].src;
  img.alt = heroObjArray[0].alt;
  hero.appendChild(img);
  // Use the parent-child-sibling relationship to navigate between elements at least once.
  hero.firstChild.style.maxWidth = "40vw";

  const tagline = newEl("h3");
  tagline.textContent = heroObjArray[0].tagline;
  hero.appendChild(tagline);

  let currIndex = 0;

  // Modify at least one attribute of an element in response to user interaction.
  img.addEventListener("click", () => {
    let rand;

    do {
      rand = Math.floor(Math.random() * 10) % heroObjArray.length;
    } while (rand == currIndex);

    currIndex = rand;
    img.src = heroObjArray[rand].src;
    img.alt = heroObjArray[rand].alt;
    tagline.textContent = heroObjArray[rand].tagline;
  });

  return hero;
}

export default createHero;
