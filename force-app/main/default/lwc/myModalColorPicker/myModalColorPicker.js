import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class MyModalColorPicker extends LightningModal {

    @api color;

    handleSelect() {
        this.close(this.color);
    }

    handleChange(event) {
        this.color = event.target.value;
    }
}