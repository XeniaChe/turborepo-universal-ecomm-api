import { isEven } from 'is-even';

const isOdd = (num: number) => !isEven(num);

console.log('TURBOREPO: ' + isOdd(5));
