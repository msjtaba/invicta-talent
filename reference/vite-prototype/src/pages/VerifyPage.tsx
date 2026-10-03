import React, { useState } from 'react';
import { DEMO_CREDENTIALS, CredentialRecord } from '@/data/verifyData';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const VerifyPage: React.FC = () => {
  const [searchId, setSearchId] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<CredentialRecord | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = searchId.trim().toUpperCase();
    const found = DEMO_CREDENTIALS[cleaned] || null;
    setResult(found);
    setSearched(true);
  };

  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] min-h-[80vh] flex flex-col justify-center font-sans">
      <div className="max-w-3xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            PUBLIC CREDENTIAL LOOKUP
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717]">
            Verify a Credential
          </h1>
          <p className="text-sm text-[#4A4235] font-medium max-w-xl mx-auto">
            Every credential issued by Invicta-Tech Talent Academy carries a unique verification ID. Enter the ID below to confirm the credential, tier, specialisation, and capstone reference.
          </p>
        </div>

        {/* Verification Search Form */}
        <form onSubmit={handleVerify} className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 shadow-md">
          <div className="space-y-2">
            <label className="text-xs font-mono text-[#7D2419] font-bold uppercase block">
              VERIFICATION ID (format ITTA-XXX-000000)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Try ITTA-CBC-202601 or ITTA-CBM-202602"
                className="flex-1 bg-[#F7F2E8] border border-[#171717]/20 px-4 py-3 text-sm text-[#171717] font-mono focus:outline-none focus:border-[#7D2419]"
                required
              />
              <Button type="submit" variant="primary" size="md">
                Verify Credential
              </Button>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#4A4235]">
            Demo codes for testing: <span className="text-[#7D2419] font-bold">ITTA-CBC-202601</span>, <span className="text-[#7D2419] font-bold">ITTA-CBM-202602</span>, <span className="text-[#7D2419] font-bold">ITTA-CBE-202603</span>
          </div>
        </form>

        {/* Search Results Display */}
        {searched && (
          result ? (
            <div className="p-8 border-2 border-[#7D2419] bg-[#FFFDF9] space-y-4 font-sans shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7D2419] font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 text-[#7D2419]" />
                <span>VALID CREDENTIAL</span>
              </div>

              <div className="font-serif-editorial text-2xl text-[#171717]">
                {result.holderName} · {result.programCode}, {result.tier} Tier
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#4A4235] border-t border-b border-[#171717]/15 py-4">
                <div>
                  <span className="text-[10px] text-[#7D2419] uppercase block font-bold">SPECIALISATION:</span>
                  <span className="text-[#171717] font-semibold">{result.specialization}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7D2419] uppercase block font-bold">ISSUED DATE:</span>
                  <span className="text-[#171717] font-semibold">{result.issuedDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7D2419] uppercase block font-bold">CAPSTONE REFERENCE:</span>
                  <span className="text-[#171717] font-semibold">{result.capstoneRef}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7D2419] uppercase block font-bold">STATUS:</span>
                  <span className="text-[#7D2419] font-bold">{result.status}</span>
                </div>
              </div>

              <p className="text-xs italic text-[#4A4235] font-mono">
                Assessed by expert panel against Invicta-Tech QA standards. Curriculum mapped to ISO 19650-1 and -2.
              </p>
            </div>
          ) : (
            <div className="p-8 border border-[#7D2419] bg-[#FFFDF9] space-y-3 font-sans shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7D2419] font-bold uppercase">
                <AlertCircle className="w-4 h-4 text-[#7D2419]" />
                <span>NO CREDENTIAL FOUND</span>
              </div>
              <p className="text-sm text-[#171717]">
                No credential found for that ID. Check the ID printed on the certificate, or contact us at{' '}
                <a href="mailto:verify@invicta-talent.com" className="text-[#7D2419] underline font-mono font-bold">
                  verify@invicta-talent.com
                </a>{' '}
                and we'll confirm directly.
              </p>
            </div>
          )
        )}

        {/* Employer Note */}
        <div className="p-6 border border-[#171717]/15 bg-[#F7F2E8] text-xs font-mono text-[#4A4235] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-[#171717] block font-bold">HIRING FOR A BIM ROLE?</span>
            Unsure what to test in the interview? Our role competency framework lists the eleven responsibilities each credential covers.
          </div>
          <Button to="/for-employers" variant="outline" size="sm" className="shrink-0 border-[#171717] text-[#171717]">
            Download Framework →
          </Button>
        </div>
      </div>
    </div>
  );
};
