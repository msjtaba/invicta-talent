export interface FacultyMember {
  id: string;
  roleTitle: string;
  projectType: string;
  region: string;
  experienceYears: number;
  expertiseSummary: string;
  teachingScope: string;
  panelRole: string;
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    roleTitle: 'Lead BIM Coordinator',
    projectType: 'Terminal Package, Aviation Programme',
    region: 'Saudi Arabia',
    experienceYears: 11,
    expertiseSummary: 'Federation and clash management across 30+ discipline models for major international airport expansions.',
    teachingScope: 'Teaches ITTA-CBC Weeks 2, 5, and 7',
    panelRole: 'Sits on CBC Certification Panels & Mock Interview Boards',
  },
  {
    id: 'fac-2',
    roleTitle: 'Senior BIM Manager',
    projectType: 'Giga-Destination Resort Development',
    region: 'Saudi Arabia',
    experienceYears: 14,
    expertiseSummary: 'Author of enterprise BEPs and ISO 19650 CDE governance for multi-billion dollar master plans.',
    teachingScope: 'Teaches ITTA-CBMgr Weeks 1, 3, and 6',
    panelRole: 'Chairs ITTA-CBMgr Strategic Certification Board',
  },
  {
    id: 'fac-3',
    roleTitle: 'Senior BIM Structural Engineer',
    projectType: 'High-Rise Commercial Towers & Infrastructure',
    region: 'UAE / Dubai',
    experienceYears: 9,
    expertiseSummary: 'Solibri automated code checking, structural deflection modeling, and model-based QTO validation.',
    teachingScope: 'Teaches ITTA-CBE Weeks 2, 4, and 8',
    panelRole: 'Sits on CBE Engineering Certification Panel',
  },
  {
    id: 'fac-4',
    roleTitle: 'Lead Production Modeler',
    projectType: 'Hospitality & Luxury Residential Packages',
    region: 'Saudi Arabia / UAE',
    experienceYears: 8,
    expertiseSummary: 'LOD 350-400 discipline modeling, parametric family creation, and zero-error shop drawing extractions.',
    teachingScope: 'Teaches ITTA-CBM Weeks 3, 6, and 9',
    panelRole: 'Runs ITTA-CBM Desk-Crits & Model Audits',
  },
  {
    id: 'fac-5',
    roleTitle: 'BIM Technical Specialist',
    projectType: 'Healthcare & Specialist Hospital Wings',
    region: 'Qatar / KSA',
    experienceYears: 10,
    expertiseSummary: 'MEP high-density coordination, headroom clearances, and 4D Synchro construction phasing.',
    teachingScope: 'Teaches ITTA-CBC Weeks 4 & 6, ITTA-CBE Week 6',
    panelRole: 'Sits on CBC & CBE Capstone Review Boards',
  },
];
