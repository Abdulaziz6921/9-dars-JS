const input = document.querySelector("[data-input]");
const incomeTax_1 = document.querySelector("[data-h2_1]");
const incomeTax_2 = document.querySelector("[data-h2_2]");
const incomeTax_3 = document.querySelector("[data-h2_3]");
const incomeTax_4 = document.querySelector("[data-h2_4]");
const incomeTax_5 = document.querySelector("[data-h2_5]");
const incomeTax_6 = document.querySelector("[data-h2_6]");
const calc = document.querySelector("[data-h1]");

const Calc = () => {
  let inputValue = input.value;
  incomeTax_1.innerHTML += " " + (inputValue * 10) / 100 + " so'm";
  incomeTax_2.innerHTML += " " + (inputValue * 12) / 100 + " so'm";
  incomeTax_3.innerHTML += " " + (inputValue * 8) / 100 + " so'm";
  incomeTax_4.innerHTML += " " + (inputValue * 10) / 100 + " so'm";
  incomeTax_5.innerHTML += " " + (inputValue * 15) / 100 + " so'm";
  incomeTax_6.innerHTML += " " + (inputValue * 5) / 100 + " so'm";
  calc.innerHTML +=
    " " +
    Number(
      inputValue -
        ((inputValue * 10) / 100 +
          (inputValue * 12) / 100 +
          (inputValue * 8) / 100 +
          (inputValue * 10) / 100 +
          (inputValue * 15) / 100 +
          (inputValue * 5) / 100)
    ) +
    " so'm ";
};
