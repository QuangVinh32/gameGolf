class Level4 extends Phaser.Scene {
    constructor() {
      super("level4");
    }
    preload() {
    //   for (let i = 1; i <= 18; i++) {
    //     this.load.image(`level1${i}`, `assets/bg_piece_${i.toString().padStart(2, '0')}.png`);
    //   }
    }
    create(){
        this.add.image(0, 0, 'bg_menu').setOrigin(0, 0).setDisplaySize(this.game.config.width, this.game.config.height);

        let playText2 = this.add.text(20, 20, "level4", { font: "25px Arial", fill: "yellow" });
        playText2.setInteractive();
    
        playText2.on('pointerdown', () => {
          this.scene.start("startGame");
        });
    

    }
    update(){}
}