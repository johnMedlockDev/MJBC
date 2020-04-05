document.title = "Forms";

const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");
const form = document.querySelector("#signup-form");

const formData = {};

// form.addEventListener("submit", function(e) {
//   e.preventDefault();
// });

// creditCardInput.addEventListener("input", e => {
//   console.log("CC Changed", e);
//   formData["cc"] = e.target.value;
// });

// veggieSelect.addEventListener("input", e => {
//   console.log("Veggie Changed", e);
//   formData["veggie"] = e.target.value;
// });

// termsCheckbox.addEventListener("input", e => {
//   console.log("Checkbox", e);
//   formData["agreeToTerms"] = e.target.checked;
// });

// created a array on the fly
// looped over each ele and attached the ele value to a formData obj
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
  });
}
