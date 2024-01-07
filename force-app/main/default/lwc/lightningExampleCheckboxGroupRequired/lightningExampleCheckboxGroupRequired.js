import { LightningElement } from 'lwc';

export default class LightningExampleCheckboxGroupRequired extends LightningElement {
    value = [];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }
}