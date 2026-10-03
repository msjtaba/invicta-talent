import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROGRAMS_DATA } from '@/data/programData';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, FileText } from 'lucide-react';

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? PROGRAMS_DATA[slug] : undefined;

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="py-12 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16 font-sans">
      <div className="max-w-[1536px] mx-auto space-y-16">
        {/* Breadcrumb */}
        <div className="text-xs font-mono text-[#4A4235] flex items-center gap-2 font-semibold">
          <Link to="/programs" className="hover:text-[#7D2419]">PROGRAMS</Link>
          <span>/</span>
          <span className="text-[#7D2419] font-bold">{program.code}</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#171717]/15 pb-12">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
              {program.eyebrow}
            </span>

            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
              {program.h1}
            </h1>

            <p className="text-base sm:text-lg text-[#3D352A] font-sans leading-relaxed font-medium">
              {program.sub}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button to="/find-your-track" variant="primary" size="lg">
                Apply for {program.code} →
              </Button>
              <Button to="/admissions" variant="outline" size="lg" className="border-[#171717] text-[#171717]">
                Download Curriculum PDF
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 border border-[#171717]/20 bg-[#FFFDF9] font-mono text-xs space-y-4 shadow-sm">
            <div className="text-[#7D2419] font-bold uppercase tracking-wider">TRACK AT A GLANCE</div>
            <div className="space-y-2 text-[#4A4235]">
              <div className="flex justify-between border-b border-[#171717]/10 pb-1">
                <span>DURATION:</span>
                <span className="text-[#171717] font-bold">12 WEEKS</span>
              </div>
              <div className="flex justify-between border-b border-[#171717]/10 pb-1">
                <span>EXPERT SESSIONS:</span>
                <span className="text-[#171717] font-bold">2 SESSIONS / WEEK</span>
              </div>
              <div className="flex justify-between border-b border-[#171717]/10 pb-1">
                <span>LAB DRILLS:</span>
                <span className="text-[#171717] font-bold">5 DAYS / WEEK</span>
              </div>
              <div className="flex justify-between border-b border-[#171717]/10 pb-1">
                <span>DELIVERABLES:</span>
                <span className="text-[#171717] font-bold">10 GRADED FRIDAYS</span>
              </div>
              <div className="flex justify-between">
                <span>PASS MARK:</span>
                <span className="text-[#7D2419] font-bold">70% OVERALL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who it's for */}
        <div className="space-y-6">
          <h2 className="font-serif-editorial text-3xl text-[#171717]">Who it's for</h2>
          <div className="border border-[#171717]/15 bg-[#FFFDF9] overflow-x-auto shadow-sm">
            <table className="w-full text-left font-sans text-xs">
              <thead className="bg-[#DFCFA8]/50 font-mono text-[#7D2419] font-bold uppercase border-b border-[#171717]/15">
                <tr>
                  <th className="p-4 border-r border-[#171717]/10">Tier</th>
                  <th className="p-4 border-r border-[#171717]/10">Audience</th>
                  <th className="p-4">Entry Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#171717]/10 text-[#171717]">
                {program.whoItIsFor.map((item) => (
                  <tr key={item.tier} className="hover:bg-[#F7F2E8]">
                    <td className="p-4 font-mono font-bold text-[#7D2419] border-r border-[#171717]/10">{item.tierName} ({item.tier})</td>
                    <td className="p-4 border-r border-[#171717]/10">{item.audience}</td>
                    <td className="p-4">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* The job you'll be able to do */}
        <div className="space-y-6">
          <h2 className="font-serif-editorial text-3xl text-[#171717]">The job you'll be able to do</h2>
          <p className="text-xs font-mono text-[#4A4235] font-semibold">On the Monday after graduation, you will be able to perform these responsibilities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.jobOutcomes.map((outcome, i) => (
              <div key={i} className="p-5 border border-[#171717]/15 bg-[#FFFDF9] flex items-start gap-3 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#7D2419] shrink-0 mt-0.5" />
                <span className="text-xs text-[#171717] font-sans leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Twelve Weeks Schedule Tables */}
        <div className="space-y-8">
          <h2 className="font-serif-editorial text-3xl text-[#171717]">Twelve weeks breakdown</h2>

          {/* Month 1 */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#7D2419] font-bold uppercase tracking-wider">MONTH 1 — FOUNDATIONS AND TOOL MASTERY</div>
            <div className="border border-[#171717]/15 bg-[#FFFDF9] overflow-x-auto shadow-sm">
              <table className="w-full text-left font-sans text-xs">
                <thead className="bg-[#DFCFA8]/50 font-mono text-[#171717] font-bold border-b border-[#171717]/15">
                  <tr>
                    <th className="p-4 w-20 border-r border-[#171717]/10">Week</th>
                    <th className="p-4 border-r border-[#171717]/10">You cover</th>
                    <th className="p-4">Expert sessions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#171717]/10 text-[#171717]">
                  {program.schedule.month1.map((w) => (
                    <tr key={w.week} className="hover:bg-[#F7F2E8]">
                      <td className="p-4 font-mono font-bold text-[#7D2419] border-r border-[#171717]/10">Week {w.week}</td>
                      <td className="p-4 border-r border-[#171717]/10">{w.youCover}</td>
                      <td className="p-4 text-[#4A4235] italic">{w.expertSessions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Month 2 */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#7D2419] font-bold uppercase tracking-wider">MONTH 2 — PRODUCTION WORKFLOWS ON REAL PROJECTS</div>
            <div className="border border-[#171717]/15 bg-[#FFFDF9] overflow-x-auto shadow-sm">
              <table className="w-full text-left font-sans text-xs">
                <thead className="bg-[#DFCFA8]/50 font-mono text-[#171717] font-bold border-b border-[#171717]/15">
                  <tr>
                    <th className="p-4 w-20 border-r border-[#171717]/10">Week</th>
                    <th className="p-4 border-r border-[#171717]/10">You cover</th>
                    <th className="p-4">Expert sessions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#171717]/10 text-[#171717]">
                  {program.schedule.month2.map((w) => (
                    <tr key={w.week} className="hover:bg-[#F7F2E8]">
                      <td className="p-4 font-mono font-bold text-[#7D2419] border-r border-[#171717]/10">Week {w.week}</td>
                      <td className="p-4 border-r border-[#171717]/10">{w.youCover}</td>
                      <td className="p-4 text-[#4A4235] italic">{w.expertSessions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Month 3 */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#7D2419] font-bold uppercase tracking-wider">MONTH 3 — CAPSTONE SIMULATION AND CERTIFICATION</div>
            <div className="border border-[#171717]/15 bg-[#FFFDF9] overflow-x-auto shadow-sm">
              <table className="w-full text-left font-sans text-xs">
                <thead className="bg-[#DFCFA8]/50 font-mono text-[#171717] font-bold border-b border-[#171717]/15">
                  <tr>
                    <th className="p-4 w-20 border-r border-[#171717]/10">Week</th>
                    <th className="p-4 border-r border-[#171717]/10">You cover</th>
                    <th className="p-4">Expert sessions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#171717]/10 text-[#171717]">
                  {program.schedule.month3.map((w) => (
                    <tr key={w.week} className="hover:bg-[#F7F2E8]">
                      <td className="p-4 font-mono font-bold text-[#7D2419] border-r border-[#171717]/10">Week {w.week}</td>
                      <td className="p-4 border-r border-[#171717]/10">{w.youCover}</td>
                      <td className="p-4 text-[#4A4235] italic">{w.expertSessions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Capstone Brief */}
        <div className="p-8 border-2 border-[#7D2419] bg-[#FFFDF9] space-y-6 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7D2419] uppercase font-bold">
            <FileText className="w-4 h-4" />
            <span>CAPSTONE PROJECT BRIEF</span>
          </div>

          <h3 className="font-serif-editorial text-3xl text-[#171717]">{program.capstone.title}</h3>
          <p className="text-sm text-[#3D352A] font-sans leading-relaxed">{program.capstone.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs border-t border-[#171717]/15 pt-4">
            <div>
              <span className="text-[#7D2419] font-bold block text-[10px]">BRIEF:</span>
              <span className="text-[#171717]">{program.capstone.brief}</span>
            </div>
            <div>
              <span className="text-[#7D2419] font-bold block text-[10px]">CONSTRAINTS:</span>
              <span className="text-[#171717]">{program.capstone.constraints}</span>
            </div>
            <div>
              <span className="text-[#7D2419] font-bold block text-[10px]">RESPONSIBILITY:</span>
              <span className="text-[#171717]">{program.capstone.responsibility}</span>
            </div>
            <div>
              <span className="text-[#7D2419] font-bold block text-[10px]">DELIVERABLES:</span>
              <span className="text-[#171717]">{program.capstone.deliverables.join(' · ')}</span>
            </div>
          </div>
        </div>

        {/* Tools Covered & Apply CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[#171717]/15">
          <div className="space-y-1 font-mono text-xs">
            <span className="text-[#4A4235] font-bold uppercase">TOOLS EXAMINED:</span>
            <div className="text-sm text-[#171717] font-bold">{program.tools.join(' · ')}</div>
          </div>
          <Button to="/find-your-track" variant="primary" size="lg">
            Apply for {program.code} Intake →
          </Button>
        </div>
      </div>
    </div>
  );
};
