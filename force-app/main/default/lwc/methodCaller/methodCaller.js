import { LightningElement } from "lwc";
import MOVIE_FILE from "@salesforce/resourceUrl/Movie";

export default class MethodCaller extends LightningElement {
    
    //video = "https://www.w3schools.com/tags/movie.mp4";
    video = MOVIE_FILE;

    handlePlay() {
        this.template.querySelector("c-video-player").play();
    }

    handlePause() {
        this.template.querySelector("c-video-player").pause();
    }
}