class Game {
  constructor(){
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    this.currentShip = ''
    this.ships = ['Small Ship', 'Medium Ship', 'Big Ship']
  }

  placeShip(target){
    this.board.splice(target -1, 1, 'ship')
  }

  selectShip(ship){
    this.currentShip = ship
  }
}
