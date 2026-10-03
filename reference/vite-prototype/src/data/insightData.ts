export interface Article {
  slug: string;
  title: string;
  category: 'Field Notes' | 'Standards & Practice' | 'Technology' | 'Careers' | 'Market & Region';
  readTime: string;
  date: string;
  author: string;
  authorContext: string;
  excerpt: string;
  keyTakeaways: string[];
  contentHtml: string;
  relatedProgramSlug: string;
  relatedProgramWeek: string;
}

export const ARTICLES_DATA: Article[] = [
  {
    slug: 'reducing-40000-clashes-to-400',
    title: 'Reducing 40,000 clashes to 400 real issues: the clash matrix logic that made it possible',
    category: 'Field Notes',
    readTime: '7 min read',
    date: 'February 2026',
    author: 'Lead BIM Coordinator',
    authorContext: 'Lead Coordinator, aviation programmes, GCC, 11 years experience',
    excerpt: 'On a $1.3bn airport terminal package, raw automated clash detection generated forty thousand hits. Here is how we filtered out visual noise and isolated the 400 real issues that mattered.',
    keyTakeaways: [
      'Raw clash counts are vanity metrics that paralyze design teams.',
      'Group clashes by system hierarchy: structural clearance always precedes MEP routing.',
      'Setting hard clearance rules in Solibri eliminates 90% of soft-clash visual noise.',
      'Publish BCF issues with single-person accountability and mandatory SLAs.',
    ],
    contentHtml: `
      <p>When our team took over coordination for a major GCC terminal package, the initial Navisworks run produced 43,812 clashes. The consultant team was paralyzed. Meetings lasted three hours and resolved nothing because everyone argued over pipe insulation touching ceiling grid wires.</p>
      <h3>Step 1: Discard the Visual Noise</h3>
      <p>The first rule of real project coordination: <strong>never send a raw clash matrix to a discipline lead.</strong> 90% of automated clash hits are clearance overlaps, minor architectural offsets, or modeled insulation. We established a strict search-set rule tree in Solibri and Navisworks.</p>
      <h3>Step 2: Establish System Hierarchy</h3>
      <p>Structural elements hold priority zero. Gravity drainage holds priority one. Pressure pipes, HVAC ducts, and cable trays follow. By enforcing this priority in our matrix, we eliminated 35,000 conflicts in one afternoon.</p>
      <h3>Step 3: The 400 Real Decisions</h3>
      <p>The remaining 400 clashes represented hard structural penetrations, MEP riser clashes, and maintenance headroom violations. We packaged these into Revizto BCF topics with precise location coordinates and clear action owners.</p>
    `,
    relatedProgramSlug: 'bim-coordinator',
    relatedProgramWeek: 'This is what Week 6 of ITTA-CBC covers →',
  },
  {
    slug: 'iso-19650-eir-authoring-guide',
    title: 'Authoring an EIR that contractors actually read: ISO 19650 in practice',
    category: 'Standards & Practice',
    readTime: '9 min read',
    date: 'January 2026',
    author: 'Senior BIM Manager',
    authorContext: 'BIM Advisory Director, Giga-project developments, 14 years experience',
    excerpt: 'Most Exchange Information Requirements (EIR) are 150-page cut-and-paste documents that contractors ignore. Here is how to write an ISO 19650 EIR focused on Level of Information Need.',
    keyTakeaways: [
      'Stop specifying LOD 500 for everything; define precise LOIN milestone requirements.',
      'Structure CDE container naming rules in alignment with ISO 19650-2 National Annexes.',
      'Demand model-based deliverables tied directly to commercial stage payments.',
    ],
    contentHtml: `
      <p>If your EIR requires LOD 500 across all disciplines at schematic design, you have failed as a BIM Manager. Real project governance requires specifying Level of Information Need (LOIN) mapped to project decision points.</p>
      <h3>Deconstructing Client Information Requirements</h3>
      <p>Clients don't care about 3D geometry for its own sake. They care about handover data, spatial verification, and operational asset management (AIM). An effective EIR translates these client goals into unambiguous contractor deliverables.</p>
    `,
    relatedProgramSlug: 'bim-manager',
    relatedProgramWeek: 'This is what Week 3 of ITTA-CBMgr covers →',
  },
  {
    slug: 'synchro-4d-phasing-giga-projects',
    title: '4D Construction Scheduling in Synchro: Lessons from Saudi Giga-Destinations',
    category: 'Technology',
    readTime: '6 min read',
    date: 'February 2026',
    author: 'Senior BIM Engineer',
    authorContext: '4D Specialist, High-rise & resort infrastructure, 9 years experience',
    excerpt: 'How linking Primavera P6 schedules to 3D BIM components in Synchro 4D prevented tower crane logistics bottlenecks on a fast-track KSA project.',
    keyTakeaways: [
      'Visualizing 4D sequences exposes spatial-temporal site conflicts before site mobilization.',
      'Keep 4D model breakdown structures synchronized with WBS scheduling codes.',
      'Use 4D sequence animations to defend contractor delay claims during project reviews.',
    ],
    contentHtml: `
      <p>On fast-track GCC giga-projects, site logistics and crane coverage areas change weekly. A traditional Gantt chart cannot reveal that two tower crane sweeps overlap during concrete pour cycles on Level 24.</p>
      <h3>Connecting Primavera P6 to 3D Geometry</h3>
      <p>By establishing a standardized WBS parameter inside Revit and linking it via Synchro 4D, our site team identified 14 critical spatial overlaps two months before site mobilization.</p>
    `,
    relatedProgramSlug: 'bim-engineer',
    relatedProgramWeek: 'This is what Week 6 of ITTA-CBE covers →',
  },
];

export const NEWSLETTER_DATA = {
  name: "The Clash Report",
  positioning: "The friction points in AEC delivery, once a fortnight, from people on live projects.",
  segments: [
    { name: "The Clash", desc: "One real project failure mode from that fortnight, what it cost, and the specific technical workflow that prevents it." },
    { name: "Standard Practice", desc: "One ISO 19650, EIR/BEP or CDE clause deconstructed: what the standard says vs how it's actually applied on GCC packages." },
    { name: "Tooling", desc: "No vendor releases. One specific tool feature, script or automated check tested on real project data, with the results." },
    { name: "The Market", desc: "Regional procurement shifts, mandate updates and hiring data across KSA, UAE, Qatar and Kuwait." },
    { name: "From the Academy", desc: "One capstone deliverable breakdown, expert session insight or candidate portfolio highlight." },
  ],
  subscribeMicrocopy: "Fortnightly. No marketing fluff. Unsubscribe in one click.",
};
