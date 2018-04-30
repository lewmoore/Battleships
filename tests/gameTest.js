describe("game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    grid = new Grid();
    ship = jasmine.createSpyObj('ship', { 'size' : 1 })
  });

  it("initialises with an instance of Grid as the board", () => {
    expect(game.board).toEqual(grid);
  });

  it('a ship can be selected and changes currentShip', () => {
    game.selectShip('Small Ship')
    expect(game.currentShip).toEqual('Small Ship')
  });

  it('a ship can be placed on the board', () => {
    game.placeShip(ship, 'A1')
    expect(game.board.grid[0]).toEqual('ship')
  })
});
