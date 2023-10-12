import { LightningElement } from 'lwc';

export default class Container extends LightningElement {
    handleSlotChange (e) {
        console.log("New slotted content has been added or removed!");
    }
}