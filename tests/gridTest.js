describe('Grid', () => {

  beforeEach(() => {
    grid = new Grid()
  })

  it('"A" array initiliases with 5 elements', () => {
    expect(grid.gridA).toEqual(['A1', 'A2', 'A3', 'A4', 'A5'])
  })

  it('gridB initialises with 5 elements', () => {
    expect(grid.gridB).toEqual(['B1', 'B2', 'B3', 'B4', 'B5'])
  })
})
