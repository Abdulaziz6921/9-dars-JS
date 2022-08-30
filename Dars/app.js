const Input1 = document.querySelector("[data-input1]");
const Input2 = document.querySelector("[data-input2]");
const Select = document.querySelector("select");
const Result = document.querySelector("[data-h1]");

const Calc = () => {
  // input qiymatini olish uchun VALUE ni ishlatamiz
  console.log(Input1.value);
  console.log(Input2.value);
  console.log(Select.value);

  const input1_Value = Input1.value;
  const input2_Value = Input2.value;
  const Select_Value = Select.value;

  if (Select_Value === "+") {
    Result.innerHTML = Number(input1_Value) + Number(input2_Value);
  } else if (Select_Value === "-") {
    Result.innerHTML = Number(input1_Value) - Number(input2_Value);
  } else if (Select_Value === "*") {
    Result.innerHTML = Number(input1_Value) * Number(input2_Value);
  } else {
    Result.innerHTML = Number(input1_Value) / Number(input2_Value);
  }
};
