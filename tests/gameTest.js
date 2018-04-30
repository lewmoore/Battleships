describe("game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    grid = new Grid();
    ship = jasmine.createSpyObj('ship', { 'size' : 1 })
    mediumShip = jasmine.createSpy('ship', { 'size': 2 })
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
    expect(game.board.grid[0]).toEqual('X')
  });

  it('a medium ship takes up two spaces on the board', () => {
    game.placeShip(mediumShip, 'B1')
    expect(game.board.grid[6]).toEqual('X')
  });
});
