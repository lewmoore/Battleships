class Grid {
  constructor() {
    this.gridA = ["A1", "A2", "A3", "A4", "A5"];
    this.gridB = ["B1", "B2", "B3", "B4", "B5"];
    this.gridC = ["C1", "C2", "C3", "C4", "C5"];
    this.gridD = ["D1", "D2", "D3", "D4", "D5"];
    this.gridE = ["E1", "E2", "E3", "E4", "E5"];
  }

  display() {
    // this.gridA.forEach(cell => {
    //   console.log(" | " + cell + " | ");
    return (
      "\n" +
      " | " +
      this.gridA[0] +
      " | " +
      this.gridA[1] +
      " | " +
      this.gridA[2] +
      " | " +
      this.gridA[3] +
      " | " +
      this.gridA[4] +
      " | " +
      "\n" +
      "---------------------------\n" +
      " | " +
      this.gridB[0] +
      " | " +
      this.gridB[1] +
      " | " +
      this.gridB[2] +
      " | " +
      this.gridB[3] +
      " | " +
      this.gridB[4] +
      " | " +
      "\n" +
      "---------------------------\n" +
      " | " +
      this.gridC[0] +
      " | " +
      this.gridC[1] +
      " | " +
      this.gridC[2] +
      " | " +
      this.gridC[3] +
      " | " +
      this.gridC[4] +
      " | " +
      "\n" +
      "---------------------------\n" +
      " | " +
      this.gridD[0] +
      " | " +
      this.gridD[1] +
      " | " +
      this.gridD[2] +
      " | " +
      this.gridD[3] +
      " | " +
      this.gridD[4] +
      " | " +
      "\n" +
      "---------------------------\n" +
      " | " +
      this.gridE[0] +
      " | " +
      this.gridE[1] +
      " | " +
      this.gridE[2] +
      " | " +
      this.gridE[3] +
      " | " +
      this.gridE[4] +
      " | " +
      "\n" +
      "---------------------------\n"
    );
  }
}
