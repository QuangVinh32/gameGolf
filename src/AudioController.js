class AudioController {
    constructor(scene, x, y, width, height) {
        this.scene = scene;

        this.audioButton = this.scene.add.sprite(x, y, 'audio_icon')
            .setInteractive()
            .setOrigin(0.5, 0.5)
            .setDisplaySize(width, height) 
            .setFrame(0);

        this.isAudioOn = true;
        this.isTweening = false;

        this.soundtrack = this.scene.sound.add('soundtrack', { volume: 1, loop: true });
        this.soundtrack.play();

        this.clickSound = this.scene.sound.add('click');

        this.audioButton.on('pointerdown', this.toggleAudio, this);
    }

    toggleAudio() {
        if (!this.isTweening) {
            this.isTweening = true;
            this.clickSound.play();
            this.isAudioOn = !this.isAudioOn;

            if (this.isAudioOn) {
                this.audioButton.setFrame(0);
                console.log("Audio On");
                this.soundtrack.play(); 
                this.audioButton.setFrame(1);
                console.log("Audio Off");
                this.soundtrack.stop(); 
            }

            this.scene.tweens.add({
                targets: this.audioButton,
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
    }
}

export default AudioController;
