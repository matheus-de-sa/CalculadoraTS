interface OperationOpt {
    onCalculate: any
}

class Operation {
    private onCalculate: any

    constructor(opts: OperationOpt, private operation: string[] = []) {
        this.onCalculate = opts.onCalculate
    }

    add(value: string): number {
        if (this.operation.length === 3) {
            this.calculate()
        }

        return this.operation.push(value)
    }

    calculate(): void {
        let result = this.getResult()

        if (result.length > 12) {
            result = result.substring(0, 12)
        }

        console.log(this.operation)

        this.operation = [result]

        this.onCalculate(result)
    }

    getResult(): string {
        let result: string = '0'

        try {
            result = eval(this.operation.join('')).toString()
        } catch (error) {
            result = 'Error'
        }

        return result
    }

    get lastPosition(): string {
        return this.operation.length
            ? this.operation[this.operation.length - 1]
            : '0'
    }

    get lenght(): number {
        return this.operation.length
    }

    set lastPosition(value: string) {
        const lastIndex = this.operation.length ? this.operation.length - 1 : 0

        this.operation[lastIndex] = value
    }
}

export default Operation
