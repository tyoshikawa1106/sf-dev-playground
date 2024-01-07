import { LightningElement } from 'lwc';

export default class LightningExampleButtonStatefulInverseVariant extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}