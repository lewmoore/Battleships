describe("Ship", () => {
  var ship;

  beforeEach(() => {
    ship = new Ship(1);
  });

  it("initialises with size property", () => {
    expect(ship.size).toEqual(1);
  });

  it("initialises with name property default to an emtpy string", () => {
    expect(ship.type).not.toBe(true);
  });

  it('ship type is determined based on the size of ship', () => {
    expect(ship.type).toEqual('Small')
  })

  it('type is medium if size is equal to 2', () => {
    ship = new Ship(2)
    expect(ship.type).toEqual('Medium')
  })
});
