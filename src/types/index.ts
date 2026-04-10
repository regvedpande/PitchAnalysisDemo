export type PitchStatus = "completed" | "processing" | "on_hold";

export type PitchCategory =
  | "Tax Strategies and Planning"
  | "Mutual Fund Tax Implications"
  | "Distributions and Taxes"
  | "State and Local Taxes"
  | "Cost Basis and Holding Period";

export interface DemoUser {
  id: string;
  name: string;
  role: string;
  company: string;
  email: string;
  initials: string;
}

export interface ScoreBreakdown {
  toneAndSentiment: number;
  structureAndFlow: number;
  keyMessage: number;
  audienceEngagement: number;
  transcriptQuality: number;
  adminReview: number;
}

export interface TranscriptSegment {
  id: string;
  timestamp: string;
  speaker: string;
  text: string;
}

export interface PitchAnalysisSections {
  summary: string;
  strengths: string[];
  opportunities: string[];
  nextSteps: string[];
}

export interface ModelGuidance {
  emphasize: string[];
  avoid: string[];
  coachingNote: string;
}

export interface PitchRecord {
  id: string;
  title: string;
  category: PitchCategory;
  date: string;
  status: PitchStatus;
  score: number;
  duration: string;
  presenter: string;
  thumbnailLabel: string;
  clientLabel: string;
  analysisSummary: string;
  transcriptSegments: TranscriptSegment[];
  llmFeedback: PitchAnalysisSections;
  adminFeedback: {
    reviewer: string;
    note: string;
    recommendedFollowUp: string;
  };
  modelGuidance: ModelGuidance;
  scoreBreakdown: ScoreBreakdown;
}

export interface MonthlyScorePoint {
  month: string;
  score: number;
}
