export interface InfluentialSentence {
  text: string;
  impactScore: number; // 0 to 10
  reasoning?: string;
}

export interface ArticleMetadata {
  title: string;
  outlet: string;
  publishedDate: string;
  wordCount: number;
  readTime: string;
}

export interface AnalysisResult {
  metadata: ArticleMetadata;
  politicalScore: number; // -100 (Left) to 100 (Right)
  politicalLabel: string; // e.g., "Center-Right"
  leaningPercentage: number; // 0 to 100 absolute magnitude
  leaningDirection: 'Left' | 'Right' | 'Center';
  summary: string;
  topSentences: InfluentialSentence[];
  confidenceScore: number; // 0.0 to 1.0
  confidenceReasoning: string;
}

export enum AppState {
  UPLOAD = 'UPLOAD',
  ANALYZING = 'ANALYZING',
  RESULTS = 'RESULTS',
  ERROR = 'ERROR'
}