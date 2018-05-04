class Opponent {
  constructor(){
    this.board = new Grid()
    var target = this.targetGenerator()
    this.placeShip(new Ship(1), target)
  }

  placeShip(ship, target){
    var index = this.board.grid.findIndex(element => element == target)
    console.log(target, 'PlaceShip Fn')
    for (var i = 0; i < ship.size; i++){
      this.board.grid.splice(index + i, 1, 'X')
    }
  }

  targetGenerator(){
    var target = this.board.grid[Math.floor(Math.random()*this.board.grid.length)]
    console.log(target, 'Generator')
    return target
  }
}
