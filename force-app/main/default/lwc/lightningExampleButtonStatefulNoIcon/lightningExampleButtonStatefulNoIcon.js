import { LightningElement } from 'lwc';

export default class LightningExampleButtonStatefulNoIcon extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}