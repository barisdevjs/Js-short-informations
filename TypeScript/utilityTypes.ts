interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` forces mileage to be defined
};

console.log(myCar);

type NonNullableStringArray = NonNullable<string[] | null | undefined>;
type T1 = Readonly<NonNullableStringArray>;

declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>;
const abc: T3 = [{ a: 5, b: "sds" }];

type T0 = ConstructorParameters<ErrorConstructor>;
