import { LightningElement,track } from 'lwc';

export default class HelloLwc extends LightningElement {
    @track name = '';
    @track isChecked = false;
    @track members = [
        {
            id: "1",
            name: "Sato"
        },
        {
            id: "2",
            name: "Suzuki"
        },
        {
            id: "3",
            name: "Tanaka"
        }
    ];

    onNameChanged() {
        this.name = this.template.querySelector('[data-id="inputName"]').value;
    }

    onCheckboxChanged() {
        this.isChecked = this.template.querySelector('[data-id="inputCheckbox"]').checked;
    }
}