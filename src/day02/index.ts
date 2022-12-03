import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

interface ResultsConfig {
  [game: string]: number;
}

const Scoring = {
  WIN: 6,
  DRAW: 3,
  LOSS: 0,
}
const Shapes = {
  ROCK: 1, // rock
  PAPER: 2, // paper
  SCISSORS: 3, // scissors
}

const resultsConfig: ResultsConfig = {
  'A X': Scoring.DRAW + Shapes.ROCK,  // rock, rock  - draw
  'A Y': Scoring.WIN + Shapes.PAPER,   // rock, paper - win
  'A Z': Scoring.LOSS + Shapes.SCISSORS,  // rock scissors - loss

  'B X': Scoring.LOSS + Shapes.ROCK,  // paper, rock - loss
  'B Y': Scoring.DRAW + Shapes.PAPER,  // paper, paper - draw
  'B Z': Scoring.WIN + Shapes.SCISSORS,   // paper, scissors - win

  'C X': Scoring.WIN + Shapes.ROCK,   // scissors, rock - win
  'C Y': Scoring.LOSS + Shapes.PAPER,  // scissors, paper - loss
  'C Z': Scoring.DRAW + Shapes.SCISSORS,  // scissors, scissors - draw
}

const resultsPt2Config: ResultsConfig = {
  'A X': Scoring.LOSS + Shapes.SCISSORS,  // rock, lose - scissors 
  'A Y': Scoring.DRAW + Shapes.ROCK,   // rock, draw - rock
  'A Z': Scoring.WIN + Shapes.PAPER,  // rock, win - paper

  'B X': Scoring.LOSS + Shapes.ROCK,  // paper, loss - rock
  'B Y': Scoring.DRAW + Shapes.PAPER,  // paper, draw - paper
  'B Z': Scoring.WIN + Shapes.SCISSORS,   // paper, win - scissors

  'C X': Scoring.LOSS + Shapes.PAPER,   // scissors, loss - paper
  'C Y': Scoring.DRAW + Shapes.SCISSORS,  // scissors, draw - scissors
  'C Z': Scoring.WIN + Shapes.ROCK,  // scissors, win - rock
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const series = input.split('\n')
  return series.reduce((sum, currentGame) => sum+=resultsConfig[currentGame], 0)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const series = input.split('\n')
  return series.reduce((sum, currentGame) => sum+=resultsPt2Config[currentGame], 0)
}

run({
  part1: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z`,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests:  false,
})
