import { r as registerInstance, h, H as Host } from './core-fccdd2a3.js';

const Comp10 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    sayHi() {
        console.log('hi 10');
    }
    render() {
        return (h(Host, null, h("h4", { onClick: () => this.sayHi() }, "10"), h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Comp10 as my_comp_10 };
