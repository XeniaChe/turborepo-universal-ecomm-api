import { isEven } from 'is-even';
import { test } from './src/ttt';
import { CommercetoolsService } from 'commercetools';
console.log({ CommercetoolsService });
const isOdd = (num: number) => !isEven(num);

console.log('TURBOREPO: ' + isOdd(4));
console.log('TEST: ' + test);
