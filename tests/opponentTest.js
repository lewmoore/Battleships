describe("opponent", function() {
  var opponent;
  var spyGrid;

  beforeEach(function() {
    opponent = new Opponent();
    ship = jasmine.createSpy('ship', { 'size' : 1 })
    spyGrid = jasmine.createSpy('grid', { 'grid': ["X", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5",
                    "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"]} )
  });

  // it('renders with an empty grid', function(){
  //   expect(opponent.board).toEqual(grid)
  // })

  it('places a single small ship on the board upon creation', function(){
    console.log(spyGrid.grid)
    expect(spyGrid.grid[0]).toEqual('X')
  })
  //
  // it('places a single medium ship on the board upon creation', function(){
  //   expect(opponent.board.grid[6]).toEqual('X')
  //   expect(opponent.board.grid[7]).toEqual('X')
  // })


});
