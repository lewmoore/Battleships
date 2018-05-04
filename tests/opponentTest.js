describe("opponent", function() {
  var opponent;

  beforeEach(function() {
    opponent = new Opponent();
    grid = new Grid()
  });

  it('renders with an empty grid', function(){
    expect(opponent.board).toEqual(grid)
  })

});
