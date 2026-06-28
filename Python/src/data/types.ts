export interface PythonMethod {
  id: string;
  name: string;
  description: string;
  syntax: string;
  example: string;
  output: string;
  mutates: boolean;
  timeComplexity: string;
  commonUseCases: string;
  isProblem?: boolean;
  solutionCode?: string;
}

export interface Subsection {
  id: string;
  title: string;
  methods: PythonMethod[];
}

export interface Category {
  id: string;
  title: string;
  subsections: Subsection[];
  extraMethods?: { name: string; example: string }[];
  isProblemCategory?: boolean;
  isInterviewCategory?: boolean;
  isListOperationsCategory?: boolean;
  isDictOperationsCategory?: boolean;
}
