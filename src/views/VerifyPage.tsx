'use client';

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
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite min-h-[80vh] flex flex-col justify-center font-sans">
      <div className="max-w-3xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="eyebrow text-crimson">
            PUBLIC CREDENTIAL LOOKUP
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-graphite leading-[1.1]">
            Verify a Credential
          </h1>
          <p className="text-sm text-graphite/75 font-medium max-w-xl mx-auto">
            Every credential issued by Invicta-Talent carries a unique verification ID. Enter the ID below to confirm the credential, tier, specialisation, and capstone reference.
          </p>
        </div>

        {/* Verification Search Form */}
        <form onSubmit={handleVerify} className="p-8 border border-stone-light bg-white space-y-6 shadow-md rounded-md">
          <div className="space-y-2">
            <label htmlFor="verification-id" className="text-[13px] text-graphite font-bold uppercase tracking-[0.1em] block">
              VERIFICATION ID (format IT-XXX-000000)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Try IT-CBC-202601 or IT-CBM-202602"
                className="flex-1 h-12 bg-white border border-stone-light rounded-sm px-4 text-base text-graphite"
                id="verification-id"
                required
              />
              <Button type="submit" variant="primary" size="md">
                Verify Credential
              </Button>
            </div>
          </div>

          <div className="text-[13px] text-graphite/75">
            Demo codes for testing: <span className="text-crimson font-bold">IT-CBC-202601</span>, <span className="text-crimson font-bold">IT-CBM-202602</span>, <span className="text-crimson font-bold">IT-CBE-202603</span>
          </div>
        </form>

        {/* Search Results Display */}
        {searched && (
          result ? (
            <div className="p-8 border-2 border-crimson bg-white space-y-4 font-sans shadow-lg rounded-md">
              <div className="flex items-center gap-2 text-xs text-crimson font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 text-crimson" />
                <span>VALID CREDENTIAL</span>
              </div>

              <div className="font-display text-2xl text-graphite leading-[1.1]">
                {result.holderName} · {result.programCode}, {result.tier} Tier
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-graphite/75 border-t border-b border-stone-light py-4">
                <div>
                  <span className="text-[10px] text-crimson uppercase block font-bold">SPECIALISATION:</span>
                  <span className="text-graphite font-semibold">{result.specialization}</span>
                </div>
                <div>
                  <span className="text-[10px] text-crimson uppercase block font-bold">ISSUED DATE:</span>
                  <span className="text-graphite font-semibold">{result.issuedDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-crimson uppercase block font-bold">CAPSTONE REFERENCE:</span>
                  <span className="text-graphite font-semibold">{result.capstoneRef}</span>
                </div>
                <div>
                  <span className="text-[10px] text-crimson uppercase block font-bold">STATUS:</span>
                  <span className="text-crimson font-bold">{result.status}</span>
                </div>
              </div>

              <p className="text-xs italic text-graphite/75">
                Assessed by expert panel against Invicta-Tech QA standards. Curriculum mapped to ISO 19650-1 and -2.
              </p>
            </div>
          ) : (
            <div className="p-8 border border-crimson bg-white space-y-3 font-sans shadow-md rounded-md">
              <div className="flex items-center gap-2 text-xs text-crimson font-bold uppercase">
                <AlertCircle className="w-4 h-4 text-crimson" />
                <span>NO CREDENTIAL FOUND</span>
              </div>
              <p className="text-sm text-graphite">
                No credential found for that ID. Check the ID printed on the certificate, or contact us at{' '}
                <a href="mailto:verify@invicta-talent.com" className="text-crimson underline font-bold">
                  verify@invicta-talent.com
                </a>{' '}
                and we'll confirm directly.
              </p>
            </div>
          )
        )}

        {/* Employer Note */}
        <div className="p-6 border border-stone-light bg-ivory-warm text-xs text-graphite/75 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-md">
          <div>
            <span className="text-graphite block font-bold">HIRING FOR A BIM ROLE?</span>
            Unsure what to test in the interview? Our role competency framework lists the eleven responsibilities each credential covers.
          </div>
          <Button to="/for-employers" variant="secondary" size="sm" className="shrink-0">
            Download Framework
          </Button>
        </div>
      </div>
    </div>
  );
};
