import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';

export default class LightningExampleConfirm extends LightningElement {
    async handleConfirmClick() {
        const result = await LightningConfirm.open({
            message: 'this is the prompt message',
            variant: 'headerless',
            label: 'this is the aria-label value',
        });
    }
}