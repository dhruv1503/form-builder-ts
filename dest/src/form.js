function generateElement(elementTag) {
    const element = document.createElement(elementTag);
    return element;
}
function generateInputElement(type, name) {
    const input = generateElement("input");
    input.type = type;
    input.name = name;
    input.placeholder = `Please enter ${name}`;
    return input;
}
function createForm() {
    const form = generateElement("form");
    return form;
}
function createButton(buttonText, buttonType, clickHandler) {
    const button = generateElement("button");
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
function validateForm(form) {
    const errors = {};
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        if (!value) {
            errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        }
    });
    return errors;
}
function initialValues(formElement, name, value) {
    const inputElement = formElement.querySelector(`input[name=${name}]`);
    inputElement.value = value;
}
export { createForm, createButton, generateElement, generateInputElement, initialValues, validateForm, };
