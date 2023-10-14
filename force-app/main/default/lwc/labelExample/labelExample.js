import { LightningElement } from 'lwc';
import welcome from "@salesforce/label/c.Welcome";
import salesforceDevelopers from "@salesforce/label/c.SalesforceDevelopers";

export default class LabelExample extends LightningElement {
    label = {
        welcome,
        salesforceDevelopers,
    };
}