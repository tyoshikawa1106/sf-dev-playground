import { LightningElement, wire, api } from 'lwc';
import queryRelatedContacts from '@salesforce/apex/AccountControllerLwc.queryRelatedContacts';
export default class AccountInfo extends LightningElement {
    @api recordId;
    @wire(queryRelatedContacts, { accountId: '$recordId' })
    contacts;
}