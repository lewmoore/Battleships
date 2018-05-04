class Game {
  constructor(){
    this.board = new Grid();
    this.currentShip = '';
    this.direction = 'horizontal';
  }

  selectShip(ship){
    this.currentShip = ship
  }

  changeDirection(){
    this.direction === 'horizontal' ? this.direction ='vertical' : this.direction ='horizontal';
  }


  placeShip(ship, target){
    var index = this.board.grid.findIndex(element => element == target)
    if (this.direction == 'vertical') {
      for (var i = 0; i < ship.size; i++){
        this.board.grid.splice(index + 5, 1, 'X')
      }
    }
    for (var i = 0; i < ship.size; i++){
      this.board.grid.splice(index + i, 1, 'X')
    }
  }
}
