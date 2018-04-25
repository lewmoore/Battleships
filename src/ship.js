class Ship {
  constructor(size) {
    this.size = size;
    this.name = "";
  }
  defineName(size) {
    if (size == 1) {
      this.name = "Small ship";
    } else if (size == 3) {
      this.name = "Medium ship";
    } else {
      this.name = "Large ship";
    }
  }
}
