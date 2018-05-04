class Opponent {
  constructor(){
    this.board = new Grid()
    this.placeShip(new Ship(1), 'A1')
    this.placeShip(new Ship(2), 'B1')
  }

  placeShip(ship, target){
    var index = this.board.grid.findIndex(element => element == target)
    for (var i = 0; i < ship.size; i++){
      this.board.grid.splice(index + i, 1, 'X')
    }
  }
}
