class test extends Phaser.Scene{
  constructor(){
    super("test")
  }

  create(){
    this.sprites = []
    this.playerX = 0
    this.playerX =5
    console.log(this.playerX)
    this.playerY = 0
    let directions = ['w', 's', 'e', 'n']
    this.direction = 'w'

    //0 = Player
    //1 = Wall
    //9 = Empty
    this.map = 
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 9, 1, 1, 1, 9, 1, 1, 1, 1, 1],
        [1, 9, 1, 1, 1, 9, 1, 1, 1, 1, 1],
        [1, 9, 1, 1, 1, 9, 1, 1, 1, 1, 1],
        [1, 9, 1, 1, 1, 1, 1, 9, 1, 1, 1],
        [1, 9, 9, 9, 9, 0, 1, 9, 9, 9, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ]

    //Step 1: Locate player position
    this.playerX=this.playerY=5

    //Step 2: Check the direction and tell what's visible
    this.visulizer()
    this.input.keyboard.on('keydown-W', () => {
      console.log(this.playerX)
      if (this.direction == 'w')
        this.playerX--;
      else if (this.direction == 'e')
        this.playerX++;
      else if (this.direction == 'n')
        this.playerY--;
      else
        this.playerY++;
    })
    this.input.keyboard.on('keydown-W', this.visulizer.bind(this))

    this.input.keyboard.on('keydown-A', () => {
      if (this.direction == 'n')
        this.direction = directions[0]
      else
        this.direction = directions[directions.indexOf(this.direction)+1]
      this.visulizer(this.map, this.playerX, this.playerY, this.direction)
    })
    this.input.keyboard.on('keydown-D', () => {
      if (this.direction == 'w')
        this.direction = directions[3]
      else
        this.direction = directions[directions.indexOf(this.direction)-1]
      this.visulizer(this.map, this.playerX, this.playerY, this.direction)
    })
  }

  visulizer() {
    console.log(this.direction)
    this.sprites.forEach(function(sprite){sprite.destroy()})
    let directionStrings = ["", "wall", "", "", "", "", "", "", "", "empty"]
    let vertWidths = [0, 129, 224, 289, 336, 361]
    let horHeights = [0, 96, 169, 216, 253, 270]
    for (let distance = 1; distance <= 5; distance ++) {
      let layer = []
      if (this.direction == 'w') 
        layer = [this.map[this.playerY+1][this.playerX-distance], this.map[this.playerY][this.playerX-distance], this.map[this.playerY-1][this.playerX-distance]]
      else if (this.direction == 's') 
        layer = [this.map[this.playerY+distance][this.playerX+1], this.map[this.playerY+distance][this.playerX], this.map[this.playerY+distance][this.playerX-1]]
      else if (this.direction == 'e') 
        layer = [this.map[this.playerY-1][this.playerX+distance], this.map[this.playerY][this.playerX+distance], this.map[this.playerY+1][this.playerX+distance]]
      else
        layer = [this.map[this.playerY-distance][this.playerX-1], this.map[this.playerY-distance][this.playerX], this.map[this.playerY-distance][this.playerX+1]]

      if (layer[0] != 9) {
        if (layer[0] == 1) {
          this.sprites.push(this.add.sprite(vertWidths[distance-1], horHeights[distance-1], "vert" + distance).setOrigin(0))
        }
      }
      if (layer[1] != 9) {
        if (layer[1] == 1) {
          this.sprites.push(this.add.sprite(vertWidths[distance], horHeights[distance], "end" + distance).setOrigin(0))
        }
      }
      if (layer[2] != 9) {
        if (layer[2] == 1) {
          this.sprites.push(this.add.sprite(800-vertWidths[distance], horHeights[distance-1], "vert" + distance).setOrigin(0).setFlipX(true))
        }
      }
      
    }
  }

  update(){
  }
}
