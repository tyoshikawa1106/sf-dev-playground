import { LightningElement, track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track trackvalue = "World";

    changeHandler(event) {
        this.trackvalue = event.target.value;
    }
}