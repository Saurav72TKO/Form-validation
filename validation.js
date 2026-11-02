// regex project

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("form");

const regexPatterns = {
  telephone: /^\d{10}$/,
  username: /^\w{5,12}$/,
  password: /^[\w@\-!]{8,20}$/,
  slug: /^(?=.{8,20}$)[\w]+-[\w]+$/,
  email: /^([a-zA-Z\d.-]+)@([a-zA-Z\d-]+)(\.[a-z]{2,6})(\.[a-z]{2,6})?$/,
};

//validation function

submitBtn.disabled = true;

function validate(field, regex) {
  const check = regex.test(field.value);

  if (check) {
    field.className = `valid`;
  } else {
    field.className = `invalid`;
  }

  if (!field.value) {
    field.className = "";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value)

    validate(e.target, regexPatterns[e.target.attributes.name.value]);

    const allValid = [...inputs].every((input) =>
      input.classList.contains("valid"),
    );

    console.log(allValid);

    if (allValid) {
      submitBtn.disabled = false;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form is valid and submitted!");
});

// const reg = /[a-z]{6}/;s
