import { newEl } from "./utils.js";

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

export default createSignUp;
