   
  // CALCULATE BMI
  const functionToTest = {
  calcBMI: function (inputWeight,inputHeight) {
    let bmi = 0;
    let weight = inputWeight;
    let height = inputHeight;
   
    // Formula
    bmi = weight / (height * height);
   
      // ROUND OFF
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
   
    // (B3) SHOW RESULTS
    if (bmi < 18.5) {
      console.log(bmi + " - Underweight");
      return "Underweight";
    } else if (bmi < 25) {
      console.log(bmi + " - Normal weight");
      return "Normal weight";
    } else if (bmi < 30) {
      console.log(bmi + " - Pre-obesity");
      return "Pre-obesity";
    } else if (bmi < 35) {
      console.log(bmi + " - Obesity class I");
      return "Obesity class I";
    } else if (bmi < 40) {
      console.log(bmi + " - Obesity class II");
      return "Obesity class II";
    } else {
      console.log(bmi + " - Obesity class III");
      return "Obesity class III";
    }
    return false;
  }
  }
// input unit is Kilograms and Meters
//functionToTest.calcBMI(50,1.5);
module.exports = functionToTest;

