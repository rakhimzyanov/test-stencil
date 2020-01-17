import { r as registerInstance, h, H as Host } from './core-fccdd2a3.js';

const Comp9 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    sayHi() {
        console.log('hi 9');
    }
    render() {
        return (h(Host, null, h("h4", { onClick: () => this.sayHi() }, "9"), h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Comp9 as my_comp_9 };
