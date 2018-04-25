describe("Grid", () => {
  beforeEach(() => {
    grid = new Grid();
  });

  it("gridA initialises with 5 elements", () => {
    expect(grid.gridA).toEqual(["A1", "A2", "A3", "A4", "A5"]);
  });

  it("gridB initialises with 5 elements", () => {
    expect(grid.gridB).toEqual(["B1", "B2", "B3", "B4", "B5"]);
  });

  it("gridC initialises with 5 elements", () => {
    expect(grid.gridC).toEqual(["C1", "C2", "C3", "C4", "C5"]);
  });

  it("gridD initialises with 5 elements", () => {
    expect(grid.gridD).toEqual(["D1", "D2", "D3", "D4", "D5"]);
  });

  it("gridE initialises with 5 elements", () => {
    expect(grid.gridE).toEqual(["E1", "E2", "E3", "E4", "E5"]);
  });

  it("displays the grid", () => {
    expect(grid.display).toEqual(
      "A1",
      "A2",
      "A3",
      "A4",
      "A5" / n[("E1", "E2", "E3", "E4", "E5")]
    );
  });
});
