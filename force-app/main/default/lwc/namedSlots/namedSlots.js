import { LightningElement } from "lwc";

export default class NamedSlots extends LightningElement {
    renderedCallback() {
        this.querySelector("span"); // <span>push the green button.</span>
        this.querySelectorAll("span"); // [<span>push the green button</span>, <span>push the red button</span>]
    }
}