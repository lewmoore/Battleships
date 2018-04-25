describe("Ship tests", () => {
  var ship;

  beforeEach(() => {
    ship = new Ship(3);
  });
  it("initialises with size property", function() {
    expect(ship.size).toEqual(3);
  });
});
