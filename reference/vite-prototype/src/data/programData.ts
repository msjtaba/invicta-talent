export interface ScheduleWeek {
  week: number;
  youCover: string;
  expertSessions: string;
}

export interface ProgramDetail {
  slug: string;
  code: string;
  title: string;
  eyebrow: string;
  h1: string;
  sub: string;
  whoItIsFor: {
    tier: 'F' | 'P' | 'A';
    tierName: string;
    audience: string;
    requirement: string;
  }[];
  jobOutcomes: string[];
  schedule: {
    month1: ScheduleWeek[];
    month2: ScheduleWeek[];
    month3: ScheduleWeek[];
  };
  capstone: {
    title: string;
    description: string;
    brief: string;
    constraints: string;
    responsibility: string;
    deliverables: string[];
  };
  tools: string[];
  certificationStandards: string[];
}

export const PROGRAMS_DATA: Record<string, ProgramDetail> = {
  'bim-modeler': {
    slug: 'bim-modeler',
    code: 'ITTA-CBM',
    title: 'Certified BIM Modeler',
    eyebrow: 'ITTA-CBM · 12 WEEKS · FOUNDATION / PROFESSIONAL / ADVANCED',
    h1: 'The modeler a project can actually rely on.',
    sub: 'Produce discipline models to LOD 300–400 per the project BEP, extract shop-drawing-grade documentation, run your own QA, and survive revision cycles without breaking the model. Twelve weeks on real project data. Assessed by people who reject bad models for a living.',
    whoItIsFor: [
      { tier: 'F', tierName: 'Foundation', audience: 'Fresh graduates — architecture, civil, mechanical, electrical engineering or drafting diplomas', requirement: 'Degree or diploma; no BIM experience required' },
      { tier: 'P', tierName: 'Professional', audience: 'Entry-level modelers, 0–2 years', requirement: 'Basic Revit or AutoCAD exposure' },
      { tier: 'A', tierName: 'Advanced', audience: 'Working modelers upskilling to LOD 350–400 and shop-drawing-grade production', requirement: '2+ years modeling experience' },
    ],
    jobOutcomes: [
      'Produce discipline models (ARC / STR / MEP) to LOD 300–400 per the project BIM Execution Plan',
      'Model from consultant drawings, markups, point clouds and design narratives with correct naming, worksets and shared coordinates',
      'Extract sheets, general arrangement drawings, sections and installation/shop drawings from the model',
      'Run your own QA before submission: model audits, naming compliance, parameter completeness, clash pre-checks',
      'Respond to coordination comments and issue-tracking assignments in Revizto and BIM 360 workflows',
      'Deliver on schedule inside a production team, and report progress accurately',
    ],
    schedule: {
      month1: [
        { week: 1, youCover: 'BIM fundamentals; project lifecycle from design intent to construction reality; ISO 19650 essentials for modelers — containers, naming, status codes; CDE basics', expertSessions: '"A day in the life of a modeler on a Saudi giga-project"; what consultants and contractors actually expect from your model' },
        { week: 2, youCover: 'Revit core — modeling environment, levels and grids, discipline templates, worksharing, shared coordinates. Labs: rebuild a real villa/plot package', expertSessions: 'Model setup standards on live projects; the Week-1 mistakes that cost teams days' },
        { week: 3, youCover: 'Discipline specialisation begins (ARC / STR / MEP): families, system settings, discipline modeling standards; AutoCAD for reference handling and detail work', expertSessions: 'LOD in practice — what 300 vs 350 vs 400 really looks like on site; family standards on hospitality projects' },
        { week: 4, youCover: 'Parameters, schedules and data discipline; naming conventions; model health and auditing. Checkpoint assessment 1', expertSessions: 'Model data that quantity surveyors and site teams rely on; audit walkthrough of a real, anonymised project model' },
      ],
      month2: [
        { week: 5, youCover: 'Modeling from real inputs — consultant drawing sets, markups, RFIs; handling design change. Real project dataset issued (terminal wing / tower segment)', expertSessions: 'Working from IFC drawings on aviation projects; managing revisions without breaking the model' },
        { week: 6, youCover: 'Sheet and drawing production — GA drawings, sections, annotation standards, title blocks, revision control', expertSessions: 'The shop drawing production pipeline from BIM: model validation → coordination check → production → QA → issue; what gets drawings rejected' },
        { week: 7, youCover: 'Coordination participation — receiving clash reports, Revizto and Navisworks issue workflows, resolving assigned issues, closing the loop', expertSessions: 'How modelers fit into weekly coordination cycles; issue etiquette and turnaround expectations on fast-track projects' },
        { week: 8, youCover: 'Advanced production — linked models, phasing, point cloud reference. A-tier adds LOD 400 fabrication detail, embeds, sleeves, supports. Checkpoint assessment 2', expertSessions: 'Modeling for fabrication on MEP-heavy projects; as-built verification workflows' },
      ],
      month3: [
        { week: 9, youCover: 'Capstone simulation. Act as production modeler on the project dataset: receive scope package, BEP extract, and deadline schedule. Produce model, drawing set, and QA report through 2 revision cycles', expertSessions: 'Live desk-crit reviews of candidate work with senior experts' },
        { week: 10, youCover: 'Capstone refinement & redline resolution: addressing expert panel markups and re-submitting updated drawing sheets', expertSessions: 'Detailed redline review feedback & model health checks' },
        { week: 11, youCover: 'Portfolio assembly; interview and workplace readiness — communicating progress, estimating modeling effort, working to Middle East project cadences; mock technical interviews', expertSessions: 'Mock technical panel interview and resume critique' },
        { week: 12, youCover: 'Certification exam: written (standards, LOD, workflows) + practical (timed modeling and drawing extraction) + panel review of capstone. Graduation', expertSessions: 'Final Certification Defense before live expert panel' },
      ],
    },
    capstone: {
      title: 'Discipline Model & Production Drawing Package',
      description: 'You are handed a scope package, a BEP extract and a deadline. You produce a discipline model, a drawing set and a QA report — then you revise it twice against markups issued by a practising expert, exactly as a production modeler would on a live package.',
      brief: 'Produce complete LOD 350 discipline package for a 12-story commercial/hospitality block',
      constraints: 'Zero model errors, 100% parameter compliance, zero broken links',
      responsibility: 'Lead Discipline Modeler',
      deliverables: ['Audit-clean Revit model', 'Extracted sheet package (GA & Sections)', 'Self-QA audit report', 'BCF issue response matrix'],
    },
    tools: ['Revit (primary)', 'AutoCAD', 'Navisworks (viewer and issues)', 'Revizto (issues)'],
    certificationStandards: ['85% minimum attendance', '10 weekly deliverables', '2 checkpoint assessments', 'Capstone accepted by expert panel', '70% overall pass mark'],
  },
  'bim-engineer': {
    slug: 'bim-engineer',
    code: 'ITTA-CBE',
    title: 'Certified BIM Engineer',
    eyebrow: 'ITTA-CBE · 12 WEEKS · FOUNDATION / PROFESSIONAL / ADVANCED',
    h1: 'Validate the model, defend the drawing, own the number.',
    sub: 'Transform engineering capability into model-based delivery. Perform model audits, quantity extraction, 4D construction phasing, and engineering validation across civil, structural, and MEP packages. Taught by GCC project engineers.',
    whoItIsFor: [
      { tier: 'F', tierName: 'Foundation', audience: 'Entry-level engineers, 0–2 years', requirement: 'Degree in Civil/Structural/MEP Engineering' },
      { tier: 'P', tierName: 'Professional', audience: 'Mid-level engineers, 2–5 years moving into BIM-centric delivery', requirement: '2+ yrs site or design experience' },
      { tier: 'A', tierName: 'Advanced', audience: 'Mid-senior engineers preparing for coordination-track roles', requirement: '4+ yrs engineering experience' },
    ],
    jobOutcomes: [
      'Validate discipline models against design calculations and structural/MEP codes',
      'Extract model-based Quantity Take Off (QTO) and verify cost estimates against live BIM data',
      'Run 4D time-location simulations and construction sequence validation using Synchro 4D',
      'Conduct automated rule-based model health checks and code compliance audits in Solibri',
      'Bridge the gap between design engineering narratives and 3D federated model coordination',
    ],
    schedule: {
      month1: [
        { week: 1, youCover: 'Engineering workflows in BIM; ISO 19650 information requirements from an engineering perspective', expertSessions: 'Engineering accuracy vs graphical detail in GCC mega-projects' },
        { week: 2, youCover: 'Model auditing, parameter validation, automated parameter checking and data extraction', expertSessions: 'How engineering mistakes hide inside 3D models' },
        { week: 3, youCover: 'Structural and MEP design integration; clash classification from an engineering risk perspective', expertSessions: 'Structural clearance vs MEP clearance priorities' },
        { week: 4, youCover: 'QTO & Model-based cost estimation; linking models to Excel and cost databases. Checkpoint 1', expertSessions: 'Real-world commercial risks in inaccurate QTO extractions' },
      ],
      month2: [
        { week: 5, youCover: 'Project simulation starts: handling real project datasets (hospitality/infrastructure package)', expertSessions: 'Engineering coordination in high-density MEP environments' },
        { week: 6, youCover: '4D Construction Scheduling and Synchro 4D simulation setup', expertSessions: 'Using 4D models for site logistics & contractor claim mitigation' },
        { week: 7, youCover: 'Solibri rule-based checking & automated code compliance auditing', expertSessions: 'Building custom Solibri rules for Saudi/UAE building code compliance' },
        { week: 8, youCover: 'Design change management, engineering RFI workflows, BCF issue tracking. Checkpoint 2', expertSessions: 'Managing engineering revisions under tight contract deadlines' },
      ],
      month3: [
        { week: 9, youCover: 'Capstone execution: Engineering Model Audit, QTO Verification & 4D Sequence Package', expertSessions: 'Live desk-crit with Senior Engineering Directors' },
        { week: 10, youCover: 'Capstone revision & redline defense before expert engineering panel', expertSessions: 'Defending engineering decisions against cost & schedule constraints' },
        { week: 11, youCover: 'Portfolio compilation & engineering BIM role interview prep', expertSessions: 'Mock interviews & technical capability assessment' },
        { week: 12, youCover: 'Certification exam (Theory + Practical model audit) + Final Panel defense. Graduation', expertSessions: 'Final Certification Defense' },
      ],
    },
    capstone: {
      title: 'Engineering Audit & 4D Simulation Package',
      description: 'Audit a multi-discipline engineering model, perform complete automated QTO, run Solibri rule-based checks, and produce a 4D construction schedule.',
      brief: 'Hospital Wing MEP & Structural Engineering Audit',
      constraints: 'Zero undetected structural clashes, full QTO variance report',
      responsibility: 'Lead BIM Engineer',
      deliverables: ['Solibri Model Audit Report', 'Validated QTO Excel Matrix', 'Synchro 4D Phasing Video & Report', 'BCF Engineering Issue Register'],
    },
    tools: ['Revit', 'Navisworks Manage', 'Solibri', 'Synchro 4D', 'Excel / BIM Link'],
    certificationStandards: ['85% minimum attendance', '10 weekly deliverables', '2 checkpoint assessments', 'Capstone accepted by expert panel', '70% overall pass mark'],
  },
  'bim-coordinator': {
    slug: 'bim-coordinator',
    code: 'ITTA-CBC',
    title: 'Certified BIM Coordinator / Specialist',
    eyebrow: 'ITTA-CBC · 12 WEEKS · FOUNDATION / PROFESSIONAL / ADVANCED',
    h1: 'Federate. Triage. Chair the meeting. Hold the line.',
    sub: 'Learn how to aggregate discipline models, run intelligent clash detection, run weekly coordination meetings, and drive project resolution across 30+ discipline models. The gold standard for GCC coordination roles.',
    whoItIsFor: [
      { tier: 'F', tierName: 'Foundation', audience: 'Mid-level professionals, 3–5 yrs, stepping into coordination', requirement: '3+ yrs modeling or engineering experience' },
      { tier: 'P', tierName: 'Professional', audience: 'Mid-senior professionals and discipline leads, 5–8 yrs', requirement: 'Active coordination role or ITTA-CBC-F' },
      { tier: 'A', tierName: 'Advanced', audience: 'Senior coordinators and multi-project specialists formalising federated-model leadership', requirement: '6+ yrs experience' },
    ],
    jobOutcomes: [
      'Federate multi-discipline models from 20+ sub-consultants into clean coordination environments',
      'Filter 40,000 raw geometrical clashes down to 400 high-priority actionable design issues',
      'Chair discipline coordination meetings and assign clear technical accountability via BCF',
      'Enforce Common Data Environment (CDE) protocols in accordance with ISO 19650',
      'Manage multi-discipline revision cycles and verify site clearance before drawing production',
    ],
    schedule: {
      month1: [
        { week: 1, youCover: 'Federation principles, matrix setup, coordinate alignment, ISO 19650 CDE container management', expertSessions: 'Federation failures that delayed major GCC airport projects' },
        { week: 2, youCover: 'Navisworks Manage & Solibri rule matrix creation; setting up search sets and clash tests', expertSessions: 'Building a clash matrix that doesn’t waste consultant time' },
        { week: 3, youCover: 'Clash triage methodology — distinguishing visual noise from hard structural/MEP clashes', expertSessions: 'Triage in action: filtering 50k clashes down to 200 real decisions' },
        { week: 4, youCover: 'Issue management using Revizto, BIMcollab, BCF workflows and tracking SLAs. Checkpoint 1', expertSessions: 'Running effective coordination meetings with resistant discipline leads' },
      ],
      month2: [
        { week: 5, youCover: 'Project simulation starts: Airport Terminal Wing dataset issued (30+ discipline models)', expertSessions: 'Aviation & Giga-project coordination dynamics in Saudi Arabia' },
        { week: 6, youCover: 'Chairing coordination meetings: agenda, model presentation, live clash resolution', expertSessions: 'Live simulation of a high-pressure coordination meeting' },
        { week: 7, youCover: 'Advanced Solibri classification, clearance checks, accessible space verification', expertSessions: 'MEP maintenance clearance & headroom verification rules' },
        { week: 8, youCover: 'CDE workflows (BIM 360 / ACC / Aconex), status codes, WIP-to-Shared approvals. Checkpoint 2', expertSessions: 'CDE governance and client sign-off procedures' },
      ],
      month3: [
        { week: 9, youCover: 'Capstone execution: Full Terminal Wing Coordination Defense Package', expertSessions: 'Live desk-crit review with Senior BIM Directors' },
        { week: 10, youCover: 'Capstone defense preparation: compiling clash reports, BCF logs, and meeting minutes', expertSessions: 'Handling tough questions from client design managers' },
        { week: 11, youCover: 'Portfolio assembly & coordinator interview simulation', expertSessions: 'Mock coordination panel interview' },
        { week: 12, youCover: 'Certification exam + Live Capstone Panel Defense before expert hiring panel. Graduation', expertSessions: 'Final Certification Defense' },
      ],
    },
    capstone: {
      title: 'Federated Model Coordination & Panel Defense',
      description: 'You are given a raw 30-model dataset with 40,000 clashes. You setup federation, execute clash triage, publish BCF issue registers, chair a mock coordination meeting, and present your resolution plan to a live expert panel.',
      brief: 'Airport Terminal Wing Multi-Discipline Coordination',
      constraints: 'Resolve top 100 critical clashes, zero unassigned BCF issues',
      responsibility: 'Lead BIM Coordinator',
      deliverables: ['Navisworks Federated Model (.nwd)', 'Revizto Live Issue Project', 'Solibri Clash Triage Matrix', 'BCF Report & Meeting Minutes'],
    },
    tools: ['Navisworks Manage', 'Solibri', 'Revizto', 'AutoCAD Civil 3D', 'BIMcollab / ACC'],
    certificationStandards: ['85% minimum attendance', '10 weekly deliverables', '2 checkpoint assessments', 'Capstone accepted by expert panel', '70% overall pass mark'],
  },
  'bim-manager': {
    slug: 'bim-manager',
    code: 'ITTA-CBMgr',
    title: 'Certified BIM Manager',
    eyebrow: 'ITTA-CBMgr · 12 WEEKS · FOUNDATION / PROFESSIONAL / ADVANCED',
    h1: 'Answer the EIR. Author the BEP. Report the delivery risk.',
    sub: 'Step up to organizational and project-level BIM management. Master ISO 19650 compliance, EIR/BEP authoring, CDE governance, capability assessments, and strategic digital enablement. Taught by GCC BIM Directors.',
    whoItIsFor: [
      { tier: 'F', tierName: 'Foundation', audience: 'Senior professionals and team leads, 6+ yrs, entering BIM management', requirement: '5+ yrs in AEC project delivery' },
      { tier: 'P', tierName: 'Professional', audience: 'Coordinators stepping up to project or organisational BIM management', requirement: 'Active coordinator or BIM lead experience' },
      { tier: 'A', tierName: 'Advanced', audience: 'Practising BIM managers formalising ISO 19650-aligned, advisory-grade practice', requirement: '8+ yrs experience' },
    ],
    jobOutcomes: [
      'Deconstruct Client Exchange Information Requirements (EIR) and author ISO 19650-compliant BEPs',
      'Establish enterprise Common Data Environment (CDE) governance, permissions, and security protocols',
      'Audit supply chain BIM capability, evaluate consultant proposals, and manage digital risks',
      'Report project delivery risks to C-suite and project directors with data-driven Power BI dashboards',
      'Formulate organization-wide digital transformation roadmaps and BIM standards',
    ],
    schedule: {
      month1: [
        { week: 1, youCover: 'ISO 19650 framework in depth (Parts 1, 2, 3, 5); Information Management Function', expertSessions: 'ISO 19650 on GCC Giga-projects: reality vs theory' },
        { week: 2, youCover: 'EIR analysis: unpacking client requirements, Level of Information Need (LOIN), milestones', expertSessions: 'Spotting trap clauses in client EIR documents' },
        { week: 3, youCover: 'Authoring the BIM Execution Plan (BEP): Pre-appointment vs Post-appointment BEP', expertSessions: 'Writing a BEP that contractors actually read and follow' },
        { week: 4, youCover: 'CDE Architecture setup, security, container naming, workflow states. Checkpoint 1', expertSessions: 'Configuring enterprise CDEs for multi-billion dollar projects' },
      ],
      month2: [
        { week: 5, youCover: 'Project simulation starts: Giga-destination Resort Development EIR/BEP package', expertSessions: 'Managing 50+ sub-consultants under one master BEP' },
        { week: 6, youCover: 'Supply chain capability assessment & task information management plans (TIMP / MIDP)', expertSessions: 'How to conduct realistic supply chain audits' },
        { week: 7, youCover: 'BIM Quality Assurance framework & model health dashboards in Power BI', expertSessions: 'Executive reporting: translating BIM metrics to cost and schedule risk' },
        { week: 8, youCover: 'Digital Twin handover requirements, COBie, asset information models (AIM). Checkpoint 2', expertSessions: 'Asset information management for GCC mega-developers' },
      ],
      month3: [
        { week: 9, youCover: 'Capstone execution: Master BEP, CDE Governance Strategy & Client EIR Response', expertSessions: 'Live desk-crit with GCC BIM Directors' },
        { week: 10, youCover: 'Capstone defense preparation & executive board deck creation', expertSessions: 'How to defend BIM budgets and strategies to project boards' },
        { week: 11, youCover: 'Portfolio assembly & BIM Manager executive interview coaching', expertSessions: 'Mock executive board interview' },
        { week: 12, youCover: 'Certification exam + Strategic BEP Board Defense before executive panel. Graduation', expertSessions: 'Final Certification Board Defense' },
      ],
    },
    capstone: {
      title: 'Strategic BEP & CDE Information Governance Package',
      description: 'Deconstruct a complex client EIR for a multi-billion dollar giga-project, author a pre- and post-appointment BEP, construct a CDE governance matrix, and defend your digital strategy before an executive board panel.',
      brief: 'Giga-Destination Mixed-Use Resort Master BEP & CDE Plan',
      constraints: 'Full ISO 19650 alignment, comprehensive MIDP/TIMP schedule',
      responsibility: 'BIM Manager / Director',
      deliverables: ['ISO 19650 Master BEP Document', 'CDE Governance & Access Matrix', 'MIDP / TIMP Master Schedule', 'Power BI Model Risk Dashboard'],
    },
    tools: ['ISO 19650 Framework', 'ACC / BIM 360', 'Solibri Enterprise', 'Power BI', 'BIMcollab'],
    certificationStandards: ['85% minimum attendance', '10 weekly deliverables', '2 checkpoint assessments', 'Capstone accepted by expert panel', '70% overall pass mark'],
  },
};
