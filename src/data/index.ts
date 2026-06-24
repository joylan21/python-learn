import type { Category } from './types';
import { arrayMethods } from './arrayMethods';
import { stringMethods } from './stringMethods';
import { setMethods } from './setMethods';
import { objectMethods } from './objectMethods';

export const categories: Category[] = [
  arrayMethods,
  stringMethods,
  setMethods,
  objectMethods,
];
