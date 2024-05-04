import { createForm, generateInputElement, createButton, validateForm, initialValues } from "./src/form.js";
const _document = document;
const body = _document.body;
_document.addEventListener("DOMContentLoaded", () => {
    main();
});
function main() {
    const form = createForm();
    const nameInput = generateInputElement("text", "name");
    const emailInput = generateInputElement("email", "email");
    const phoneNumberInput = generateInputElement("tel", "phoneNumber");
    const submitButton = createButton("Submit", "submit", function (e) {
        const errors = validateForm(form);
        if (Object.keys(errors).length === 0) {
            console.log({
                name: nameInput.value,
                email: emailInput.value,
                phoneNumber: phoneNumberInput.value,
            });
        }
        else {
            console.log("ERRORS FOUND!!!!");
            console.log(errors);
        }
    });
    form.append(nameInput, emailInput, phoneNumberInput, submitButton);
    initialValues(form, "name", "Dhruv");
    initialValues(form, "phoneNumber", 9988047473);
    initialValues(form, "email", "dhruvaggarwal1503@gmail.com");
    body.appendChild(form);
}
