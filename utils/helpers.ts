import { IScore, GameResult, IGameResultType } from './types'

// Winning probabilities
export const winningProbs: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

// Calculate game result depending on user input and winning probabilities 👆🏻
export const calcGameResult = (winningProbs: number[][], squares: string[]) => {
  let result: IGameResultType[GameResult] | null = null
  let winningProb: number[] | [] = []
  let winningindex: number | undefined

  const squaresAreFilled: boolean = squares.every((sqr) => !!sqr)

  winningProbs.forEach((prob: number[], index: number) => {
    const [a, b, c]: number[] = prob
    const squaresAreEqual: boolean =
      !!squares[a] && squares[a] === squares[b] && squares[a] === squares[c]

    if (squaresAreEqual) {
      result = squares[a]
      winningProb = [a, b, c]
      winningindex = index
      return
    } else if (!result && !squaresAreEqual && squaresAreFilled) {
      result = 'DRAW'
      return
    } else return
  })

  return { result, winningProb, winningindex }
}

// Track game state and set square value to a player sign (❌ or ⭕️)
export const play = (
  index: number,
  player: string,
  setSquares: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  setSquares((prevState) => {
    const squares = [...prevState]
    squares[index] = player
    return squares
  })
}

// Calculate game score
export const calcScore = (gameResult: IGameResultType[GameResult]) => (
  prevScore: IScore,
) => {
  if (!gameResult) return

  let newScore: IScore

  switch (gameResult) {
    case 'X':
      newScore = { ...prevScore, x: ++prevScore.x }
      break
    case 'O':
      newScore = { ...prevScore, o: ++prevScore.o }
      break
    case 'DRAW':
      newScore = { ...prevScore, draw: ++prevScore.draw }
      break
    default:
      newScore = prevScore
      break
  }

  return newScore
}

// Styling the winning squares with a strikethrough
export const styleWinSquares = (winningindex: number) => {
  let winProbStyle: {}

  switch (winningindex) {
    case 0:
      winProbStyle = {
        width: 300,
        transform: 'none',
        top: 51,
        left: 30,
      }
      break
    case 1:
      winProbStyle = {
        width: 300,
        transform: 'none',
        top: 175,
        left: 30,
      }
      break
    case 2:
      winProbStyle = {
        width: 300,
        transform: 'none',
        top: 300,
        left: 30,
      }
      break
    case 3:
      winProbStyle = {
        transform: 'rotate(90deg)',
        top: 175,
        left: -94,
        width: 300,
      }
      break
    case 4:
      winProbStyle = {
        transform: 'rotate(89deg)',
        top: 173,
        left: 28,
        width: 300,
      }
      break
    case 5:
      winProbStyle = {
        transform: 'rotate(90deg)',
        top: 177,
        left: 150,
        width: 300,
      }
      break
    case 6:
      winProbStyle = {
        transform: 'rotate(45deg)',
        top: 176,
        left: -16,
        width: 400,
      }
      break
    case 7:
      winProbStyle = {
        transform: 'rotate(-45deg)',
        top: 176,
        left: -24,
        width: 400,
      }
      break
  }

  return winProbStyle
}
