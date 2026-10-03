import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FirstContrastSection } from '@/components/home/FirstContrastSection';
import { BuiltBackwardsSection } from '@/components/home/BuiltBackwardsSection';
import { RoleMatrixSection } from '@/components/home/RoleMatrixSection';
import { PrimaryDiagnosticCTA } from '@/components/home/PrimaryDiagnosticCTA';
import { DeliverableGallery } from '@/components/home/DeliverableGallery';
import { OutcomesSection } from '@/components/home/OutcomesSection';
import { CertificationSection } from '@/components/home/CertificationSection';
import { ToolCertificatesSection } from '@/components/home/ToolCertificatesSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <FirstContrastSection />
      <BuiltBackwardsSection />
      <RoleMatrixSection />
      <PrimaryDiagnosticCTA />
      <DeliverableGallery />
      <OutcomesSection />
      <CertificationSection />
      <ToolCertificatesSection />
      <FinalCTASection />
    </div>
  );
};
