import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNTNUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import DESCRIPTION_FIELD from '@salesforce/schema/Account.Description';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class LwcRecordForm extends LightningElement {
    @api recordId;
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD, ACCOUNTNUMBER_FIELD, PHONE_FIELD, ANNUALREVENUE_FIELD, INDUSTRY_FIELD, DESCRIPTION_FIELD];
}