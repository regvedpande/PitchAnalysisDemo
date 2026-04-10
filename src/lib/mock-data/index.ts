import {
  DemoUser,
  MonthlyScorePoint,
  PitchCategory,
  PitchRecord,
} from "@/types";

export const demoUser: DemoUser = {
  id: "user-1",
  name: "Ariana Patel",
  role: "Revenue Enablement Lead",
  company: "Northstar Wealth Advisors",
  email: "ariana.patel@northstar-demo.com",
  initials: "AP",
};

export const pitchCategories: PitchCategory[] = [
  "Tax Strategies and Planning",
  "Mutual Fund Tax Implications",
  "Distributions and Taxes",
  "State and Local Taxes",
  "Cost Basis and Holding Period",
];

export const monthlyScores: MonthlyScorePoint[] = [
  { month: "Jan", score: 74 },
  { month: "Feb", score: 77 },
  { month: "Mar", score: 79 },
  { month: "Apr", score: 81 },
  { month: "May", score: 78 },
  { month: "Jun", score: 84 },
  { month: "Jul", score: 83 },
  { month: "Aug", score: 86 },
  { month: "Sep", score: 88 },
  { month: "Oct", score: 87 },
  { month: "Nov", score: 90 },
  { month: "Dec", score: 92 },
];

export const pitchRecords: PitchRecord[] = [
  {
    id: "pitch-101",
    title: "Tax Strategies for High-Income Households",
    category: "Tax Strategies and Planning",
    date: "2026-04-08",
    status: "completed",
    score: 91,
    duration: "08:24",
    presenter: "Ariana Patel",
    thumbnailLabel: "Advisor briefing preview",
    clientLabel: "Northstar Growth Clients",
    analysisSummary:
      "A confident, structured walkthrough with strong framing around year-round tax planning and advisor value.",
    transcriptSegments: [
      {
        id: "t-101-1",
        timestamp: "00:00",
        speaker: "Ariana",
        text: "Today I want to show how proactive tax planning can preserve capital without changing your long-term investment thesis.",
      },
      {
        id: "t-101-2",
        timestamp: "01:14",
        speaker: "Ariana",
        text: "The first lever is timing. We can coordinate gains, losses, and retirement distributions instead of reacting after year end.",
      },
      {
        id: "t-101-3",
        timestamp: "03:28",
        speaker: "Ariana",
        text: "That matters most for clients with concentrated positions, charitable goals, or a pending liquidity event in the next twelve months.",
      },
      {
        id: "t-101-4",
        timestamp: "05:56",
        speaker: "Ariana",
        text: "My recommendation is to anchor every meeting on three actions: optimize withholding, revisit gains exposure, and document estate-related tax assumptions.",
      },
    ],
    llmFeedback: {
      summary:
        "The pitch balanced credibility and clarity. The opening quickly established business value, and the close offered specific actions clients can remember.",
      strengths: [
        "Strong executive-level framing in the first 30 seconds.",
        "Useful transitions between tax levers, planning windows, and client scenarios.",
        "Confident delivery style with minimal filler language.",
      ],
      opportunities: [
        "Add one concrete before-and-after savings example to strengthen memorability.",
        "Pause slightly longer after the planning framework to let the core message land.",
      ],
      nextSteps: [
        "Test a shorter version for first meetings under five minutes.",
        "Reuse the closing action framework in email follow-up templates.",
      ],
    },
    adminFeedback: {
      reviewer: "Marcus Chen",
      note:
        "Excellent advisor presence. The talk track feels client-ready and the recommendations are commercially relevant.",
      recommendedFollowUp:
        "Add a single case study slide in the future version to support the numeric impact story.",
    },
    modelGuidance: {
      emphasize: [
        "Translate tax complexity into client outcomes such as preserved capital and reduced surprises.",
        "Tie planning windows to concrete advisor actions and review cadence.",
        "Reinforce that tax planning supports the existing portfolio strategy rather than replacing it.",
      ],
      avoid: [
        "Overloading the first two minutes with regulation-heavy terminology.",
        "Presenting withholding changes without framing client impact.",
        "Ending on tax mechanics without a business recommendation.",
      ],
      coachingNote:
        "This pitch works best when the presenter leads with advisor confidence and then narrows into a three-step framework clients can repeat back.",
    },
    scoreBreakdown: {
      toneAndSentiment: 93,
      structureAndFlow: 90,
      keyMessage: 92,
      audienceEngagement: 88,
      transcriptQuality: 94,
      adminReview: 89,
    },
  },
  {
    id: "pitch-102",
    title: "Mutual Fund Tax Implications Explained",
    category: "Mutual Fund Tax Implications",
    date: "2026-04-05",
    status: "completed",
    score: 86,
    duration: "07:11",
    presenter: "Daniel Ross",
    thumbnailLabel: "Quarterly client update",
    clientLabel: "Retirement Planning Prospects",
    analysisSummary:
      "Clear educational structure with good objection handling, though the close could connect more directly to advisor-led action.",
    transcriptSegments: [
      {
        id: "t-102-1",
        timestamp: "00:00",
        speaker: "Daniel",
        text: "Mutual funds can create tax events even when a client never sells a position, and that surprises many investors.",
      },
      {
        id: "t-102-2",
        timestamp: "01:42",
        speaker: "Daniel",
        text: "The conversation gets easier when we separate dividends, capital gain distributions, and after-tax return into distinct talking points.",
      },
      {
        id: "t-102-3",
        timestamp: "04:20",
        speaker: "Daniel",
        text: "The advisor role is to anticipate these distributions and position them inside the broader tax-aware portfolio plan.",
      },
    ],
    llmFeedback: {
      summary:
        "The presenter explained a nuanced topic in accessible language and showed strong command of investor confusion points.",
      strengths: [
        "Good decomposition of a technical subject into simple subtopics.",
        "Credible handling of common misconceptions.",
        "Useful pacing during the middle section.",
      ],
      opportunities: [
        "Finish with a stronger call to action tied to account review timing.",
        "Use more direct client language instead of internal finance phrasing.",
      ],
      nextSteps: [
        "Add a short comparison between taxable and tax-advantaged account placement.",
        "Practice a tighter 20-second closing statement.",
      ],
    },
    adminFeedback: {
      reviewer: "Priya Nair",
      note:
        "Solid educational pitch. It will land even better if the final minute is more advisory and less explanatory.",
      recommendedFollowUp:
        "Pair this with an objection-handling one-pager for recruiter demonstrations.",
    },
    modelGuidance: {
      emphasize: [
        "Clarify why unexpected distributions matter to investor trust.",
        "Show how advisors can preempt confusion with proactive communication.",
        "Connect tax awareness to portfolio placement decisions.",
      ],
      avoid: [
        "Drifting into jargon around turnover ratios without explanation.",
        "Leaving the audience with facts but no next meeting action.",
      ],
      coachingNote:
        "This pitch is strongest when it feels like practical education with a clear advisory recommendation at the end.",
    },
    scoreBreakdown: {
      toneAndSentiment: 84,
      structureAndFlow: 88,
      keyMessage: 85,
      audienceEngagement: 83,
      transcriptQuality: 89,
      adminReview: 87,
    },
  },
  {
    id: "pitch-103",
    title: "Distribution Timing for Retiree Portfolios",
    category: "Distributions and Taxes",
    date: "2026-04-02",
    status: "processing",
    score: 82,
    duration: "06:39",
    presenter: "Ariana Patel",
    thumbnailLabel: "New analysis in progress",
    clientLabel: "Income Strategy Review",
    analysisSummary:
      "Currently processing, but the draft analysis already suggests strong client empathy and a concise problem statement.",
    transcriptSegments: [
      {
        id: "t-103-1",
        timestamp: "00:00",
        speaker: "Ariana",
        text: "Retirees often focus on income first, but the distribution schedule can change the tax outcome more than the withdrawal amount itself.",
      },
      {
        id: "t-103-2",
        timestamp: "02:16",
        speaker: "Ariana",
        text: "We want a repeatable framework for taxable, tax-deferred, and Roth accounts so clients understand what happens next year, not just next month.",
      },
    ],
    llmFeedback: {
      summary:
        "Draft analysis indicates a useful planning narrative with room to sharpen the recommendation sequence.",
      strengths: [
        "Client-centered framing around retirement income confidence.",
        "Good contrast between short-term cash needs and long-term tax consequences.",
      ],
      opportunities: [
        "Clarify the recommended order of account withdrawals.",
        "Add a more explicit transition into Roth strategy considerations.",
      ],
      nextSteps: [
        "Finalize the close with a three-bucket distribution recommendation.",
      ],
    },
    adminFeedback: {
      reviewer: "Marcus Chen",
      note: "Promising pitch draft with good client empathy.",
      recommendedFollowUp:
        "Review once processing completes and confirm the closing language.",
    },
    modelGuidance: {
      emphasize: [
        "Sequence withdrawals as a deliberate planning choice.",
        "Frame tax efficiency as a driver of retirement confidence.",
      ],
      avoid: [
        "Treating required minimum distributions as the only decision point.",
      ],
      coachingNote:
        "A clearer step-by-step recommendation will elevate this from informative to action-oriented.",
    },
    scoreBreakdown: {
      toneAndSentiment: 85,
      structureAndFlow: 80,
      keyMessage: 81,
      audienceEngagement: 79,
      transcriptQuality: 84,
      adminReview: 83,
    },
  },
  {
    id: "pitch-104",
    title: "State Tax Exposure for Relocating Executives",
    category: "State and Local Taxes",
    date: "2026-03-29",
    status: "on_hold",
    score: 78,
    duration: "05:52",
    presenter: "Elena Brooks",
    thumbnailLabel: "Needs revision",
    clientLabel: "Executive Transition Leads",
    analysisSummary:
      "A strong topic with clear commercial value, but the current draft needs more structure and a clearer recommendation path.",
    transcriptSegments: [
      {
        id: "t-104-1",
        timestamp: "00:00",
        speaker: "Elena",
        text: "When an executive relocates, state filing rules and sourcing treatment can create surprises if the planning conversation starts too late.",
      },
      {
        id: "t-104-2",
        timestamp: "03:02",
        speaker: "Elena",
        text: "The opportunity for an advisor is to coordinate residency, equity compensation timing, and documentation before the move becomes final.",
      },
    ],
    llmFeedback: {
      summary:
        "The topic is compelling, but the current version feels more like internal preparation notes than a client-facing pitch.",
      strengths: [
        "Relevant niche scenario with strong advisory value.",
        "Good awareness of timing-sensitive planning events.",
      ],
      opportunities: [
        "Improve the opening hook with one high-stakes executive example.",
        "Use a more linear structure from risk to action to advisor value.",
      ],
      nextSteps: [
        "Rewrite the first minute around a relocation timeline.",
        "Shorten the technical digression on sourcing rules.",
      ],
    },
    adminFeedback: {
      reviewer: "Priya Nair",
      note:
        "Worth keeping in the library, but this version should stay on hold until the storyline is simpler.",
      recommendedFollowUp:
        "Re-record after tightening the script to a three-part structure.",
    },
    modelGuidance: {
      emphasize: [
        "Lead with executive risk and timing pressure.",
        "Show how the advisor prevents avoidable state-tax surprises.",
      ],
      avoid: [
        "Dense tax rule explanations before establishing the client scenario.",
        "Multiple examples that dilute the main use case.",
      ],
      coachingNote:
        "The best version of this pitch is decisive, scenario-led, and highly visual in how it describes the relocation timeline.",
    },
    scoreBreakdown: {
      toneAndSentiment: 76,
      structureAndFlow: 74,
      keyMessage: 79,
      audienceEngagement: 77,
      transcriptQuality: 82,
      adminReview: 80,
    },
  },
  {
    id: "pitch-105",
    title: "Cost Basis Planning Before a Liquidity Event",
    category: "Cost Basis and Holding Period",
    date: "2026-03-25",
    status: "completed",
    score: 88,
    duration: "07:48",
    presenter: "Daniel Ross",
    thumbnailLabel: "Pre-liquidity coaching session",
    clientLabel: "Founder Advisory Pipeline",
    analysisSummary:
      "Effective on urgency and planning value, with especially strong messaging around pre-sale coordination.",
    transcriptSegments: [
      {
        id: "t-105-1",
        timestamp: "00:00",
        speaker: "Daniel",
        text: "Ahead of any liquidity event, cost basis assumptions shape the conversation long before sale documents are signed.",
      },
      {
        id: "t-105-2",
        timestamp: "02:08",
        speaker: "Daniel",
        text: "Clients do not need a tax lecture. They need clarity on what records matter, what timing matters, and what decisions can still be influenced.",
      },
      {
        id: "t-105-3",
        timestamp: "04:41",
        speaker: "Daniel",
        text: "The advisor can create a calmer process by aligning CPA, legal, and portfolio conversations before the event reaches a hard deadline.",
      },
    ],
    llmFeedback: {
      summary:
        "The message was commercially sharp and persuasive, particularly when describing cross-functional planning before a sale.",
      strengths: [
        "Strong urgency without sounding alarmist.",
        "Clear articulation of advisor coordination value.",
        "Effective distinction between documentation and decision timing.",
      ],
      opportunities: [
        "Bring the client persona into the first 15 seconds.",
        "Use one more direct sentence on holding period implications.",
      ],
      nextSteps: [
        "Create an enterprise-founder variation with a shorter compliance section.",
      ],
    },
    adminFeedback: {
      reviewer: "Marcus Chen",
      note:
        "Very persuasive. This is one of the clearest examples of advisory value in the library.",
      recommendedFollowUp:
        "Feature it as a benchmark example on the dashboard.",
    },
    modelGuidance: {
      emphasize: [
        "Documentation readiness and timing sensitivity.",
        "Advisor orchestration across stakeholders.",
        "Client peace of mind before the event window narrows.",
      ],
      avoid: [
        "Implying basis work is purely back-office administration.",
      ],
      coachingNote:
        "This pitch lands best when the urgency feels controlled and solution-oriented.",
    },
    scoreBreakdown: {
      toneAndSentiment: 89,
      structureAndFlow: 87,
      keyMessage: 90,
      audienceEngagement: 86,
      transcriptQuality: 88,
      adminReview: 89,
    },
  },
];

export const dashboardStats = [
  {
    label: "Pitches Recorded",
    value: "128",
    change: "+14% vs last quarter",
    tone: "orange" as const,
  },
  {
    label: "Average Score",
    value: "87.1",
    change: "+4.2 points this month",
    tone: "blue" as const,
  },
  {
    label: "Pitches This Month",
    value: "18",
    change: "5 currently in review",
    tone: "slate" as const,
  },
  {
    label: "Best Category",
    value: "Tax Strategies",
    change: "91 average score",
    tone: "orange" as const,
  },
];

export const recentActivity = [
  {
    label: "New pitch analysis completed",
    detail: "Tax Strategies for High-Income Households scored 91",
    time: "2 hours ago",
  },
  {
    label: "Manager review added",
    detail: "State Tax Exposure for Relocating Executives marked on hold",
    time: "Yesterday",
  },
  {
    label: "Sample upload processed",
    detail: "Distribution Timing for Retiree Portfolios is ready for review",
    time: "2 days ago",
  },
];

export function getPitchById(id: string) {
  return pitchRecords.find((pitch) => pitch.id === id);
}
