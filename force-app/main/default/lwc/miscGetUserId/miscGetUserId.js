import { LightningElement } from "lwc";
import Id from "@salesforce/user/Id";
import IsGuest from "@salesforce/user/isGuest";

export default class MiscGetUserId extends LightningElement {
  userId = Id;
  isGuest = IsGuest;
}