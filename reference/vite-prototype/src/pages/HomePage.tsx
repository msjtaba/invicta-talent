import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FirstContrastSection } from '@/components/home/FirstContrastSection';
import { ProjectFlowSection } from '@/components/home/ProjectFlowSection';
import { BuiltBackwardsSection } from '@/components/home/BuiltBackwardsSection';
import { ThreePrinciplesSection } from '@/components/home/ThreePrinciplesSection';
import { DeliverableGallery } from '@/components/home/DeliverableGallery';
import { RoleMatrixSection } from '@/components/home/RoleMatrixSection';
import { PrimaryDiagnosticCTA } from '@/components/home/PrimaryDiagnosticCTA';
import { RhythmSection } from '@/components/home/RhythmSection';
import { Week5Transition } from '@/components/home/Week5Transition';
import { FacultySection } from '@/components/home/FacultySection';
import { OutcomesSection } from '@/components/home/OutcomesSection';
import { CertificationSection } from '@/components/home/CertificationSection';
import { ToolCertificatesSection } from '@/components/home/ToolCertificatesSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <FirstContrastSection />
      <ProjectFlowSection />
      <BuiltBackwardsSection />
      <ThreePrinciplesSection />
      <DeliverableGallery />
      <RoleMatrixSection />
      <PrimaryDiagnosticCTA />
      <RhythmSection />
      <Week5Transition />
      <FacultySection />
      <OutcomesSection />
      <CertificationSection />
      <ToolCertificatesSection />
      <FinalCTASection />
    </div>
  );
};
