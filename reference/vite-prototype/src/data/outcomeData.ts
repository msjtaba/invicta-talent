export interface GraduateArtefact {
  id: string;
  programCode: string;
  tier: 'Foundation' | 'Professional' | 'Advanced';
  discipline: 'ARC' | 'STR' | 'MEP' | 'Coordination' | 'Management';
  title: string;
  brief: string;
  panelComment: string;
  artefactType: 'Drawing Sheet' | 'Clash Matrix' | 'QTO Audit Report' | 'BEP Extract' | '4D Phasing Schedule' | 'BCF Register';
  status: 'Accepted' | 'Passed with Distinction';
}

export const GRADUATE_ARTEFACTS: GraduateArtefact[] = [
  {
    id: 'art-1',
    programCode: 'ITTA-CBC',
    tier: 'Professional',
    discipline: 'Coordination',
    title: 'Airport Terminal Wing Federated Clash Matrix & Resolution Plan',
    brief: 'Triage 40,000 raw geometry clashes down to 200 actionable design issues across 30 discipline models.',
    panelComment: '"Demonstrated exceptional clarity in distinguishing hard MEP clearances from visual clutter. Meeting minutes reflect real leadership authority."',
    artefactType: 'Clash Matrix',
    status: 'Passed with Distinction',
  },
  {
    id: 'art-2',
    programCode: 'ITTA-CBM',
    tier: 'Professional',
    discipline: 'ARC',
    title: 'Hospitality Tower Facade LOD 350 Model & GA Sheet Package',
    brief: 'Produce LOD 350 architectural model and extract GA drawing sheets with custom shared parameter schedules.',
    panelComment: '"Drawing sheets were clean, zero overlapping annotations, worksets structured perfectly to project BEP standards."',
    artefactType: 'Drawing Sheet',
    status: 'Accepted',
  },
  {
    id: 'art-3',
    programCode: 'ITTA-CBE',
    tier: 'Professional',
    discipline: 'MEP',
    title: 'Hospital Wing MEP Audit & Model-Based QTO Verification',
    brief: 'Audit model geometry against design calculations and extract automated quantity take-offs.',
    panelComment: '"Identified two critical ductwork sizing errors that would have caused major site rework. QTO variance report was spot on."',
    artefactType: 'QTO Audit Report',
    status: 'Passed with Distinction',
  },
  {
    id: 'art-4',
    programCode: 'ITTA-CBMgr',
    tier: 'Advanced',
    discipline: 'Management',
    title: 'Giga-Destination Mixed-Use Resort ISO 19650 Master BEP',
    brief: 'Deconstruct client EIR and author pre/post-appointment BIM Execution Plan with CDE governance matrix.',
    panelComment: '"Advisory-grade BEP document. CDE container naming rules and access matrix are ready for immediate project deployment."',
    artefactType: 'BEP Extract',
    status: 'Passed with Distinction',
  },
  {
    id: 'art-5',
    programCode: 'ITTA-CBE',
    tier: 'Advanced',
    discipline: 'STR',
    title: 'Structural Steel Complex Connection LOD 400 Model & 4D Sequence',
    brief: 'Detail LOD 400 steel connections and map model to Primavera P6 schedule in Synchro 4D.',
    panelComment: '"Clean structural geometry, zero warnings in model, 4D simulation clearly communicated crane logistics bottleneck."',
    artefactType: '4D Phasing Schedule',
    status: 'Accepted',
  },
  {
    id: 'art-6',
    programCode: 'ITTA-CBC',
    tier: 'Advanced',
    discipline: 'Coordination',
    title: 'Multi-Package High-Rise BCF Issue Tracking & SLA Register',
    brief: 'Manage BCF cloud issue workflows and set up accountability SLAs across sub-consultants.',
    panelComment: '"Issue turnaround times were tracked rigorously. Redline annotations were precise and non-ambiguous."',
    artefactType: 'BCF Register',
    status: 'Accepted',
  },
];
