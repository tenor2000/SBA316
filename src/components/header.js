import { newEl } from "./utils.js";

function createHeader(text, navItems) {
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
  // Register at least two different event listeners and create the associated event handler functions.
  navBar.addEventListener("click", setActive);

  nav.appendChild(navBar);

  navArray.forEach((item) => {
    const navItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.text;
    navItem.appendChild(link);
    navBar.appendChild(navItem);
  });

  return nav;
}

function setActive(e) {
  console.log("Selected", e.target);
  if (e.target.tagName === "A") {
    // Cache at least one element using querySelector or querySelectorAll.
    const links = document.querySelectorAll("li a");
    // Iterate over a collection of elements to accomplish some task.
    links.forEach((link) => link.classList.remove("active"));
    console.log("add active");
    e.target.classList.add("active");
  }
}

export default createHeader;
