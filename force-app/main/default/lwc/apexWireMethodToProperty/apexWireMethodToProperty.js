import { LightningElement, wire } from "lwc";
import getContactList from "@salesforce/apex/ApexWireMethodToPropertyController.getContactList";

export default class ApexWireMethodToProperty extends LightningElement {
    @wire(getContactList) contacts;
}