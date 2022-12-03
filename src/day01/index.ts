import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput
const caloriesPerElf = (input: string) => {
  const elves = input.split('\n\n').map((group) => group.split('\n').map(Number))
  return elves.map((elf) => elf.reduce((sum, current) => sum += current));
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return Math.max(...caloriesPerElf(input))
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const calorieGroup = caloriesPerElf(input); 
  const top3 = calorieGroup.sort((a, b) => a-b).slice(-3);

  return top3.reduce((sum, current) => sum += current);
}

run({
  part1: {
    tests: [
      {
        input: `1000
        2000
        3000

        4000

        5000
        6000

        7000
        8000
        9000

        10000`,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `1000
        2000
        3000

        4000

        5000
        6000

        7000
        8000
        9000

        10000`,
        expected: 45000
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
})
