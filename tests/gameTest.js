describe("game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    grid = new Grid();
  });

  it("initialises with an instance of Grid as the board", () => {
    expect(game.board).toEqual(grid);
  });

  it('a ship can be selected and changes currentShip', () => {
    game.selectShip('Small Ship')
    expect(game.currentShip).toEqual('Small Ship')
  });
});
