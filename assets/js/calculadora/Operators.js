class Operators {
    constructor(operator = []) {
        this.operator = operator;
    }
    add(value) {
        return this.operator.push(value);
    }
    get lenght() {
        return this.operator.length;
    }
}
export default Operators;
//# sourceMappingURL=Operators.js.map