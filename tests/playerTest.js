describe("player", function() {
  var player;

  beforeEach(function() {
    player = new Player("A1");
  });

  it("returns player move", function() {
    expect(player.currentMove).toEqual("A1");
  });
});
