import DateTime from './DateTime.js';
import Operation from './Operation.js';
import Window from './Window.js';
class CalculatorControler {
    constructor(window = new Window(), operation = new Operation({
        onCalculate: (result) => {
            console.log(result);
            this.window.content = result;
        },
    })) {
        this.window = window;
        this.operation = operation;
        new DateTime();
        this.eventsButtons();
    }
    eventsButtons() {
        document.querySelectorAll('#teclado button').forEach((element) => {
            element.addEventListener('click', (event) => {
                const target = event.target;
                switch (target.id) {
                    case 'zero':
                    case 'um':
                    case 'dois':
                    case 'tres':
                    case 'quatro':
                    case 'cinco':
                    case 'seis':
                    case 'sete':
                    case 'oito':
                    case 'nove':
                        this.addNumber(Number(target.dataset.valor));
                        break;
                    case 'adicao':
                    case 'subtracao':
                    case 'divisao':
                    case 'multiplicacao':
                        this.addOperator(target.dataset.valor);
                        break;
                    case 'ponto':
                        break;
                    case 'limpar':
                        break;
                    case 'desfazer':
                        break;
                    case 'porcentagem':
                        break;
                    case 'igual':
                        this.calculate();
                        break;
                }
            });
        });
    }
    calculate() {
        this.operation.calculate();
    }
    addOperation(value) {
        this.operation.add(value);
    }
    addNumber(number) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.addOperation(number.toString());
        }
        else {
            number = Number(this.operation.lastPosition.toString() + number.toString());
            this.operation.lastPosition = number.toString();
        }
        this.window.content = number.toString();
    }
    addOperator(operator) {
        this.addOperation(operator);
    }
}
export default CalculatorControler;
//# sourceMappingURL=CalculatorControler.js.map