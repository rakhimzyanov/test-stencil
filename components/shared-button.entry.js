import { r as registerInstance, c as createEvent, h } from './core-fccdd2a3.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickBtn = createEvent(this, "clickBtn", 7);
    }
    // todo click event
    // todo dynamic html with events
    render() {
        return (h("button", { class: "my-btn", onClick: () => this.testBtnClick() }, this.name));
    }
    testBtnClick() {
        console.log(this.name);
        this.clickBtn.emit({ test: true });
    }
    static get style() { return ":host {\n  display: block;\n}\n\n.my-btn {\n  background-color: dimgray;\n  color: tomato;\n}"; }
};

export { Button as shared_button };
