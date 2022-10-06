import "phaser";

export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    let score = JSON.parse(localStorage.getItem("score")).lastScore;
    this.add
      .text(this.scale.width / 2, this.scale.height / 3, "Game Over", {
        fontFamily: "Arial",
        fontSize: "64px",
        align: "center",
      })
      .setOrigin(0.5);

    this.add
      .text(
        this.scale.width / 2,
        this.scale.height / 3 + 100,
        `You got ${score} point`,
        {
          fontFamily: "Arial",
          fontSize: "48px",
          align: "center",
        }
      )
      .setOrigin(0.5);

    const playBtn = this.add
      .rectangle(
        this.scale.width / 2,
        (2 * this.scale.height) / 3,
        (3 * this.scale.width) / 4,
        (0.8 * this.scale.height) / 10,
        0xffca27
      )
      .setInteractive({ useHandCursor: true });

    const playBtnText = this.add
      .text(this.scale.width / 2, (2 * this.scale.height) / 3, "Try Again!", {
        fontFamily: "Arial",
        fontSize: "40px",
      })
      .setOrigin(0.5);

    playBtn.on("pointerdown", () => {
      this.cameras.main.fade(1000, 0, 0, 0, false, function (camera, progress) {
        if (progress > 0.9) {
          this.scene.start("GamePlay");
        }
      });
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
