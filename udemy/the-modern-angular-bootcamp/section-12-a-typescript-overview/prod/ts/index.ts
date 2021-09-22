const myName: string = 'Marcelo';
const myAge: number = 37;
const yes: boolean = true;
const anyThing: any = { op: 'a', op2: 'b' };
const nothingHere: null = null;
const noDefinition: undefined = undefined;

let otherName = 'Marcelo';

const sentence = 'This is a sentence';
sentence.includes('is');

const add = (a: number, b: number): number => {
  return a + b;
};

const joinStrings = (a: string, b: string): string => {
  return a + b;
};

function add2(a: number, b: number): number {
  return a + b;
}

const joinStrings2 = function (a: string, b: string): string {
  return a + b;
};

interface PostGatekeeper {
  title: string;
  daysOld: number;
  published: boolean;
}

const post: PostGatekeeper = {
  title: 'Latest TypeScript News',
  daysOld: 10,
  published: true,
};

const printPost = (postToPrint: PostGatekeeper) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

printPost(post);

const Component = (target: any) => {
  console.log(target);
};

interface Driveable {
  speed: number;

  drive(): string;
}

class Car implements Driveable {
  speed = 10;

  drive() {
    return `I'm driving at ${this.speed}`;
  }
}

const myCar = new Car();
const startDriving = (vehicle: Driveable) => {
  vehicle.drive();
};
startDriving(myCar);

class NumberHolder {
  value: number;
}
class StringHolder {
  value: string;
}
class BooleanHolder {
  value: boolean;
}

class ValueHolder<T> {
  value: T;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value = 10;

const stringHolder = new ValueHolder<string>();
stringHolder.value = 'A String';

const numberWrapper = (value: number): number[] => {
  return [value];
};
const stringWrapper = (value: string): string[] => {
  return [value];
};
const booleanWrapper = (value: boolean): boolean[] => {
  return [value];
};

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

const value = valueWrapper<number>(10);
valueWrapper<boolean>(true);
valueWrapper<string>('word');
