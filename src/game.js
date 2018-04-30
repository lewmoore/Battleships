class Game {
  constructor(){
    this.board = new Grid()
    this.currentShip = ''
  }

  selectShip(ship){
    this.currentShip = ship
  }

  placeShip(ship, target){
    var index = this.board.grid.findIndex(element => element == target)
    this.board.grid[index] = 'ship'
  }
}
