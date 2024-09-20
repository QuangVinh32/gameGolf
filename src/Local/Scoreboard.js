class Scoreboard extends Phaser.Scene {
    constructor() {
      super("scoreboard");
    }
    preload() {
      this.load.image("msg_box","assets/images/msg_box.png")
      this.load.image("but_continue_big","assets/images/but_continue_big.png")
      this.load.image("but_restart_big","assets/images/but_restart_big.png")
      this.load.spritesheet("star","assets/images/star.png",{
        frameWidth:84,
        frameHeight:84,
      })
    }
    create(){
       // Calculate center position
      const centerX = this.cameras.main.width / 2;
      const centerY = this.cameras.main.height / 2;
      let scoreBoard = this.add.image(centerX, centerY,"msg_box")
           .setInteractive()
           .setOrigin(0.5, 0.5)  
           .setDisplaySize(600, 420); 
      let restartBigButton = this.add.image(390,440,"but_restart_big")
           .setInteractive()
           .setOrigin(0.5, 0.5)  
           .setDisplaySize(90, 90);
      let continueBigButton = this.add.image(500,440,"but_continue_big")
           .setInteractive()
           .setOrigin(0.5, 0.5)  
           .setDisplaySize(90, 90)
      let completeText = this.add.text(370, 260, "COMPLETE", { font: "28px Arial", fill: "yellow" });
      let star = this.add.sprite(500,200,"star")
      .setInteractive()
      .setOrigin(0.5, 0.5)  
      .setDisplaySize(45,45)
      let star1 = this.add.sprite(450,190,"star")
      .setInteractive()
      .setOrigin(0.5, 0.5)  
      .setDisplaySize(45,45)
      let star3 = this.add.sprite(400,200,"star")
      .setInteractive()
      .setOrigin(0.5, 0.5)  
      .setDisplaySize(45,45)

        
    
      

    }
}