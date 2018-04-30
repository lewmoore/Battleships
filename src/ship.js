class Ship {
  constructor(size) {
    this.size = size;
    this.type = '';
    this._decideShipType()
  }

  _decideShipType(){
    if (this.size == 1){
      this.type = 'Small'
    }
  }
}
