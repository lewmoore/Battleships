class Opponent {
  constructor(grid = new Grid()){
    this.board = grid
    
    var target = this.targetGenerator()
    this.placeShip(new Ship(1), target)
    var target = this.targetGenerator()
    this.placeShip(new Ship(2), target)
    var target = this.targetGenerator()
    this.placeShip(new Ship(3), target)
  }

  placeShip(ship, target){
    var index = this.board.grid.findIndex(element => element == target)
    for (var i = 0; i < ship.size; i++){
      this.board.grid.splice(index + i, 1, 'X')
    }
  }

  targetGenerator(){
    var target = this.board.grid[Math.floor(Math.random()*this.board.grid.length)]
    return target
  }
}
