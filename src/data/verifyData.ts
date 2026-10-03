export interface CredentialRecord {
  id: string;
  holderName: string;
  programCode: string;
  programTitle: string;
  tier: 'Foundation' | 'Professional' | 'Advanced';
  specialization: string;
  issuedDate: string;
  capstoneRef: string;
  status: 'Valid' | 'Revoked' | 'Expired';
  assessedBy: string;
  isoMapping: string;
}

export const DEMO_CREDENTIALS: Record<string, CredentialRecord> = {
  'IT-CBC-202601': {
    id: 'IT-CBC-202601',
    holderName: '[Holder Name]',
    programCode: 'IT-CBC',
    programTitle: 'Certified BIM Coordinator / Specialist',
    tier: 'Professional',
    specialization: 'Coordination — Aviation & High-Rise',
    issuedDate: 'January 2026',
    capstoneRef: 'CAP-CBC-88219',
    status: 'Valid',
    assessedBy: 'Expert Review Panel (GCC Aviation Practice)',
    isoMapping: 'Mapped to ISO 19650-1 and -2',
  },
  'IT-CBM-202602': {
    id: 'IT-CBM-202602',
    holderName: '[Holder Name]',
    programCode: 'IT-CBM',
    programTitle: 'Certified BIM Modeler',
    tier: 'Professional',
    specialization: 'Architecture & MEP Discipline Modeling',
    issuedDate: 'February 2026',
    capstoneRef: 'CAP-CBM-77402',
    status: 'Valid',
    assessedBy: 'Invicta-Tech QA Senior Panel',
    isoMapping: 'Mapped to ISO 19650-1 and -2',
  },
  'IT-CBE-202603': {
    id: 'IT-CBE-202603',
    holderName: '[Holder Name]',
    programCode: 'IT-CBE',
    programTitle: 'Certified BIM Engineer',
    tier: 'Advanced',
    specialization: 'Structural Audit & 4D Simulation',
    issuedDate: 'March 2026',
    capstoneRef: 'CAP-CBE-99104',
    status: 'Valid',
    assessedBy: 'Engineering Practice Review Board',
    isoMapping: 'Mapped to ISO 19650-1 and -2',
  },
  'IT-CBMGR-202604': {
    id: 'IT-CBMGR-202604',
    holderName: '[Holder Name]',
    programCode: 'IT-CBMgr',
    programTitle: 'Certified BIM Manager',
    tier: 'Advanced',
    specialization: 'ISO 19650 Governance & Strategic BEP',
    issuedDate: 'April 2026',
    capstoneRef: 'CAP-CBMGR-55301',
    status: 'Valid',
    assessedBy: 'Strategic Certification Board',
    isoMapping: 'Mapped to ISO 19650-1, -2, -3, and -5',
  },
};
