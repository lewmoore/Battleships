class Game {
  constructor(){
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    this.currentShip = ''
    this.ships = ['Small Ship', 'Medium Ship', 'Big Ship']
  }

  placeShip(target){
    if (this.currentShip == 'Medium Ship') {
      this._mediumShipPlacement(target)
    } else {
      this.board.splice(target -1, 1, 'Ship')
    }

  }

  selectShip(ship){
    this.currentShip = ship
  }

  _mediumShipPlacement(target){
    this.board.splice(target -1, 1, 'Medium Ship')
    this.board.splice(target -2, 1, 'Medium Ship')
    this.board.splice(target, 1, 'Medium Ship')
  }
}
