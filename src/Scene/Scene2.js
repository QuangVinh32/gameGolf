class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    // Tải tài nguyên
    this.load.image("bg_menu", "assets/images/bg_menu.png");
    this.load.image("menu_text_world", "assets/images/menu_text_world.png"); 
    this.load.image("menu_text_minigolf", "assets/images/menu_text_minigolf.png"); 
    this.load.image("but_continue", "assets/images/but_continue.png");
    this.load.image("but_play", "assets/images/but_play.png");
    this.load.image("but_exit", "assets/images/but_exit.png");
    this.load.image("ball", "assets/images/ball.png");
    this.load.image("loading", "assets/images/loading.png");
    this.load.audio("soundtrack", "assets/audio/soundtrack.mp3");
    this.load.audio("click", "assets/audio/click.mp3");

    this.load.spritesheet('audio_icon', 'assets/images/audio_icon_spritesheet.png', { 
      frameWidth: 128,  
      frameHeight: 128  
    });
    this.load.spritesheet('but_level', 'assets/images/but_level_spritesheet.png', { 
      frameWidth: 128,  
      frameHeight: 128  
    });
    this.load.spritesheet("star", "assets/images/star.png", {
      frameWidth: 82,
      frameHeight: 82
    });
  }

  create() {
    this.add.image(0, 0, 'bg_menu').setOrigin(0, 0).setDisplaySize(this.game.config.width, this.game.config.height);
    let textWorld = this.add.image(-450, 700, 'menu_text_world')
      .setOrigin(0, 0)
      .setDisplaySize(400, 200)
      .setAngle(-9);
    this.tweens.add({
      targets: textWorld,
      x: '+=650',
      y: '-=430',
      duration: 2000,
      ease: 'Sine.easeInOut',
      repeatDelay: 1000,
      delay: 1000
    });

    let textMiniGolf = this.add.image(700, -390, 'menu_text_minigolf')
      .setOrigin(0, 0)
      .setDisplaySize(570, 270)
      .setAngle(-11);
    this.tweens.add({
      targets: textMiniGolf,
      x: '-=750',
      y: '+=585',
      duration: 2000,
      ease: 'Sine.easeInOut',
      repeatDelay: 1000,
      delay: 1000
    });
    
    let continueButton = this.add.image(545, 378, "but_continue")
      .setOrigin(0, 0)
      .setDisplaySize(150, 350) 
      .setInteractive(); 
    this.tweens.add({
      targets: continueButton,
      x: { value: '+=5', duration: 300, ease: 'Expos.easeInOut', yoyo: true, repeat: -1 },
      repeat: -1
    });

    let playButton = this.add.image(465, 440, "but_play")
      .setOrigin(0, 0)
      .setDisplaySize(150, 350) 
      .setInteractive(); 

    playButton.on('pointerdown', () => {
      this.handleButtonClick(playButton, "startGame");
    });

    continueButton.on('pointerdown', () => {
      this.handleButtonClick(continueButton, "startGame");
    });
    
    // Tạo nút audio
    let audioButton = this.add.sprite(860, 45, 'audio_icon')
      .setInteractive()
      .setOrigin(0.5, 0.5)
      .setDisplaySize(70, 70)
      .setFrame(0);

    // Tạo biến để lưu trạng thái âm thanh
    this.isAudioOn = true;
    this.isTweening = false;

    // Tạo đối tượng âm thanh
    this.soundtrack = this.sound.add('soundtrack', { volume: 1, loop: true });
    this.clickSound = this.sound.add('click'); 

    // Khởi động âm thanh chỉ nếu chưa có âm thanh đang chạy
    if (this.isAudioOn) {
      this.soundtrack.play();
    }

    audioButton.on('pointerdown', () => {
      if (!this.isTweening) {
        this.isTweening = true;
        this.clickSound.play();
        
        this.isAudioOn = !this.isAudioOn;

        if (this.isAudioOn) {
          audioButton.setFrame(0);
          console.log("Audio On");
          if (!this.soundtrack.isPlaying) { 
            this.soundtrack.play();
          }
        } else {
          audioButton.setFrame(1);
          console.log("Audio Off");
          this.soundtrack.stop();
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
            this.isTweening = false;
          }
        });
      }
    });

    let ball = this.add.image(10, 300, "ball").setDisplaySize(23, 23);
  }

  handleButtonClick(button, sceneKey) {
    if (this.isTweening) return; 
    this.isTweening = true; 

    this.tweens.add({
      targets: button,
      y: button.y + 15, 
      duration: 100,
      ease: 'Power2',
      yoyo: true, 
      onComplete: () => {
        this.isTweening = false; 
        this.scene.start(sceneKey);
      }
    });
  }


  update() {
    // Code cập nhật, nếu cần
  }
}

// export default Scene2;
