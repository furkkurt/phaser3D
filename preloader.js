class preloader extends Phaser.Scene {
  constructor() {
    super("boot");
  };
  preload(){
    this.load.image("vert1", "./assets/vert1.png")
    this.load.image("vert2", "./assets/vert2.png")
    this.load.image("vert3", "./assets/vert3.png")
    this.load.image("vert4", "./assets/vert4.png")
    this.load.image("vert5", "./assets/vert5.png")
    this.load.image("hor1", "./assets/hor1.png")
    this.load.image("hor2", "./assets/hor2.png")
    this.load.image("hor3", "./assets/hor3.png")
    this.load.image("hor4", "./assets/hor4.png")
    this.load.image("hor5", "./assets/hor5.png")
    this.load.image("end1", "./assets/end1.png")
    this.load.image("end2", "./assets/end2.png")
    this.load.image("end3", "./assets/end3.png")
    this.load.image("end4", "./assets/end4.png")
    this.load.image("end5", "./assets/end5.png")
	};
	create(){
		this.scene.start("test");
	}
}
