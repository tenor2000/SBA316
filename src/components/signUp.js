import { newEl } from "./utils.js";
import { validateRegForm, validateLogForm } from "./validation.js";

const regFormFields = [
  {
    name: "username",
    type: "text",
    placeholder: "username",
    label: "Username",
  },
  { name: "email", type: "email", placeholder: "email", label: "Email" },
  {
    name: "password",
    type: "password",
    placeholder: "password",
    label: "Password",
  },
  {
    name: "passwordConfirm",
    type: "password",
    placeholder: "confirm password",
    label: "Confirm Password",
  },
];

const logFormFields = [
  {
    name: "username",
    type: "text",
    placeholder: "username",
    label: "Username",
  },
  {
    name: "password",
    type: "password",
    placeholder: "password",
    label: "Password",
  },
];

function createSignUp() {
  const signUp = newEl("section");
  signUp.setAttribute("id", "signup");
  const container = newEl("div");
  container.setAttribute("class", "form-container");
  const errorDisplay = newEl("div");
  errorDisplay.setAttribute("id", "errorDisplay");
  signUp.appendChild(container);
  signUp.appendChild(errorDisplay);

  // registration
  const registration = newEl("div");
  registration.setAttribute("class", "magnify");
  const heading1 = newEl("h3");
  heading1.textContent = "Register Now!";
  registration.appendChild(heading1);
  const regForm = createForm(regFormFields);
  regForm.setAttribute("id", "registration");
  const regButton = newEl("button");

  regButton.type = "submit";
  regButton.textContent = "Register";
  registration.appendChild(regForm);
  regForm.appendChild(regButton);

  // login
  const login = newEl("div");
  login.setAttribute("class", "magnify");
  const heading2 = newEl("h3");
  heading2.textContent = "Login Now!";
  login.appendChild(heading2);

  const logForm = createForm(logFormFields);
  logForm.setAttribute("id", "login");
  const loginButton = newEl("button");

  loginButton.type = "submit";
  loginButton.textContent = "Login";
  login.appendChild(logForm);
  logForm.appendChild(loginButton);

  container.appendChild(registration);
  container.appendChild(login);

  // Register at least two different event listeners and create the associated event handler functions.
  regForm.addEventListener("submit", validateRegForm);
  logForm.addEventListener("submit", validateLogForm);

  return signUp;
}

// Include at least one form and/or input with HTML attribute validation.
function createForm(formData) {
  const form = newEl("form");
  formData.forEach((field) => {
    const input = newEl("input");
    // HTML validation attribute
    input.setAttribute("required", "");
    input.name = field.name;
    input.type = field.type;
    input.placeholder = field.placeholder;
    form.appendChild(input);
  });
  return form;
}

export default createSignUp;
