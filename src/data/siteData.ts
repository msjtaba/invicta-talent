export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Programs', href: '/programs' },
  { label: 'Tool Certificates', href: '/tool-certificates' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Insights', href: '/insights' },
  { label: 'For Employers', href: '/for-employers' },
];

export const PERSISTENT_CTA = {
  primary: { label: 'Find Your Track', href: '/find-your-track' },
  secondary: { label: 'Download Curriculum', href: '/admissions' },
  employer: { label: 'Request a Capability Audit', href: '/for-employers' },
  newsletter: { label: 'Subscribe to The Clash Report', href: '/newsletter' },
  contact: { label: 'Talk to Admissions', href: '/contact' },
};

export const ROTATING_SUPPORT_LINES = [
  'Not a course. A role you can perform.',
  'Twelve weeks. One real project. One job you can actually do.',
  'Design Intelligence. Construction Reality. Digital Enablement. — Now taught.',
  'The panel that certifies you is the panel that hires.',
];

export const TRUST_STRIP_ITEMS = [
  'Aviation',
  'Giga-destinations',
  'Hospitality',
  'Healthcare',
  'Towers',
  'Industrial',
  'Infrastructure',
];

export const TRUST_COMPLIANCE_TEXT = 
  'Curricula mapped to ISO 19650-1 and -2 · Every credential publicly verifiable · Training data anonymised and derived';

export const FOOTER_DATA = {
  col1: {
    title: 'Invicta-Talent',
    desc: 'Role-based BIM certification built on live GCC project work. Practitioners teach it, real deliverables prove it, and the panel that assesses you is the panel that hires for the role.',
  },
  col2: {
    title: 'Programs',
    links: [
      { label: 'Certified BIM Modeler', href: '/programs/bim-modeler' },
      { label: 'Certified BIM Engineer', href: '/programs/bim-engineer' },
      { label: 'Certified BIM Coordinator', href: '/programs/bim-coordinator' },
      { label: 'Certified BIM Manager', href: '/programs/bim-manager' },
      { label: 'Tool Certificates', href: '/tool-certificates' },
    ],
  },
  col3: {
    title: 'Academy',
    links: [
      { label: 'Faculty', href: '/faculty' },
      { label: 'Certification', href: '/certification' },
      { label: 'Verify a Credential', href: '/verify' },
      { label: 'For Employers', href: '/for-employers' },
      { label: 'Insights', href: '/insights' },
      { label: 'The Clash Report', href: '/newsletter' },
      { label: 'Admissions', href: '/admissions' },
    ],
  },
  col4: {
    title: 'Contact',
    email: 'admissions@invicta-talent.com',
    india: ['+91 72596 13084', '+91 97404 72216'],
    saudi: ['+966 53509 5453'],
    campus: '[Hyderabad campus address]',
  },
  bottom: {
    copyright: '© 2026 Invicta-Talent. All rights reserved.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Certification Policy', href: '/certification-policy' },
    ],
    disclaimer: 'All training datasets are anonymised and derived. No client-identifying information is used in teaching material.',
  },
};

export const GLOBAL_MICROCOPY = {
  firstContrast: "KNOWING THE SOFTWARE ISN'T THE SAME AS KNOWING THE WORK.",
  projectFlowHeadline: "THE DIFFERENCE IS THE WORK.",
  projectFlowSub: "You don't learn BIM so you can say you know BIM. You learn it so someone can hand you a package and trust you to deliver it.",
  builtBackwardsHeadline: "WE DON'T START WITH THE SOFTWARE.",
  builtBackwardsSub: "We start with the responsibility.",
  deliverablesHeadline: "WHAT YOU CAN ACTUALLY DELIVER TAKES YOU FURTHER.",
  rhythmHeadline: "THE RHYTHM",
  rhythmSub: "Continuous project simulation from Week 5 · Graded deliverable every Friday",
  week5Headline: "WEEK 5 — THE PROJECT STARTS.",
  fridayTestHeadline: "EVERY FRIDAY, SOMETHING HAS TO SURVIVE REVIEW.",
  facultyHeadline: "TAUGHT BY PEOPLE WHO WERE ON SITE THIS WEEK",
  outcomesHeadline: "YOU GRADUATE HAVING DONE THE JOB — NOT HAVING STUDIED IT.",
  portfolioHeadline: "THE CERTIFICATE SAYS YOU PASSED. THE WORK SHOWS WHAT YOU CAN DO.",
  certificationHeadline: "A CERTIFICATE THAT MEANS SOMETHING BECAUSE IT IS HARD TO GET.",
  toolCertificatesHeadline: "ONE TOOL. TWO TO SIX WEEKS. SAME STANDARD.",
  nextCohortHeadline: "THE NEXT COHORT STARTS [MONTH].",
  nextCohortSub: "Find your track, confirm your tier, and start building the deliverables your next role will expect from day one.",
  cookieNotice: "We use minimal analytics to see which pages help candidates decide. No ad tracking.",
  notFoundTitle: "This route doesn't resolve.",
  notFoundSub: "Like a broken link in a federated model — annoying, and fixable. Try Programs, Insights, or the track diagnostic.",
};
