export interface ToolCertificate {
  id: string;
  name: string;
  streams?: string;
  duration: string;
  levels: string;
  focus: string;
  oneLiner: string;
  outcomes: string[];
  roleLink: { name: string; href: string };
}

export const TOOL_CERTIFICATES: ToolCertificate[] = [
  {
    id: 'revit',
    name: 'Revit',
    streams: 'ARC / STR / MEP streams',
    duration: '6 weeks',
    levels: 'Essentials / Professional / Advanced',
    focus: 'Modeling, documentation, families, worksharing, discipline systems',
    oneLiner: 'Revit — six weeks. Learn discipline modeling and sheet production the way high-rise teams execute it on site.',
    outcomes: [
      'Set up discipline project templates, shared coordinates, and levels/grids',
      'Produce parametric BIM families with custom shared parameters',
      'Generate construction sheet packages with dynamic schedules and sections',
      'Manage worksets and central model synchronization in multi-user environments',
      'Execute model health audits and clean zero-warning project files',
    ],
    roleLink: { name: 'Certified BIM Modeler (ITTA-CBM)', href: '/programs/bim-modeler' },
  },
  {
    id: 'autocad',
    name: 'AutoCAD',
    duration: '3 weeks',
    levels: 'Essentials / Professional',
    focus: 'Production drafting, detailing, reference management for BIM workflows',
    oneLiner: 'AutoCAD — three weeks. Master precision CAD drafting and Xref handling required for BIM coordination inputs.',
    outcomes: [
      'Manage complex External Reference (Xref) trees and coordinate origins',
      'Produce shop-drawing-grade details with standard layering standards',
      'Export and link 2D CAD files cleanly into Revit without corrupting BIM origin points',
      'Automate title block management and sheet set publishing',
    ],
    roleLink: { name: 'Certified BIM Modeler (ITTA-CBM)', href: '/programs/bim-modeler' },
  },
  {
    id: 'navisworks',
    name: 'Navisworks',
    duration: '3 weeks',
    levels: 'Professional',
    focus: 'Federation, clash detection, TimeLiner basics, quantification',
    oneLiner: 'Navisworks — three weeks. Learn model federation and clash triage from coordinators running GCC airport packages.',
    outcomes: [
      'Federate 20+ multi-discipline NWD/NWC files with exact survey coordinate alignment',
      'Build search sets and rule-based Clash Detective matrices',
      'Filter raw clashes to isolate actionable design issues and publish BCF reports',
      'Link project schedules to model elements for basic TimeLiner 4D playback',
    ],
    roleLink: { name: 'Certified BIM Coordinator (ITTA-CBC)', href: '/programs/bim-coordinator' },
  },
  {
    id: 'revizto',
    name: 'Revizto',
    duration: '2 weeks',
    levels: 'Professional',
    focus: 'Issue tracking, coordination workflows, dashboards, stakeholder collaboration',
    oneLiner: 'Revizto — two weeks. Master cloud issue tracking, clash sync, and site-to-office model review workflows.',
    outcomes: [
      'Track and assign coordination issues directly from 2D sheets and 3D models',
      'Manage Revizto issue dashboards, SLAs, and accountability matrices',
      'Sync live Revit/Navisworks issues with BCF connectors',
      'Chair cloud-based visual coordination sessions with non-BIM stakeholders',
    ],
    roleLink: { name: 'Certified BIM Coordinator (ITTA-CBC)', href: '/programs/bim-coordinator' },
  },
  {
    id: 'solibri',
    name: 'Solibri',
    duration: '3 weeks',
    levels: 'Professional',
    focus: 'Rule-based model checking, quality assurance, IFC validation, classification checks',
    oneLiner: 'Solibri — three weeks. Learn rule-based model checking the way a QA lead uses it at a data drop.',
    outcomes: [
      'Configure rule-based model quality checking rulesets for ISO 19650 compliance',
      'Perform automated building code and clearance checks (MEP headroom, door swings)',
      'Validate IFC data structures and COBie parameter completeness',
      'Generate executive model audit reports with visual issue classification',
    ],
    roleLink: { name: 'Certified BIM Engineer (ITTA-CBE)', href: '/programs/bim-engineer' },
  },
  {
    id: 'synchro',
    name: 'Synchro',
    duration: '4 weeks',
    levels: 'Professional',
    focus: '4D planning, model–schedule linking, sequence animation, progress tracking',
    oneLiner: 'Synchro — four weeks. Link Primavera P6 schedules to 3D BIM for constructability analysis.',
    outcomes: [
      'Import Primavera P6 / MS Project schedules and map to 3D BIM components',
      'Create 4D construction sequence animations for site logistics and claims',
      'Identify constructability bottlenecks and spatial-temporal site clashes',
      'Track site progress visually by comparing planned vs actual 4D status',
    ],
    roleLink: { name: 'Certified BIM Engineer (ITTA-CBE)', href: '/programs/bim-engineer' },
  },
  {
    id: 'rhino',
    name: 'Rhino',
    streams: '+ Grasshopper intro',
    duration: '4 weeks',
    levels: 'Professional',
    focus: 'Complex geometry, facade and feature modeling, Rhino–Revit interoperability',
    oneLiner: 'Rhino — four weeks. Model complex organic facades and integrate NURBS geometry into Revit via Rhino.Inside.',
    outcomes: [
      'Model complex NURBS surface geometry for stadium and tower facade packages',
      'Build basic Grasshopper parametric scripts for panelization and structural grids',
      'Transfer Rhino geometry cleanly into Revit using Rhino.Inside.Revit',
      'Extract double-curved panel fabrication drawings',
    ],
    roleLink: { name: 'Certified BIM Modeler (ITTA-CBM)', href: '/programs/bim-modeler' },
  },
  {
    id: 'tekla',
    name: 'Tekla Structures',
    duration: '6 weeks',
    levels: 'Professional / Advanced',
    focus: 'Structural steel and concrete detailing, fabrication-level modeling, drawing production',
    oneLiner: 'Tekla Structures — six weeks. Deliver LOD 400 structural steel and rebar fabrication packages.',
    outcomes: [
      'Model LOD 400 structural steel connections, gusset plates, and anchor bolts',
      'Detail 3D rebar cages for complex concrete foundations and core walls',
      'Generate CNC steel fabrication files (NC/DSTV) and GA/Assembly drawings',
      'Coordinate structural fabrication models with general MEP penetrations',
    ],
    roleLink: { name: 'Certified BIM Engineer (ITTA-CBE)', href: '/programs/bim-engineer' },
  },
];
