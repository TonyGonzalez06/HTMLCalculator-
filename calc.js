function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultLabel = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultLabel.textContent = "Enter valid numbers";
    resultLabel.classList.remove("text-success");
    resultLabel.classList.add("text-danger");
    return;
  }

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultLabel.textContent = "Cannot divide by zero";
        resultLabel.classList.remove("text-success");
        resultLabel.classList.add("text-danger");
        return;
      }
      result = num1 / num2;
      break;
  }

  resultLabel.textContent = result;
  resultLabel.classList.remove("text-danger");
  resultLabel.classList.add("text-success");
}

 