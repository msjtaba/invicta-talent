import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, DiagnosticResult } from '@/data/diagnosticData';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

export const TrackDiagnosticPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const question = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (value: string) => {
    if (question.isMultiSelect) {
      const currentList = (answers[question.id] as string[]) || [];
      const updated = currentList.includes(value)
        ? currentList.filter((v) => v !== value)
        : [...currentList, value];
      setAnswers({ ...answers, [question.id]: updated });
    } else {
      setAnswers({ ...answers, [question.id]: value });
      if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
        setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
        }, 250);
      } else {
        calculateResult({ ...answers, [question.id]: value });
      }
    }
  };

  const handleNext = () => {
    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResult(answers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, string | string[]>) => {
    const exp = finalAnswers[2] as string;
    const task = finalAnswers[3] as string;
    const goal = finalAnswers[5] as string;

    if (exp === '0' || task === 'drafting') {
      if (goal === 'coordinator') {
        setResult({
          trackCode: 'ITTA-CBM',
          trackName: 'Certified BIM Modeler',
          tier: 'Professional',
          isNotYet: true,
          recommendationText:
            "With eight months of drafting experience, the Coordinator programme would put you in a room where you'd spend twelve weeks catching up rather than building. Do ITTA-CBM Professional first, work a year in production, then come back. We'd rather lose the enrolment than sell you a certificate you can't stand behind in an interview.",
          programSlug: 'bim-modeler',
          entryMet: 'Basic CAD / Revit exposure met for Modeler track.',
          gapToClose: 'Need 12+ months active model production before attempting coordination.',
        });
      } else {
        setResult({
          trackCode: 'ITTA-CBM-F',
          trackName: 'Certified BIM Modeler',
          tier: 'Foundation',
          isNotYet: false,
          recommendationText:
            "You meet the entry requirements for ITTA-CBM Foundation. You will build discipline models to LOD 300, extract shop drawings, and learn parameter discipline across twelve weeks.",
          programSlug: 'bim-modeler',
          entryMet: 'Engineering / Drafting diploma degree met.',
          gapToClose: 'Transitioning from basic drafting to structured BIM worksharing.',
        });
      }
    } else if (task === 'coordination' || goal === 'coordinator') {
      setResult({
        trackCode: 'ITTA-CBC',
        trackName: 'Certified BIM Coordinator / Specialist',
        tier: 'Professional',
        isNotYet: false,
        recommendationText:
          "You've run clash tests and resolved issues, but you haven't yet chaired a coordination meeting or owned a federation. That's the gap between where you are and the coordinator job you described — and it's exactly what Weeks 5 through 10 put you through. You meet the entry requirement (coordination exposure, package-level leadership). Next intake: [Month].",
        programSlug: 'bim-coordinator',
        entryMet: 'Active modeling/coordination exposure met.',
        gapToClose: 'Chairing live meetings, managing BCF SLAs & 30+ model federation.',
      });
    } else if (goal === 'manager' || task === 'standards') {
      setResult({
        trackCode: 'ITTA-CBMgr',
        trackName: 'Certified BIM Manager',
        tier: 'Advanced',
        isNotYet: false,
        recommendationText:
          "You have the project delivery background to step into ISO 19650-aligned BIM management. ITTA-CBMgr will equip you to author master BEPs, response EIRs, manage CDE security, and defend digital strategies before executive boards.",
        programSlug: 'bim-manager',
        entryMet: '5+ years AEC project delivery experience met.',
        gapToClose: 'ISO 19650 CDE governance & client EIR response authoring.',
      });
    } else {
      setResult({
        trackCode: 'ITTA-CBE',
        trackName: 'Certified BIM Engineer',
        tier: 'Professional',
        isNotYet: false,
        recommendationText:
          "Your background aligns with ITTA-CBE. You will learn automated Solibri model auditing, 4D Synchro construction sequencing, and model-based QTO verification.",
        programSlug: 'bim-engineer',
        entryMet: 'Engineering degree & project experience met.',
        gapToClose: 'Rule-based Solibri checking & 4D Primavera schedule linking.',
      });
    }
    setCompleted(true);
  };

  const resetDiagnostic = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
    setResult(null);
  };

  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] min-h-[85vh] flex flex-col justify-center font-sans">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {!completed && (
          <div className="space-y-4 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
              3-MINUTE TRACK DIAGNOSTIC
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717]">
              Three minutes. Then you'll know exactly which programme is yours.
            </h1>
            <p className="text-sm text-[#4A4235] max-w-2xl mx-auto font-medium">
              No counsellor call, no gated PDF, no sales script. Eight questions, then a named programme and tier, the entry requirement you meet, and the gap you'd need to close.
            </p>
          </div>
        )}

        {!completed ? (
          <div className="border border-[#171717]/20 bg-[#FFFDF9] p-8 space-y-8 shadow-md">
            <div className="flex items-center justify-between font-mono text-xs text-[#7F725F] border-b border-[#171717]/15 pb-4 font-semibold">
              <span>QUESTION {question.id.toString().padStart(2, '0')} / 08</span>
              <div className="w-48 bg-[#E8DDC8] h-2 overflow-hidden border border-[#171717]/20">
                <div
                  className="bg-[#7D2419] h-full transition-all duration-300"
                  style={{ width: `${(question.id / 8) * 100}%` }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#171717]">
                  {question.question}
                </h2>

                <div className="space-y-3">
                  {question.options.map((opt) => {
                    const isSelected = question.isMultiSelect
                      ? ((answers[question.id] as string[]) || []).includes(opt.value)
                      : answers[question.id] === opt.value;

                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelectOption(opt.value)}
                        className={`w-full text-left p-4 border text-sm transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#7D2419] text-[#E8DDC8] font-medium border-[#7D2419]'
                            : 'bg-[#F7F2E8] border-[#171717]/15 text-[#171717] hover:border-[#7D2419]'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#E8DDC8]" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {question.isMultiSelect && (
              <div className="pt-4 border-t border-[#171717]/15 flex justify-end">
                <Button onClick={handleNext} variant="primary" size="md">
                  Continue →
                </Button>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 border-2 border-[#7D2419] bg-[#FFFDF9] space-y-8 shadow-xl"
          >
            <div className="space-y-2 border-b border-[#171717]/15 pb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7D2419] font-bold uppercase tracking-widest">
                {result?.isNotYet ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-[#7D2419]" />
                    <span>HONEST ASSESSMENT RESULT</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#7D2419]" />
                    <span>RECOMMENDED TRACK</span>
                  </>
                )}
              </div>
              <h2 className="font-serif-editorial text-3xl md:text-5xl text-[#171717]">
                {result?.isNotYet ? (
                  "NOT YET — AND HERE'S THE SHORTER PATH."
                ) : (
                  `Your track: ${result?.trackCode}, ${result?.tier} tier.`
                )}
              </h2>
            </div>

            <p className="text-base text-[#171717] leading-relaxed">
              {result?.recommendationText}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F7F2E8] p-6 border border-[#171717]/15 font-mono text-xs">
              <div>
                <span className="text-[#4A4235] block uppercase text-[10px] font-bold">ENTRY REQUIREMENT MET</span>
                <span className="text-[#171717] font-semibold">{result?.entryMet}</span>
              </div>
              <div>
                <span className="text-[#7D2419] block uppercase text-[10px] font-bold">THE GAP THIS PROGRAMME CLOSES</span>
                <span className="text-[#171717] font-semibold">{result?.gapToClose}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#171717]/15">
              <Button to={`/programs/${result?.programSlug}`} variant="primary" size="lg">
                Apply for {result?.trackCode} →
              </Button>
              <Button to={`/programs/${result?.programSlug}`} variant="outline" size="lg" className="border-[#171717] text-[#171717]">
                See the full twelve weeks →
              </Button>
              <button
                onClick={resetDiagnostic}
                className="text-xs font-mono text-[#4A4235] hover:text-[#7D2419] font-bold flex items-center gap-1.5 ml-auto cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Diagnostic
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
