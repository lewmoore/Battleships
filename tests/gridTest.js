describe("Grid", () => {
  beforeEach(() => {
    grid = new Grid();
  });

  it("grid initialises with 25 elements", () => {
    expect(grid.grid).toEqual(["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5","D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"]);
  });

  it("displays the grid", () => {
    expect(grid.displayGrid()).toEqual(
      "\n | A1 | A2 | A3 | A4 | A5 | \n---------------------------\n | B1 | B2 | B3 | B4 | B5 | \n---------------------------\n | C1 | C2 | C3 | C4 | C5 | \n---------------------------\n | D1 | D2 | D3 | D4 | D5 | \n---------------------------\n | E1 | E2 | E3 | E4 | E5 | \n---------------------------\n"
    );
  });
});
