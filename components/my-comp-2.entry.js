import { r as registerInstance, h, H as Host } from './core-fccdd2a3.js';

const Comp2 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    sayHi() {
        console.log('hi 2');
    }
    render() {
        return (h(Host, null, h("h4", { onClick: () => this.sayHi() }, "2"), h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Comp2 as my_comp_2 };
