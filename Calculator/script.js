class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }



    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;

    }

    delete() {

        this.currentOperand = this.currentOperand.toString().slice(0, -1);

        audio.load();


    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }


    compute() {
        let computation;
        console.log(this.previousOperand, this.currentOperand)
        if (this.previousOperand == 18 && this.currentOperand == 19 || this.previousOperand == 19 && this.currentOperand == 18) {
            computation = "I love you! 😘💝"
            audio.play();
        } else {
            const prev = parseFloat(this.previousOperand);
            const current = parseFloat(this.currentOperand);
            if (isNaN(prev) || isNaN(current)) return;
            switch (this.operation) {
                case "+":
                    computation = prev + current;
                    break;
                case "-":
                    computation = prev - current;
                    break;
                case "*":
                    computation = prev * current;
                    break;
                case "÷":
                    computation = prev / current;
                    break;
                default:
                    return;
            }
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";

    }

    updateDisplay() {

        console.log(this.currentOperand)

        if (this.currentOperand === "I love you! 😘💝") {
            document.getElementById("current").style.fontSize = "16px";
            this.previousOperandTextElement.innerText = ""
            this.currentOperandTextElement.innerText = "I love you forever!😘 Please always be with me, I cannot live without you!💝 \n                      Best Regards, JS"
        } else {
            this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
            if (this.operation != null) {
                this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;

            } else {
                this.previousOperandTextElement.innerText = ""
            }

        }

    }
}




let audio = new Audio('https://mp3uk.net/mp3/files/javid-ty-moya-dunya-mp3.mp3');

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(number => number.addEventListener("click", function () {
    calculator.appendNumber(number.innerText);
    calculator.updateDisplay();
}))

operationButtons.forEach(button => button.addEventListener("click", function () {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
}))

equalsButton.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})
