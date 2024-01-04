import { LightningElement } from 'lwc';
import myColorPickerModal from 'c/myModalColorPicker';

export default class LaunchModal extends LightningElement {

    selectedColor = '#FFFFFF';

    handleClick(event) {
        myColorPickerModal.open({
            label: 'Color Picker',
            size: 'medium',
            color: this.selectedColor
        }).then((result) => {
            this.selectedColor = result;
        });
    }
}