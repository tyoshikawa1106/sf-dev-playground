import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class LwcRecordViewForm extends LightningElement {
    @api recordId;
    objectApiName = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;
    annualRevenueField = ANNUALREVENUE_FIELD;
    phoneField = PHONE_FIELD;
}