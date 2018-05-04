describe("opponent", function() {
  var opponent;
  var spyGrid;

  beforeEach(function() {
    opponent = new Opponent();
    ship = jasmine.createSpy('ship', { 'size' : 1 })
    opponentGrid = jasmine.createSpy('grid', { 'grid': ["X", "A2", "A3", "A4", "A5", "B1", "X", "X", "B4", "B5",
                    "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"]} )
  });

  it('places a single small ship on the board upon creation', function(){
    expect(opponentGrid.grid[0]).toEqual('X')
  })
});
