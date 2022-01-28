import DateTime from './DateTime.js'
import Operation from './Operation.js'
import Window from './Window.js'

class CalculatorControler {
    constructor(
        private window = new Window(),
        private operation = new Operation({
            onCalculate: (result: string) => {
                console.log(result)
                this.window.content = result
            },
        })
    ) {
        new DateTime()

        this.eventsButtons()
    }

    eventsButtons(): void {
        document.querySelectorAll('#teclado button').forEach((element) => {
            element.addEventListener('click', (event: Event) => {
                const target = <HTMLButtonElement>event.target
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
                        this.addNumber(Number(target.dataset.valor))
                        break

                    case 'adicao':
                    case 'subtracao':
                    case 'divisao':
                    case 'multiplicacao':
                        this.addOperator(<string>target.dataset.valor)
                        break

                    case 'ponto':
                        break

                    case 'limpar':
                        break

                    case 'desfazer':
                        break

                    case 'porcentagem':
                        break

                    case 'igual':
                        this.calculate()
                        break
                }
            })
        })
    }

    calculate(): void {
        this.operation.calculate()
    }

    addOperation(value: string): void {
        this.operation.add(value)
    }

    addNumber(number: number): void {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.addOperation(number.toString())
        } else {
            number = Number(
                this.operation.lastPosition.toString() + number.toString()
            )

            this.operation.lastPosition = number.toString()
        }

        this.window.content = number.toString()
    }

    addOperator(operator: string): void {
        this.addOperation(operator)
    }
}

export default CalculatorControler
