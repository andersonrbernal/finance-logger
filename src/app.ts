import Invoice from "./modules/Invoice.js";
import Payment from "./modules/Payment.js";
import HasFormatter from "./interfaces/HasFormatter.js";
import ListTemplate from "./modules/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

function calc(e: Event): void {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
}
