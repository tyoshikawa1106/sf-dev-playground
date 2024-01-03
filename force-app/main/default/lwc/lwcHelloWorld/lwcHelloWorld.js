import { LightningElement } from 'lwc';

export default class LwcHelloWorld extends LightningElement {

    greeting = 'World';
    
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}