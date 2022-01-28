class Operation {
    constructor(opts, operation = []) {
        this.operation = operation;
        this.onCalculate = opts.onCalculate;
    }
    add(value) {
        if (this.operation.length === 3) {
            this.calculate();
        }
        return this.operation.push(value);
    }
    calculate() {
        let result = this.getResult();
        if (result.length > 12) {
            result = result.substring(0, 12);
        }
        console.log(this.operation);
        this.operation = [result];
        this.onCalculate(result);
    }
    getResult() {
        let result = '0';
        try {
            result = eval(this.operation.join('')).toString();
        }
        catch (error) {
            result = 'Error';
        }
        return result;
    }
    get lastPosition() {
        return this.operation.length
            ? this.operation[this.operation.length - 1]
            : '0';
    }
    get lenght() {
        return this.operation.length;
    }
    set lastPosition(value) {
        const lastIndex = this.operation.length ? this.operation.length - 1 : 0;
        this.operation[lastIndex] = value;
    }
}
export default Operation;
//# sourceMappingURL=Operation.js.map