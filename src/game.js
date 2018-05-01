class Game {
  constructor(){
    this.board = new Grid()
    this.currentShip = ''
  }

  selectShip(ship){
    this.currentShip = ship
  }

  // placeShip(ship, target){
  //   var index = this.board.grid.findIndex(element => element == target)
  //   if (ship.size == 2){
  //     this.board.grid.splice(index, ship.size, 'X', 'X')
  //   } else if (ship.size == 3 ){
  //     this.board.grid.splice(index, ship.size, 'X', 'X', 'X')
  //   } else {
  //     this.board.grid[index] = 'X'
  //   }
  // }
  //
  placeShip(ship, target){
    var index = this.board.grid.findIndex(element => element == target)
    for (var i = 0; i < ship.size; i++){
      this.board.grid.splice(index + i, 1, 'X')
    }
  }
}
