import type { Category } from './types';
import { stringMethods } from './stringMethods';
import { listMethods } from './listMethods';
import { dictMethods } from './dictMethods';
import { setMethods } from './setMethods';
import { tupleMethods } from './tupleMethods';
import { builtinMethods } from './builtinMethods';
import { arraysAndStringsProblems, hashtablesProblems } from './codingProblems';
import { listOperationsProblems } from './listOperationsProblems';
import { listOperationsPart1Problems } from './listOperationsPart1';
import { dictOperationsPart1Problems } from './dictOperationsPart1';
import { stacksProblems, queuesProblems } from './stacksAndQueues';
import { linkedListProblems, treesProblems } from './linkedListAndTrees';
import { graphsProblems } from './graphs';
import { heapsProblems } from './heaps';
import { triesProblems } from './tries';
import { postgresInterview } from './postgresInterview';
import { fastapiInterview } from './fastapiInterview';

export const categories: Category[] = [
  stringMethods,
  listMethods,
  dictMethods,
  setMethods,
  tupleMethods,
  builtinMethods,
  arraysAndStringsProblems,
  hashtablesProblems,
  listOperationsPart1Problems,
  listOperationsProblems,
  dictOperationsPart1Problems,
  stacksProblems,
  queuesProblems,
  linkedListProblems,
  treesProblems,
  graphsProblems,
  heapsProblems,
  triesProblems,
  postgresInterview,
  fastapiInterview,
];
