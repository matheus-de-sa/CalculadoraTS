class Operation {
    constructor(operation = []) {
        this.operation = operation;
    }
    add(value) {
        return this.operation.push(value);
    }
    get lenght() {
        return this.operation.length;
    }
}
export default Operation;
//# sourceMappingURL=Operation.js.map