import { LightningElement, track } from "lwc";
import getContactList from "@salesforce/apex/ApexImperativeMethodController.getContactList";

export default class ApexImperativeMethod extends LightningElement {
  @track contacts;
  @track error;

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