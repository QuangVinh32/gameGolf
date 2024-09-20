class UIScene extends Phaser.Scene {
    constructor() {
      super("uiScene");
    }
    preload() {
        this.load.image("but_exit", "assets/images/but_exit.png");
        this.load.spritesheet('audio_icon', 'assets/images/audio_icon_spritesheet.png', { 
            frameWidth: 128,  
            frameHeight: 128  
          });
        this.load.image("but_restart_small","assets/images/but_restart_small.png");
        this.load.image("but_restart_small","assets/images/but_restart_small.png");
        this.load.image("but_centre_view","assets/images/but_centre_view.png")

        
    }
  
    create() {
      // Tạo các phần tử UI như văn bản
      let textPar = this.add.text(15,15, "PAR: 1", { font: "26px Arial", fill: "Yellow" });
      let textLaunch = this.add.text(380, 15, "LAUNCH: 2", { font: "25px Arial", fill: "Yellow" });
      let textHole = this.add.text(780, 610, "HOLE: 5", { font: "25px Arial", fill: "Yellow" });
  
      this.textContainer = this.add.container(0, 0, [textPar, textLaunch, textHole]);

      let audioButton = this.add.sprite(720, 45, 'audio_icon').setInteractive().setOrigin(0.5, 0.5).setDisplaySize(70, 70);
      let isTweening = false; 
      let isAudioOn = true; 
         audioButton.on('pointerdown', () => {
           if (!isTweening) {
           isTweening = true;   
           isAudioOn = !isAudioOn;
           if (isAudioOn) {
               audioButton.setFrame(0);
               console.log("on")
           } else {
               audioButton.setFrame(1);  
               console.log("off  ")
           }
           this.tweens.add({
               targets: audioButton,
               scaleY: 0.6,
               scaleX: 0.6,
               ease: 'Power1',
               duration: 100,
               yoyo: true,
               repeat: 0,
               onComplete: () => {
                   isTweening = false;
               }
           });
       }
   });

      let exitButton = this.add.image(860, 45, 'but_exit').setInteractive().setOrigin(0.5, 0.5).setDisplaySize(70, 70);
      exitButton.on('pointerdown', () => {
        if (!isTweening) {
          isTweening = true;  
          this.tweens.add({
            targets: exitButton,  
            scaleX: 0.6,  
            scaleY: 0.6, 
            ease: 'Power1',  
            duration: 100,  
            yoyo: true, 
            repeat: 0,  
            onComplete: () => {
              isTweening = false;
            }
          });
        }
      });
      let restartSmallButton = this.add.image(790, 45, 'but_restart_small').setInteractive().setOrigin(0.5, 0.5).setDisplaySize(70, 70);
      restartSmallButton.on('pointerdown', () => {
        if (!isTweening) {
          isTweening = true;  
          this.tweens.add({
            targets: restartSmallButton,  
            scaleX: 0.6,  
            scaleY: 0.6, 
            ease: 'Power1',  
            duration: 100,  
            yoyo: true, 
            repeat: 0,  
            onComplete: () => {
              isTweening = false;
            }
          });
        }
      });
      let centreViewButton = this.add.image(50, 600, 'but_centre_view').setInteractive().setOrigin(0.5, 0.5).setDisplaySize(70, 70);
      centreViewButton.on('pointerdown', () => {
        if (!isTweening) {
          isTweening = true;  
          this.tweens.add({
            targets: centreViewButton,  
            scaleX: 0.6,  
            scaleY: 0.6, 
            ease: 'Power1',  
            duration: 100,  
            yoyo: true, 
            repeat: 0,  
            onComplete: () => {
              isTweening = false;
            }
          });
        }
      });
      
    }
  }
  