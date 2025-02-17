const cards = document.querySelectorAll(".card");
const heightUnit = document.getElementById("height-unit");
const weightUnit = document.getElementById("weight-unit");
const height=document.getElementById("height");
const weight=document.getElementById("weight");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");
const bmiResult = document.getElementById("bmi-result");

let system = "metric";

cards.forEach((card) => {
  card.addEventListener("click", () => {
    system = card.id;
    // removing already selected
    cards.forEach((c) => c.classList.remove("selected"));
    // selecting the new one
    card.classList.add("selected");

    if (system === "metric") {
      heightUnit.innerText = "(in cm)";
      weightUnit.innerText = "(in kg)";
    } else {
      heightUnit.innerText = "(in inches)";
      weightUnit.innerText = "(in lbs)";
    }
  });
});

document.getElementById("calculate").addEventListener("click", () => {
  const heightValue = parseFloat(height.value);
  const weightValue = parseFloat(weight.value);
  let bmi;

  if (system === "metric") {
    bmi = weightValue / ((heightValue / 100) * (heightValue / 100));
  } else {
    bmi = (weightValue / (heightValue * heightValue)) * 703;
  }

  bmi=bmi.toFixed(1);

  displayBMI(bmi);

  height.value="";
  weight.value="";
});

const displayBMI = (bmi) => {
  bmiValue.innerText = bmi;
  bmiValue.style.color=getColor(bmi);
  bmiCategory.innerText = getBMICategory(bmi);
  bmiCategory.style.color=getColor(bmi);
  bmiResult.style.display = "block";
  document.querySelector(".container").style.height = "75%";
  document.querySelector(".container").style.transition = "height 0.3s";
};

const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 24.9) {
    return "Normal weight";
  } else if (bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

const getColor=(bmi)=>{
    if (bmi < 18.5) return "blue";
    if (bmi < 25) return "green";
    if (bmi < 30) return "yellow";
    return "red";
}
