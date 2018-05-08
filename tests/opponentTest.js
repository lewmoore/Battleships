describe("Opponent", function() {
  var opponent;
  var opponentGrid;

  beforeEach(function() {
    opponentGrid = jasmine.createSpy('grid', { 'grid': ["X", "A2", "A3", "A4", "A5", "B1", "X", "X", "B4", "B5",
                    "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "X", "X", "X", "E4", "E5"]} )
    opponent = new Opponent(opponentGrid);
  });

  it('places a single small ship on the board upon creation', function(){
    expect(opponent.board.grid[0]).toEqual('X')
  })

  it('places a single medium ship on the board upon creation', function(){
    expect(opponent.board.grid[6]).toEqual('X')
    expect(opponent.board.grid[7]).toEqual('X')
  })

  it('places a large ship on the board upon creation', function(){
    expect(opponent.board.grid[20]).toEqual('X')
    expect(opponent.board.grid[21]).toEqual('X')
    expect(opponent.board.grid[22]).toEqual('X')
  })
  //
  // it('can place ships vertically', function(){
  //   opponentGrid = jasmine.createSpy('grid', { 'grid': ["X", "A2", "A3", "A4", "A5", "X", "B2", "B3", "B4", "B5",
  //                   "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"]} )
  //   expect(opponent.board.grid[0]).toEqual('X')
  //   expect(opponent.board.grid[5]).toEqual('X')
  // })

  it('initialises with a direction prop', function(){
    expect(opponent.direction).toEqual('Horizontal')
  })
});
