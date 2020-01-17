import { r as registerInstance, h, H as Host } from './core-fccdd2a3.js';

const Comp5 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    sayHi() {
        console.log('hi 5');
    }
    render() {
        return (h(Host, null, h("h4", { onClick: () => this.sayHi() }, "5"), h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Comp5 as my_comp_5 };
