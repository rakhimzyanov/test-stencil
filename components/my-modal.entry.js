import { r as registerInstance, h } from './core-fccdd2a3.js';

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isHover = false;
        this.open = false;
        this.transparent = false;
    }
    // @Watch('open')
    // openModal(_newValue: boolean, _oldValue: boolean) {
    //   console.log(this.open)
    // }
    divMouseleave() {
        this.isHover = false;
    }
    divMouseenter() {
        this.isHover = true;
    }
    divClick() {
        console.log('handle click');
    }
    render() {
        const css = `
      my-modal > * {
        display: none;
        color: green;
      }
    `;
        return (h("div", null, h("style", null, css), h("div", { class: "hover-div", onMouseEnter: () => this.divMouseenter(), onMouseLeave: () => this.divMouseleave(), onClick: () => this.divClick() }, this.isHover ? h("div", { class: "hidden-div" }, "is hover") : null), h("div", { class: 'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '') }, h("div", { class: "modal-window" }, h("div", { class: "modal-window__content" }, h("slot", null))))));
    }
    static get style() { return "my-modal > div {\n  /* display: none;\n  color: red; */\n}\n\n::slotted(*) {\n  /* display: none; */\n  /* color: green; */\n}\n\nmy-modal,\n:host {\n  display: none;\n}\n:host,\nmy-modal.opened,\nmy-modal.opened {\n  display: block !important;\n}\n\n.testBlue {\n  color: blue;\n}\n\n.overlay {\n  opacity: 0;\n  visibility: hidden;\n\n  position:fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n  background: rgba(0,0,0,0.42);\n  -webkit-transition: opacity 0.5s, visibility 0s 0.5s;\n          transition: opacity 0.5s, visibility 0s 0.5s;\n\n\n  display: -ms-flexbox;\n\n\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.is-visible {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n\n.is-transparent {\n  opacity: 0;\n}\n\n.modal-window{\n  background: white;\n  border-radius: 25px;\n  width: 75%;\n  height: 75%;\n\n  padding: 50px;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.modal-window__content{\n  width: 100%;\n  height: 100%;\n}\n\n\n.hover-div {\n  width: 50px;\n  height: 50px;\n  background: indianred;\n  border: 2px solid green;\n  position: relative;\n}\n\n.hidden-div {\n  position: absolute;\n  left: 100px;\n  top: 10px;\n  background: khaki;\n}"; }
};

export { Modal as my_modal };
