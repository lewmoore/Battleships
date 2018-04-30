class Game {
  constructor(){
    this.board = new Grid()
    this.currentShip = ''
  }

  selectShip(ship){
    this.currentShip = ship
  }
}
