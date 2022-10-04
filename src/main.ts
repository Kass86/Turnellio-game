import 'phaser';
import GamePlay from "./scenes/GamePlay";
import GameMenu from "./scenes/GameMenu";
import GameLevelUp from "./scenes/GameLevelUp";
import GameOver from "./scenes/GameOver";
import CONFIG from "../config";

let game : Phaser.Game;

window.onload = function() {

    let gameConfig = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "thegame",
            width: 900,
            height: 900
        },
        scene: [GamePlay, GameLevelUp, GameOver],

    }
    game = new Phaser.Game(gameConfig);
    window.focus();
    resize();
    window.addEventListener("resize", resize, false);

}

function resize(){
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = Number(game.config.width) / Number(game.config.height);
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}