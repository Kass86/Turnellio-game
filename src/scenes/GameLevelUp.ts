import 'phaser';

export default class gameLevelUp extends Phaser.Scene {
    
    constructor() {
        super("GameLevelUp");
    }

    create() {
        this.add
        .text(this.scale.width / 2, this.scale.height/3, "Welcome to Stick Hero game", {
            fontFamily: "Arial",
            fontSize: "34px",
        })
        .setOrigin(0.5);

        const playBtn = this.add
            .rectangle(this.scale.width / 2, 9*this.scale.height/10, 3*this.scale.width/4, 0.8*this.scale.height/10, 0xffca27)
            .setInteractive({ useHandCursor: true });

        const playBtnText = this.add
            .text(this.scale.width / 2, 9*this.scale.height/10, "Begin", {
                fontFamily: "Arial",
                fontSize: "32px",
            })
            .setOrigin(0.5);

        playBtn.on("pointerdown", () => {
            this.scene.start("playGame");
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
