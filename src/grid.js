class Grid {
  constructor() {
    this.grid = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"];
  }

  displayGrid() {
    return (
      "\n | " +
      this.grid[0] +
      " | " +
      this.grid[1] +
      " | " +
      this.grid[2] +
      " | " +
      this.grid[3] +
      " | " +
      this.grid[4] +
      " | " +
      "\n---------------------------\n | " +
      this.grid[5] +
      " | " +
      this.grid[6] +
      " | " +
      this.grid[7] +
      " | " +
      this.grid[8] +
      " | " +
      this.grid[9] +
      " | \n---------------------------\n | " +
      this.grid[10] +
      " | " +
      this.grid[11] +
      " | " +
      this.grid[12] +
      " | " +
      this.grid[13] +
      " | " +
      this.grid[14] +
      " | \n---------------------------\n | " +
      this.grid[15] +
      " | " +
      this.grid[16] +
      " | " +
      this.grid[17] +
      " | " +
      this.grid[18] +
      " | " +
      this.grid[19] +
      " | \n---------------------------\n | " +
      this.grid[20] +
      " | " +
      this.grid[21] +
      " | " +
      this.grid[22] +
      " | " +
      this.grid[23] +
      " | " +
      this.grid[24] +
      " | \n---------------------------\n"
    );
  }
}
