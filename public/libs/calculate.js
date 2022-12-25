import Invoice from "../modules/Invoice.js";
import Payment from "../modules/Payment.js";
export function calculate(event, values) {
    event.preventDefault();
    let doc;
    if (values.type.value === 'invoice') {
        doc = new Invoice(values.toFrom.value, values.details.value, values.amount.valueAsNumber);
    }
    else {
        doc = new Payment(values.toFrom.value, values.details.value, values.amount.valueAsNumber);
    }
}
