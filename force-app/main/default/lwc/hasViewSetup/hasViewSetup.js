import { LightningElement } from 'lwc';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';

export default class HasViewSetup extends LightningElement {
    get isSetupEnabled() {
        return hasViewSetup;
    }

    openSetup(e) {
        console.log('click!!');
    }
}