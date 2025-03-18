import { newEl } from "./utils.js";

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
  signUp.appendChild(container);

  // registration
  const registration = newEl("div");
  const heading1 = newEl("h3");
  heading1.textContent = "Register Now!";
  registration.appendChild(heading1);
  const regForm = createForm(regFormFields);

  const button = newEl("button");
  button.textContent = "Register";
  registration.appendChild(regForm);
  registration.appendChild(button);

  // login
  const login = newEl("div");
  const heading2 = newEl("h3");
  heading2.textContent = "Login Now!";
  login.appendChild(heading2);
  const logForm = createForm(logFormFields);
  const loginButton = newEl("button");
  loginButton.textContent = "Login";
  login.appendChild(logForm);
  login.appendChild(loginButton);

  container.appendChild(registration);
  container.appendChild(login);

  return signUp;
}

function createForm(formData) {
  const form = newEl("form");
  formData.forEach((field) => {
    const label = newEl("label");
    label.textContent = field.label;
    const input = newEl("input");
    input.name = field.name;
    input.type = field.type;
    input.placeholder = field.placeholder;
    form.appendChild(label);
    form.appendChild(input);
  });
  return form;
}

export default createSignUp;
