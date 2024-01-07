import { createElement } from 'lwc';
import LightningExampleButtonStatefulBasic from 'c/lightningExampleButtonStatefulBasic';

describe('c-lightning-example-button-stateful-basic', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lightning-example-button-stateful-basic', {
            is: LightningExampleButtonStatefulBasic
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});