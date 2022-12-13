const functionToTests = require("./bmi_calculator");

test("Check if bmi < 18.5", () => {
    expect(functionToTests.calcBMI(16,1.5)).toBe("Underweight");
});

test("Check if bmi < 25", () => {
    expect(functionToTests.calcBMI(50,1.5)).toBe("Normal weight");
});

test("Check if bmi < 30", () => {
    expect(functionToTests.calcBMI(64,1.5)).toBe("Pre-obesity");
});

test("Check if bmi < 35", () => {
    expect(functionToTests.calcBMI(70,1.5)).toBe("Obesity class I");
});

test("Check if bmi < 40", () => {
    expect(functionToTests.calcBMI(88,1.5)).toBe("Obesity class II");
});

test("Check if bmi >= 40", () => {
    expect(functionToTests.calcBMI(166,1.5)).toBe("Obesity class III");
});