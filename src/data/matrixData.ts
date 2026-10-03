export interface MatrixCellDetail {
  code: string;
  role: string;
  tier: 'Foundation' | 'Professional' | 'Advanced';
  audience: string;
  entryRequirement: string;
  roleOutcome: string;
  tools: string[];
  capstoneSummary: string;
  nextIntake: string;
}

export interface RoleMatrixRow {
  code: string;
  roleName: string;
  shortCode: string;
  slug: string;
  foundation: MatrixCellDetail;
  professional: MatrixCellDetail;
  advanced: MatrixCellDetail;
}

export const ROLE_MATRIX: RoleMatrixRow[] = [
  {
    code: 'IT-CBM',
    roleName: 'BIM Modeler',
    shortCode: 'Modeler',
    slug: 'bim-modeler',
    foundation: {
      code: 'IT-CBM-F',
      role: 'BIM Modeler',
      tier: 'Foundation',
      audience: 'Fresh graduates and drafting diploma holders',
      entryRequirement: 'Diploma/Degree in Civil/Arch/Mech, basic CAD knowledge',
      roleOutcome: 'Produce structured BIM models up to LOD 300, generate clean 2D drawing views, survive basic QA redlines.',
      tools: ['Revit', 'AutoCAD', 'Navisworks Freedom'],
      capstoneSummary: 'LOD 300 Architectural/Structural model & drawing production package.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    professional: {
      code: 'IT-CBM-P',
      role: 'BIM Modeler',
      tier: 'Professional',
      audience: 'Entry-level modelers, 0–2 yrs',
      entryRequirement: '6+ months Revit modeling experience or IT-CBM-F',
      roleOutcome: 'Produce LOD 350 models, extract accurate shop drawings, resolve self-clashes, execute parametric family creation.',
      tools: ['Revit Advanced', 'Navisworks Simulate', 'AutoCAD'],
      capstoneSummary: 'LOD 350 MEP/Arch multi-discipline package & parametric family library.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    advanced: {
      code: 'IT-CBM-A',
      role: 'BIM Modeler',
      tier: 'Advanced',
      audience: 'Working modelers upskilling to LOD 350–400 and shop-drawing-grade production',
      entryRequirement: '2+ yrs active model production',
      roleOutcome: 'Deliver LOD 400 fabrication-ready models, automated sheet production, complex family creation, and zero-error delivery.',
      tools: ['Revit', 'Tekla Structures', 'Navisworks Manage', 'Dynamo'],
      capstoneSummary: 'LOD 400 Shop Drawing & Fabrication Model Package for complex GCC high-rise/terminal.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
  },
  {
    code: 'IT-CBE',
    roleName: 'BIM Engineer',
    shortCode: 'Engineer',
    slug: 'bim-engineer',
    foundation: {
      code: 'IT-CBE-F',
      role: 'BIM Engineer',
      tier: 'Foundation',
      audience: 'Entry-level engineers, 0–2 yrs',
      entryRequirement: 'Engineering Degree (Civil/Structural/MEP)',
      roleOutcome: 'Validate BIM geometry against design calculations, extract automated QTO, run model-based quantity verification.',
      tools: ['Revit', 'Navisworks', 'Excel BIM Link'],
      capstoneSummary: 'Model validation & quantity extraction audit report on hospital wing dataset.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    professional: {
      code: 'IT-CBE-P',
      role: 'BIM Engineer',
      tier: 'Professional',
      audience: 'Mid-level engineers, 2–5 yrs, moving into BIM-centric delivery',
      entryRequirement: '2+ yrs design/site engineering experience',
      roleOutcome: 'Own engineering model QA/QC, validate discipline design codes in BIM, author model health reports, execute 4D simulation.',
      tools: ['Revit', 'Navisworks Manage', 'Synchro 4D', 'Solibri'],
      capstoneSummary: 'Integrated engineering model audit, code compliance report & 4D construction sequence.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    advanced: {
      code: 'IT-CBE-A',
      role: 'BIM Engineer',
      tier: 'Advanced',
      audience: 'Mid-senior engineers preparing for coordination-track roles',
      entryRequirement: '4+ yrs engineering experience with active BIM integration',
      roleOutcome: 'Lead engineering discipline BIM coordination, validate structural/MEP interfaces, manage BEP technical compliance.',
      tools: ['Navisworks Manage', 'Solibri Enterprise', 'Synchro 4D', 'Revizto'],
      capstoneSummary: 'Multi-discipline engineering coordination package & structural deflection / MEP clearance review.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
  },
  {
    code: 'IT-CBC',
    roleName: 'BIM Coordinator / Specialist',
    shortCode: 'Coordinator',
    slug: 'bim-coordinator',
    foundation: {
      code: 'IT-CBC-F',
      role: 'BIM Coordinator / Specialist',
      tier: 'Foundation',
      audience: 'Mid-level professionals, 3–5 yrs, stepping into coordination',
      entryRequirement: '3+ yrs modeling or engineering experience',
      roleOutcome: 'Federate multi-discipline models, perform clash detection matrix execution, publish BCF issue registers.',
      tools: ['Navisworks Manage', 'Revizto', 'BIM Track / ACC'],
      capstoneSummary: 'Federated model setup & initial clash triage for 15-story hospitality block.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    professional: {
      code: 'IT-CBC-P',
      role: 'BIM Coordinator / Specialist',
      tier: 'Professional',
      audience: 'Mid-senior professionals and discipline leads, 5–8 yrs',
      entryRequirement: 'Active coordination role or IT-CBC-F certification',
      roleOutcome: 'Chair coordination meetings, triage 40,000 clashes to 400 real issues, manage CDE workflows, defend technical decisions.',
      tools: ['Navisworks Manage', 'Solibri', 'Revizto', 'AutoCAD Civil 3D'],
      capstoneSummary: 'Full airport terminal wing coordination defense before live expert panel.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    advanced: {
      code: 'IT-CBC-A',
      role: 'BIM Coordinator / Specialist',
      tier: 'Advanced',
      audience: 'Senior coordinators and multi-project specialists formalising federated-model leadership',
      entryRequirement: '6+ yrs experience, leading multi-discipline BIM coordination',
      roleOutcome: 'Lead complex multi-disciplinary federated model strategy, automate clash rules in Solibri, enforce ISO 19650 CDE protocols.',
      tools: ['Solibri Enterprise', 'Navisworks Manage', 'Revizto', 'Dynamo / Python'],
      capstoneSummary: 'Multi-package giga-project coordination strategy & ISO 19650 CDE information exchange audit.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
  },
  {
    code: 'IT-CBMgr',
    roleName: 'BIM Manager',
    shortCode: 'Manager',
    slug: 'bim-manager',
    foundation: {
      code: 'IT-CBMgr-F',
      role: 'BIM Manager',
      tier: 'Foundation',
      audience: 'Senior professionals and team leads, 6+ yrs, entering BIM management',
      entryRequirement: '5+ yrs in AEC project delivery',
      roleOutcome: 'Author BIM Execution Plans (BEP), respond to EIRs, set up CDE structures, establish project BIM standards.',
      tools: ['ISO 19650 Framework', 'ACC / BIM 360', 'Solibri'],
      capstoneSummary: 'Pre-appointment BEP & CDE Information Architecture for healthcare project.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    professional: {
      code: 'IT-CBMgr-P',
      role: 'BIM Manager',
      tier: 'Professional',
      audience: 'Coordinators stepping up to project or organisational BIM management',
      entryRequirement: 'Active coordinator or BIM lead experience',
      roleOutcome: 'Manage client EIR response, enforce ISO 19650 protocols, audit supply-chain capability, report delivery risk.',
      tools: ['ISO 19650-1/2', 'BIMcollab', 'Solibri Enterprise', 'Power BI'],
      capstoneSummary: 'Giga-project EIR response, master BEP & supply chain audit package.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
    advanced: {
      code: 'IT-CBMgr-A',
      role: 'BIM Manager',
      tier: 'Advanced',
      audience: 'Practising BIM managers formalising ISO 19650-aligned, advisory-grade practice',
      entryRequirement: '8+ yrs experience, current BIM Manager role',
      roleOutcome: 'Lead enterprise BIM strategy, define digital twin handover protocols, manage client advisory contracts, pass panel defense.',
      tools: ['ISO 19650-1/2/3/5', 'Enterprise CDEs', 'Custom QA Dashboards'],
      capstoneSummary: 'Advisory-grade Enterprise Digital Transformation & ISO 19650 Handover Framework.',
      nextIntake: '[Month] Intake (Capped at [Cohort size])',
    },
  },
];
