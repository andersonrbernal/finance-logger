import HasFormatter from "../interfaces/HasFormatter.js";

export default class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }

    format(): string {
        return `${this.recipient} payed $${this.amount} for ${this.details}`;
    }
}