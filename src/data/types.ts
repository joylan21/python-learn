export interface MethodDetails {
  name: string;
  description: string;
  syntax: string;
  example: string;
  output: string;
  mutates: boolean;
  timeComplexity: string;
  commonUseCases: string;
}

export interface MethodComparison {
  id: string;
  python: MethodDetails | null;
  javascript: MethodDetails | null;
}

export interface Subsection {
  id: string;
  title: string;
  comparisons: MethodComparison[];
}

export interface Category {
  id: string;
  title: string;
  subsections: Subsection[];
  extraMethods?: {
    python: { name: string; example: string }[];
    javascript: { name: string; example: string }[];
  };
}
