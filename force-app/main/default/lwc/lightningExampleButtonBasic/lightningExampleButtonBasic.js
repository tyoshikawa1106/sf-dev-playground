import { LightningElement } from 'lwc';

export default class LightningExampleButtonBasic extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}