import { LightningElement } from 'lwc';

export default class LightningExampleButtonStatefulTextAndIcon extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}