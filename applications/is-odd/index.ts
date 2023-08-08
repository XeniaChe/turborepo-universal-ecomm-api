import { isEven } from 'is-even';
import { test } from './src/ttt';
const isOdd = (num: number) => !isEven(num);

console.log('TURBOREPO: ' + isOdd(4));
console.log('TEST: ' + test);
