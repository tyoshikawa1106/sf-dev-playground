import { LightningElement } from 'lwc';

export default class LigtningExampleButtonBasic extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}