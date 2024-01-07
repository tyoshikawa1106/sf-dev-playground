import { LightningElement } from 'lwc';

export default class LightningExampleButtonStatefulBasic extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}