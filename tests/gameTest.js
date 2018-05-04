describe("game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    grid = new Grid();
    ship = jasmine.createSpy('ship', { 'size' : 1 })
    mediumShip = jasmine.createSpy('ship', { 'size': 2 })
    largeShip = jasmine.createSpy('ship', { 'size' : 3 })
  });

  it("initialises with an instance of Grid as the board", () => {
    expect(game.board).toEqual(grid);
  });

  it('a ship can be placed on the board', () => {
    game.placeShip(ship, 'A1')
    expect(game.board.grid[0]).toEqual('X');
  });

  it('a medium ship takes up two spaces on the board', () => {
    game.placeShip(mediumShip, 'B1')
    expect(game.board.grid[5]).toEqual('X');
    expect(game.board.grid[6]).toEqual('X');
  });

  it('a big ship takes up 3 space on the board', () => {
    game.placeShip(largeShip, 'C1')
    expect(game.board.grid[10]).toEqual('X');
    expect(game.board.grid[11]).toEqual('X');
    expect(game.board.grid[12]).toEqual('X');
  });

  it('initialises with a direction', function() {
    expect(game.direction).toEqual('horizontal');
  });

  it('chages the direction', function() {
    game.changeDirection();
    expect(game.direction).toEqual('vertical');
  });

  it('can place a ship vertically on the board', function(){
    game.changeDirection()
    game.placeShip(mediumShip, 'A1');
    expect(game.board.grid[0]).toEqual('X');
    expect(game.board.grid[5]).toEqual('X');
  })
});
