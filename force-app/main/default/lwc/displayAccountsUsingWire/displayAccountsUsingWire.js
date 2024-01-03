import { LightningElement, wire } from 'lwc';
import displayAccounts from '@salesforce/apex/DisplayAccountsUsingWireController.displayAccounts';

export default class DisplayAccountsUsingWire extends LightningElement {
    @wire(displayAccounts) accounts;
}