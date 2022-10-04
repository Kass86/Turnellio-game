import 'phaser';

import CONFIG from "../../config";

export default class GameMenu extends Phaser.Scene {
    
    constructor() {
        super("GameMenu");
    }

    create() {
        this.add
        .text(this.scale.width / 2, this.scale.height/3, "Welcome to \nStick Hero game", {
            fontFamily: "Arial",
            fontSize: "58px",
            align: "center"
        })
        .setOrigin(0.5);

        const playBtn = this.add
            .rectangle(this.scale.width / 2, 2*this.scale.height/3, 3*this.scale.width/4, 0.8*this.scale.height/10, 0xffca27)
            .setInteractive({ useHandCursor: true });

        const playBtnText = this.add
            .text(this.scale.width / 2, 2*this.scale.height/3, "Begin", {
                fontFamily: "Arial",
                fontSize: "40px",
            })
            .setOrigin(0.5);

        playBtn.on("pointerdown", () => {
            localStorage.setItem(CONFIG.localStorageLastScoreName, "0");
            localStorage.setItem(CONFIG.localStorageGameLevelName, CONFIG.LEVEL_EASY.toString());
            localStorage.setItem(CONFIG.localStorageGameLiveCounterName, CONFIG.GAME_LIVE_MAX.toString());
            this.scene.start("GamePlay");
        });

        playBtn.on("pointerover", () => {
            playBtn.setScale(1.1);
            playBtnText.setScale(1.1);
        });

        playBtn.on("pointerout", () => {
            playBtn.setScale(1);
            playBtnText.setScale(1);
        });
    }
    
}
