import { config } from "../../config.js";

export default class Background extends Phaser.Scene {
  #winner;

  constructor() {
    super("ResultScene");
  }

  init(data) {
    this.#winner = data.message;
  }

  preload() {
    switch (this.#winner) {
      case "Player":
        this.load.image("result", "../../assets/background/win2.png");
        break;
      case "Computer":
        this.load.image("result", "../../assets/background/loser2.png");
        break;
    }
  }

  create() {
    // Render background img
    this.add.image(
      config.phaser.width / 2,
      config.phaser.height / 2,
      "result"
    );
    this.input.setDefaultCursor("url(../../assets/cursor/blue.cur), pointer");
  }
}
