describe("player", function() {
  var player;

  beforeEach(function() {
    player = new Player("A1");
  });

  it("returns player move", function() {
    // player = jasmine.createSpyObj("player", { move: "A1" });
    expect(player.currentMove).toEqual("A1");
  });
});
