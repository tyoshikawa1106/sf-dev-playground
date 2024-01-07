import { LightningElement } from 'lwc';

export default class LightningExampleButtonMenuOnselect extends LightningElement {
    selectedItemValue;

    handleOnselect(event) {
        this.selectedItemValue = event.detail.value;
    }
}