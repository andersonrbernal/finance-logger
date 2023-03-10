import HasFormatter from "../interfaces/HasFormatter.js";

export default class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    public format(): string {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}