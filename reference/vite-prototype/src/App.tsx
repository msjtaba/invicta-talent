import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { TrackDiagnosticPage } from '@/pages/TrackDiagnosticPage';
import { ProgramsHubPage } from '@/pages/ProgramsHubPage';
import { ProgramDetailPage } from '@/pages/ProgramDetailPage';
import { ToolCertificatesPage } from '@/pages/ToolCertificatesPage';
import { FacultyPage } from '@/pages/FacultyPage';
import { OutcomesPage } from '@/pages/OutcomesPage';
import { CertificationPage } from '@/pages/CertificationPage';
import { VerifyPage } from '@/pages/VerifyPage';
import { EmployersPage } from '@/pages/EmployersPage';
import { AboutPage } from '@/pages/AboutPage';
import { AdmissionsPage } from '@/pages/AdmissionsPage';
import { ContactPage } from '@/pages/ContactPage';
import { InsightsHubPage } from '@/pages/InsightsHubPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ClashReportPage } from '@/pages/ClashReportPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-your-track" element={<TrackDiagnosticPage />} />
          <Route path="/programs" element={<ProgramsHubPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />
          <Route path="/tool-certificates" element={<ToolCertificatesPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/outcomes" element={<OutcomesPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/for-employers" element={<EmployersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsHubPage />} />
          <Route path="/insights/:slug" element={<ArticleDetailPage />} />
          <Route path="/newsletter" element={<ClashReportPage />} />
          <Route path="/clash-report" element={<ClashReportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
