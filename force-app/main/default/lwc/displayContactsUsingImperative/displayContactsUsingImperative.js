import { LightningElement } from 'lwc';
import getContactList from "@salesforce/apex/DisplayContactsUsingImperativeController.getContactList";

export default class DisplayContactsUsingImperative extends LightningElement {
    
    contacts;
    error;

    handleLoad() {
        getContactList()
        .then((result) => {
            this.contacts = result;
        })
        .catch((error) => {
            this.error = error;
        });
    }
}