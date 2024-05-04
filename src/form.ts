function generateElement(elementTag: string): HTMLElement {
  const element: HTMLElement = document.createElement(elementTag);
  return element;
}

function generateInputElement(type: string, name: string): HTMLInputElement {
  const input = generateElement("input") as HTMLInputElement;
  input.type = type;
  input.name = name;
  input.placeholder = `Please enter ${name}`;
  return input;
}

function createForm(): HTMLFormElement {
  const form = generateElement("form") as HTMLFormElement;
  return form;
}

function createButton(
  buttonText: string,
  buttonType: "submit" | "reset" | "button",
  clickHandler: Function
): HTMLButtonElement {
  const button = generateElement("button") as HTMLButtonElement;
  button.innerText = buttonText;
  button.type = buttonType;
  button.addEventListener("click", (e) => {
    e.preventDefault();
    clickHandler(e);
  });
  return button;
}

// function validateForm(formValues: any, callback: Function): boolean {
//   return callback(formValues);
// }

// function validationRule(object){
// if(!object.name.trim()){
//     errors.name = "Name is required"
// }
// }

function validateForm(form: HTMLFormElement): Record<string, string> {
  const errors: Record<string, string> = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    if (!value) {
      errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
    }
  });
  return errors;
}

function initialValues(
  formElement: HTMLFormElement,
  name: string,
  value: any
): void {
  const inputElement = formElement.querySelector(
    `input[name=${name}]`
  ) as HTMLInputElement;
  inputElement.value = value;
}

export {
  createForm,
  createButton,
  generateElement,
  generateInputElement,
  initialValues,
  validateForm,
};
