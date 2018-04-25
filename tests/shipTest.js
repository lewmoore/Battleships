describe("Ship tests", () => {
  var ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  it("initialises with size property", () => {
    expect(ship.size).toEqual(3);
  });

  it("defines the name", () => {
    expect(ship.name).toEqual("");
  });

  it("defines the name of the ship", () => {
    ship.defineName(1);
    expect(ship.name).toEqual("Small ship");
  });
});
