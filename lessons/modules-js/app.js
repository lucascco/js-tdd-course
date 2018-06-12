// import * as R from 'ramda';
// import { union } from 'ramda';
// import {union as junto} from 'ramda';
import {union, uniq} from 'ramda';
import sum, { mult, div as division, subtrations, PI } from './utils';

import react from 'react';
import reactDom from 'react-dom';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 4, 5, 6];
const arr2 = [6, 6, 7, 7, 7, 8, 8, 8, 9, 10, 5];

const arr3 = union(arr1, arr2);
const arr4 = uniq(arr3);

console.log(arr3, arr4);

console.log(sum(1, 2));
console.log(mult(2, 2));
console.log(division(4, 2));
console.log(subtrations(5, 2));
console.log(PI);