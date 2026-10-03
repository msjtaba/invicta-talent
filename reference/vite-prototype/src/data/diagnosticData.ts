export interface DiagnosticQuestion {
  id: number;
  question: string;
  isMultiSelect?: boolean;
  options: { label: string; value: string; scoreRole?: string; scoreTier?: string }[];
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: "What's your background?",
    options: [
      { label: "Architecture", value: "arch", scoreRole: "CBM" },
      { label: "Civil / Structural Engineering", value: "civil", scoreRole: "CBE" },
      { label: "Mechanical / Electrical / Plumbing (MEP)", value: "mep", scoreRole: "CBE" },
      { label: "Drafting / BIM Technology", value: "drafting", scoreRole: "CBM" },
      { label: "Project Management / Site Delivery", value: "pm", scoreRole: "CBMgr" },
    ],
  },
  {
    id: 2,
    question: "How many years have you worked on live projects?",
    options: [
      { label: "0 (Student / Fresh Graduate)", value: "0", scoreTier: "F" },
      { label: "0–2 years", value: "0-2", scoreTier: "F" },
      { label: "2–5 years", value: "2-5", scoreTier: "P" },
      { label: "5–8 years", value: "5-8", scoreTier: "P" },
      { label: "8+ years", value: "8+", scoreTier: "A" },
    ],
  },
  {
    id: 3,
    question: "What do you spend most of your week doing right now?",
    options: [
      { label: "2D CAD Drafting & Sheet Setup", value: "drafting", scoreRole: "CBM", scoreTier: "F" },
      { label: "3D BIM Modeling (Revit / Tekla)", value: "modeling", scoreRole: "CBM", scoreTier: "P" },
      { label: "Checking & Auditing Others' Models", value: "auditing", scoreRole: "CBE", scoreTier: "P" },
      { label: "Running Clash Detection & Coordination", value: "coordination", scoreRole: "CBC", scoreTier: "P" },
      { label: "Writing Standards, BEPs & Managing Teams", value: "standards", scoreRole: "CBMgr", scoreTier: "A" },
    ],
  },
  {
    id: 4,
    question: "Which of these have you done unsupervised? (Select all that apply)",
    isMultiSelect: true,
    options: [
      { label: "Set up a Revit project with shared coordinates", value: "revit_setup", scoreRole: "CBM" },
      { label: "Produced a shop drawing package from BIM", value: "shop_drawings", scoreRole: "CBM" },
      { label: "Run a Navisworks clash test & created BCF reports", value: "clash_test", scoreRole: "CBC" },
      { label: "Chaired a multi-discipline coordination meeting", value: "chaired_meeting", scoreRole: "CBC" },
      { label: "Written or reviewed a BIM Execution Plan (BEP)", value: "authored_bep", scoreRole: "CBMgr" },
    ],
  },
  {
    id: 5,
    question: "Where do you want to be in 18 months?",
    options: [
      { label: "Lead Production Modeler delivering LOD 350-400 shop drawings", value: "lead_modeler", scoreRole: "CBM" },
      { label: "BIM Engineer validating structural/MEP design & 4D scheduling", value: "bim_engineer", scoreRole: "CBE" },
      { label: "BIM Coordinator chairing multi-discipline coordination for major projects", value: "coordinator", scoreRole: "CBC" },
      { label: "BIM Manager managing EIRs, BEPs, CDE governance and digital strategy", value: "manager", scoreRole: "CBMgr" },
    ],
  },
  {
    id: 6,
    question: "Which tools do you use weekly?",
    isMultiSelect: true,
    options: [
      { label: "Revit / AutoCAD", value: "revit" },
      { label: "Navisworks / Solibri", value: "navisworks" },
      { label: "Revizto / BIMcollab", value: "revizto" },
      { label: "Synchro 4D / Primavera", value: "synchro" },
      { label: "Tekla / Rhino / Dynamo", value: "tekla" },
    ],
  },
  {
    id: 7,
    question: "Can you commit to full-time lab drills or do you need a short tool certificate?",
    options: [
      { label: "I can commit to 12 weeks of labs & expert sessions (Full Track)", value: "full_track" },
      { label: "I need a short 2-6 week tool certificate first (Tool Certificate)", value: "tool_only" },
    ],
  },
  {
    id: 8,
    question: "Which region are you targeting?",
    options: [
      { label: "Saudi Arabia (KSA)", value: "KSA" },
      { label: "United Arab Emirates (UAE)", value: "UAE" },
      { label: "Qatar / Kuwait", value: "Qatar" },
      { label: "India / Remote GCC delivery", value: "India" },
      { label: "Other International", value: "Other" },
    ],
  },
];

export interface DiagnosticResult {
  trackCode: string;
  trackName: string;
  tier: 'Foundation' | 'Professional' | 'Advanced';
  isNotYet: boolean;
  recommendationText: string;
  programSlug: string;
  entryMet: string;
  gapToClose: string;
}
