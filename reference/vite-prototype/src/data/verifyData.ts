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
  'ITTA-CBC-202601': {
    id: 'ITTA-CBC-202601',
    holderName: '[Holder Name]',
    programCode: 'ITTA-CBC',
    programTitle: 'Certified BIM Coordinator / Specialist',
    tier: 'Professional',
    specialization: 'Coordination — Aviation & High-Rise',
    issuedDate: 'January 2026',
    capstoneRef: 'CAP-CBC-88219',
    status: 'Valid',
    assessedBy: 'Expert Review Panel (GCC Aviation Practice)',
    isoMapping: 'Mapped to ISO 19650-1 and -2',
  },
  'ITTA-CBM-202602': {
    id: 'ITTA-CBM-202602',
    holderName: '[Holder Name]',
    programCode: 'ITTA-CBM',
    programTitle: 'Certified BIM Modeler',
    tier: 'Professional',
    specialization: 'Architecture & MEP Discipline Modeling',
    issuedDate: 'February 2026',
    capstoneRef: 'CAP-CBM-77402',
    status: 'Valid',
    assessedBy: 'Invicta-Tech QA Senior Panel',
    isoMapping: 'Mapped to ISO 19650-1 and -2',
  },
  'ITTA-CBE-202603': {
    id: 'ITTA-CBE-202603',
    holderName: '[Holder Name]',
    programCode: 'ITTA-CBE',
    programTitle: 'Certified BIM Engineer',
    tier: 'Advanced',
    specialization: 'Structural Audit & 4D Simulation',
    issuedDate: 'March 2026',
    capstoneRef: 'CAP-CBE-99104',
    status: 'Valid',
    assessedBy: 'Engineering Practice Review Board',
    isoMapping: 'Mapped to ISO 19650-1 and -2',
  },
  'ITTA-CBMGR-202604': {
    id: 'ITTA-CBMGR-202604',
    holderName: '[Holder Name]',
    programCode: 'ITTA-CBMgr',
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
