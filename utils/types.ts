export interface IScore {
  x: number
  o: number
  draw: number
}

export enum GameResult {
  X = 'X',
  O = 'O',
  DRAW = 'DRAW',
}

export interface IGameResultType {
  X: string
  O: string
  DRAW: string
}

export type ISquare = string | null
