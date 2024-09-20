class Level1 extends Phaser.Scene {
  constructor() {
    super("level1");
  }

  preload() {
    // Tải tất cả các hình ảnh cho level 1
    for (let i = 1; i <= 19; i++) {
      this.load.image(`level1${i}`, `assets/level1/bg_piece_${i.toString().padStart(2, '0')}.png`);
    }
    this.load.image("ball", "assets/images/ball.png");
    this.load.image("flag", "assets/images/flag.png");
  }

  create() {
    // Thêm tất cả các hình ảnh vào cảnh với kích thước và vị trí cụ thể
    this.add.image(0, 0, "level11").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(300, 0, "level12").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(600, 0, "level13").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(900, 0, "level14").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(1200, 0, "level15").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(1500, 0, "level16").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(0, 300, "level17").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(300, 300, "level18").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(600, 300, "level19").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(900, 300, "level110").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(1200, 300, "level111").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(1500, 300, "level112").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(0, 600, "level113").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(300, 600, "level114").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(600, 600, "level115").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(900, 600, "level116").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(1200, 600, "level117").setOrigin(0, 0).setDisplaySize(300, 300);
    this.add.image(1500, 600, "level118").setOrigin(0, 0).setDisplaySize(300, 300);

    // Camera setup
    this.cameras.main.setBounds(0, 0, 1800, 900);
    this.cameras.main.setZoom(1.85);

    let ball = this.add.image(779, 490, "ball").setDisplaySize(10, 10);
    let flag1 = this.add.image(1160, 322, "flag").setDisplaySize(30, 50);
    let flag2 = this.add.image(1073, 275, "flag").setDisplaySize(30, 50);


    // Xử lý kéo camera
    this.input.on('pointerdown', (pointer) => {
      this.startX = pointer.x;
      this.startY = pointer.y;
    });

    this.input.on('pointermove', (pointer) => {
      if (pointer.isDown) {
        const dx = pointer.x - this.startX;
        const dy = pointer.y - this.startY;
        const camera = this.cameras.main;
        camera.scrollX -= dx / camera.zoom;
        camera.scrollY -= dy / camera.zoom;

        this.startX = pointer.x;
        this.startY = pointer.y;
      }
    });

    
  }
}