console.log("connceted");
var _document = document;
var body = _document.body;
_document.addEventListener("DOMContentLoaded", function () {
    main();
});
function main() {
    var form = createForm();
    var nameInput = generateInputElement("text", "name");
    var emailInput = generateInputElement("email", "email");
    var phoneNumberInput = generateInputElement("tel", "phoneNumber");
    var submitButton = createButton("Submit", "submit", function (e) {
        var errors = validateForm(form);
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
function generateElement(elementTag) {
    var element = document.createElement(elementTag);
    return element;
}
function generateInputElement(type, name) {
    var input = generateElement("input");
    input.type = type;
    input.name = name;
    input.placeholder = "Please enter ".concat(name);
    return input;
}
function createForm() {
    var form = generateElement("form");
    return form;
}
function createButton(buttonText, buttonType, clickHandler) {
    var button = generateElement("button");
    button.innerText = buttonText;
    button.type = buttonType;
    button.addEventListener("click", function (e) {
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
    var errors = {};
    var formData = new FormData(form);
    formData.forEach(function (value, key) {
        if (!value) {
            errors[key] = "".concat(key.charAt(0).toUpperCase() + key.slice(1), " is required");
        }
    });
    return errors;
}
function initialValues(formElement, name, value) {
    var inputElement = formElement.querySelector("input[name=".concat(name, "]"));
    inputElement.value = value;
}
