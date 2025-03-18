const main = document.getElementById("container");
const newEl = (element) => document.createElement(element);

// Data

const title = "Welcome to Cat Facts!";
const heroImg = "./src/images/cat.jpg";

const navItems = [
  { text: "Home", href: "#" },
  { text: "Features", href: "#about" },
  { text: "Pricing", href: "#pricing" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Sign Up", href: "#signup" },
];

// Driver

const header = createHeader(title);

main.appendChild(header);

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
