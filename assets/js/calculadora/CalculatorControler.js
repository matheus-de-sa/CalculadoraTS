import DateTime from './DateTime.js';
import Operation from './Operation.js';
import Window from './Window.js';
class CalculatorControler {
    constructor(window = new Window(), operation = new Operation()) {
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
                        break;
                }
            });
        });
    }
    addOperation(value) {
        this.operation.add(value);
    }
    addNumber(number) {
        this.window.content = number.toString();
        this.addOperation(number.toString());
    }
    addOperator(operator) {
        this.addOperation(operator);
    }
}
export default CalculatorControler;
//# sourceMappingURL=CalculatorControler.js.map