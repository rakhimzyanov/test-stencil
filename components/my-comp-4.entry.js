import { r as registerInstance, h, H as Host } from './core-fccdd2a3.js';

const Comp4 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    sayHi() {
        console.log('hi 4');
    }
    render() {
        return (h(Host, null, h("h4", { onClick: () => this.sayHi() }, "4"), h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Comp4 as my_comp_4 };
