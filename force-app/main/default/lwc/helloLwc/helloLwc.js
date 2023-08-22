import { LightningElement,track } from 'lwc';

export default class HelloLwc extends LightningElement {
    @track name = 'Lightning';
    @track isChecked = false;
    @track isCheckboxButtonChecked = false;
    @track birthday = null;
    @track createdDateTime = null;
    @track email = 'sample@example.com';
    @track number = null;
    @track password = '';
    @track range = 30;
    @track phone = '0X0-1234-1234';
    @track time = null;
    @track isToggleChecked = false;
    @track url = '';
    @track richText = '';
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

    onCheckboxButtonChanged() {
        this.isCheckboxButtonChecked = this.template.querySelector('[data-id="inutCheckboxButton"]').checked;
    }

    onDateChanged() {
        this.birthday = this.template.querySelector('[data-id="inputDate"]').value;
    }

    onDateTimeChanged() {
        this.createdDateTime = this.template.querySelector('[data-id="inputDateTime"]').value;
    }

    onEmailChanged() {
        this.email = this.template.querySelector('[data-id="inputEmail"]').value;
    }

    handleFilesChange() {
        console.log('Files OK!');
        console.log(this.template.querySelector('[data-id="inputFile"]'));
    }

    onNumberChanged() {
        this.number = this.template.querySelector('[data-id="inputNumber"]').value;
    }

    onPasswordChanged() {
        this.password = this.template.querySelector('[data-id="inputPassword"]').value;
    }

    onRangeChanged() {
        this.range = this.template.querySelector('[data-id="inputRange"]').value;
    }

    onTelChanged() {
        this.phone = this.template.querySelector('[data-id="inputTel"]').value;
    }

    onTimeChanged() {
        this.time = this.template.querySelector('[data-id="inputTime"]').value;
    }

    onToggleChanged() {
        this.isToggleChecked = this.template.querySelector('[data-id="inputToggle"]').checked;
    }

    onUrlChanged() {
        this.url = this.template.querySelector('[data-id="inputUrl"]').value;
    }

    onRichTextChanged() {
        this.richText = this.template.querySelector('[data-id="inputRichText"]').value;
    }
}