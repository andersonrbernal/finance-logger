import HasFormatter from "../interfaces/HasFormatter.js";

export default class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    public render(
        item: HasFormatter,
        heading: string,
        position: 'start' | 'end'
    ) {
        const li: HTMLLIElement = document.createElement('li');
        const h4: HTMLHeadElement = document.createElement('h4');

        h4.textContent = heading;
        li.append(h4);

        const p: HTMLParagraphElement = document.createElement('p');
        p.textContent = item.format();
        li.append(p);

        if (position === "start") {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}