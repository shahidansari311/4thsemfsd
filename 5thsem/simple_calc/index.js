const display = document.getElementById("display-section");
const buttons = document.querySelectorAll(".button-section div");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            expression = "";
            display.innerText = "";
            return;
        }

        if (value === "X") {
            expression = expression.slice(0, -1);
            display.innerText = expression;
            return;
        }

        if (value === "=") {
            try {
                expression = eval(expression);
                display.innerText = expression;
            } catch (error) {
                display.innerText = "Error";
                expression = "";
            }
            return;
        }

        expression += value;
        display.innerText = expression;
    });
});