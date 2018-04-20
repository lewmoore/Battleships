describe('game', function(){

  var game

  beforeEach(function(){
    game = new Game()
  })

  it('initialises with a board', function(){
    expect(game.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])
  })

  it('places a ship on the board', function(){
    game.placeShip(1)
    expect(game.board).toContain('Ship')
  })

  it('initialises with an empy currentShip', function(){
    expect(game.currentShip).toEqual('')
  })

  it('has an array of ships', function(){
    expect(game.ships).toEqual(['Small Ship', 'Medium Ship', 'Big Ship'])
  })

  it('a ship can be selected and changes currentShip', function(){
    game.selectShip('Small Ship')
    expect(game.currentShip).toEqual('Small Ship')
  })

  it('medium ship takes up 3  spaces', function(){
    game.selectShip('Medium Ship')
    game.placeShip(2)
    expect(game.board[0]).toEqual('Medium Ship')
    expect(game.board[1]).toEqual('Medium Ship')
    expect(game.board[2]).toEqual('Medium Ship')
  })
})
