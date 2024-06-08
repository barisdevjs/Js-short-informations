// TUPLE
type PersonTuple = [number, string, boolean];

const personTuple: PersonTuple[] = [[1, "a", false]];

let tuple: [number, string, boolean, string?] = [1, "a", false];
const tuple2: typeof tuple = [1, "a", false, "sdsds"];

let [a, b, c, d] = tuple;

// TUPLE ARRAY

let employee: [number, string][];

const tupleArr: typeof employee = [
  [1, "a"],
  [2, "b"],
  [3, "c"],
];

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d): void {
  const [x, y, z] = coord;

  console.log(`Provided coordinates had ${coord.length} dimensions`);
}

setCoordinate([1, 1, 1]);

// ENUM

enum Direction {
  A = 22,
  B = 33,
  C = 144,
  D = 54,
}

const dirD = Direction.D;
