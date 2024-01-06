import { LightningElement } from 'lwc';

export default class LightningExampleButtonIconStatefulBasic extends LightningElement {
    likeState = false;
    answerState = false;
    likeStateSize01 = false;
    likeStateSize02 = false;
    likeStateSize03 = false;
    likeStateSize04 = false;
    likeStateDisabled = false;
    answerStateDisabled = false;

    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] =
            !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }
}