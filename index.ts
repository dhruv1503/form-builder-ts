import { createForm, generateInputElement, createButton, validateForm, initialValues } from "./src/form.js";
const _document: Document = document;
const body: HTMLElement = _document.body;

_document.addEventListener("DOMContentLoaded", () => {
  main();
});

function main() {
  const form: HTMLFormElement = createForm();
  const nameInput: HTMLInputElement = generateInputElement("text", "name");
  const emailInput: HTMLInputElement = generateInputElement("email", "email");
  const phoneNumberInput: HTMLInputElement = generateInputElement(
    "tel",
    "phoneNumber"
  );
  const submitButton: HTMLButtonElement = createButton(
    "Submit",
    "submit",
    function (e: Event) {
      const errors = validateForm(form);
      if(Object.keys(errors).length === 0){
        console.log({
            name: nameInput.value,
            email: emailInput.value,
            phoneNumber: phoneNumberInput.value,
          });
      }
      else{
        console.log("ERRORS FOUND!!!!")
        console.log(errors);
      }
     
    }
  );
  form.append(nameInput, emailInput, phoneNumberInput, submitButton);

  initialValues(form, "name", "Dhruv");
  initialValues(form, "phoneNumber", 9988047473);
  initialValues(form, "email", "dhruvaggarwal1503@gmail.com")
  body.appendChild(form);
  
}