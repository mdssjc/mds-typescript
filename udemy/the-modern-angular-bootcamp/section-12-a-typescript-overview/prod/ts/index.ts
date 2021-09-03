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

const post: { title: string; daysOld: number; published: boolean } = {
  title: 'Latest TypeScript News',
  daysOld: 10,
  published: true,
};

const printPost = (postToPrint: {
  title: string;
  daysOld: number;
  published: boolean;
}) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};
