// Cache at least one element using selectElementById.
const main = document.getElementById("container");
// Create at least one element using createElement.
const newEl = (element) => document.createElement(element);

// Data

const title = "Welcome to Cat Facts!";
const heroObject = {
  tagline: "Fun facts about cats.",
  src: "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt: "kittens",
};

const navItems = [
  { text: "Home", href: "#" },
  { text: "Features", href: "#about" },
  { text: "Pricing", href: "#pricing" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Sign Up", href: "#signup" },
];

// Driver

const header = createHeader(title);
const hero = createHero(heroObject);

main.appendChild(header);
main.appendChild(hero);

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
  const hero = newEl("div");
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
