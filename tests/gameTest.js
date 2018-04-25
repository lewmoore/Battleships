describe('game', function(){

  var game

  beforeEach(function(){
    game = new Game()
  })

  it('initialises with a board', () => {
    expect(game.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])
  })

  it('places a ship on the board', () => {
    game.placeShip(1)
    expect(game.board).toContain('Ship')
  })

  it('initialises with an empy currentShip', () => {
    expect(game.currentShip).toEqual('')
  })

  it('has an array of ships', () => {
    expect(game.ships).toEqual(['Small Ship', 'Medium Ship', 'Large Ship'])
  })

  it('a ship can be selected and changes currentShip', () => {
    game.selectShip('Small Ship')
    expect(game.currentShip).toEqual('Small Ship')
  })

  it('medium ship takes up 3  spaces', () => {
    game.selectShip('Medium Ship')
    game.placeShip(1)
    expect(game.board[0]).toEqual('Medium Ship')
    expect(game.board[1]).toEqual('Medium Ship')
    expect(game.board[2]).toEqual('Medium Ship')
  })

  it('Large Ship takes up 5 spaces', () => {
    game.selectShip('Large Ship')
    game.placeShip(1)
    expect(game.board[0]).toEqual('Large Ship')
    expect(game.board[1]).toEqual('Large Ship')
    expect(game.board[2]).toEqual('Large Ship')
    expect(game.board[3]).toEqual('Large Ship')
    expect(game.board[4]).toEqual('Large Ship')
  })
})
