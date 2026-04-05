import { FlaskConical, FileText, IdCard, User, Award, GraduationCap, Briefcase, BookOpen, CheckCircle, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import React from 'react';

export default function Profile() {
  return (
    <main className="pt-24 lg:pt-32 px-6 lg:px-12 max-w-screen-2xl mx-auto">
      {/* Profile Header */}
      <section className="mb-16 lg:mb-24 bg-surface-container-low rounded-3xl p-8 lg:p-16 relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-4xl">
            <div className="flex gap-4 mb-6">
              <span className="bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Medical Doctor & Researcher</span>
              <span className="bg-on-surface-variant/10 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Interest: Neurosurgery</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugHKlqJ89367W59pgBhNCQNdYK47f1K6l_0xaKK7gTeV84-MDpdZkaCbe8fGvTS55DFR13js1mBtltiIKskOe1CjtHiNd0QFBpNm6ZKxRgpkd9eWDSvThbO4xpVb1kRFf5xiFqwtSWngEYn29AyDpEL_CFZp-dfZQRpk5lwGLMn0MFKj7gXUpeY4PyMuOuGCx8PDigwu7i4o4HyBA43gi6I3H28byn9OZtJ5jQptW8CCZz9DPrqUY3hkDx-MsJEZA6qkNrEICznSg" 
                  alt="Dr. Bryan"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="font-headline text-5xl lg:text-7xl text-primary tracking-tight leading-tight">
                  Bryan Gervais de Liyis, MD
                </h1>
              </div>
            </div>
            <p className="text-on-surface-variant text-xl max-w-xl mb-10 leading-relaxed">
              Bridging clinical neuroscience through surgical precision and high-impact research. Dedicated to advancing neurosurgical outcomes worldwide.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-10">
              <StatCard label="Indexed Papers" value="57" sub="Scopus" />
              <StatCard label="Academic Impact" value="300+" sub="Citations" />
              <StatCard label="Quality Metric" value="9" sub="H-Index" />
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mr-2 self-center">Digital Identity</span>
              <SocialIcon
    icon={<IdCard size={16} />}
    label="ORCID"
    href="https://orcid.org/0000-0002-8272-754X"
/>
  <SocialIcon
    icon={<FlaskConical size={16} />}
    label="ResearchGate"
    href="https://www.researchgate.net/profile/Bryan-De-Liyis"
  />
  <SocialIcon
    icon={<FileText size={16} />}
    label="Scopus"
    href="https://www.scopus.com/authid/detail.uri?authorId=57451155500"
  />
  <SocialIcon
    icon={<User size={16} />}
    label="LinkedIn"
    href="https://www.linkedin.com/in/bryangervaisdeliyis/"
  />
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          {/* Achievements */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-3xl text-primary">Distinguished Achievements</h2>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Awards & Recognition</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <AchievementCard 
                icon={<Award className="text-secondary" />} 
                tag="MURI AWARD" 
                title="Most Scopus Publications Student" 
                desc="Achieved 36 Scopus-indexed publications during clinical clerkship, setting a national record for undergraduate medical research output in Indonesia."
              />
              <AchievementCard 
                icon={<Award className="text-secondary" />} 
                tag="INTERNATIONAL" 
                title="2nd Place Research Poster - INS/PIT BS" 
                desc="Recognized at the 29th Indonesian Neurosurgical Society Annual Meeting & 21st ASEAN CNS for outstanding study on High-Grade Glioma survival factors."
                dark
              />
              <AchievementCard 
                icon={<Award className="text-secondary" />} 
                tag="ORAL WINNER" 
                title="1st Place Oral Presentation - BLINC" 
                desc="Awarded for best presentation on endovascular treatment efficacy for subclavian steal syndrome at the Bali International Clinical Competition."
              />
              <div className="bg-surface-container-low p-6 rounded-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">Global Scientific Recognition</span>
                <div className="space-y-4">
                  <RecognitionItem title="1st Place Oral Presentation" sub="ICRAN Conference" tag="INTL" />
                  <RecognitionItem title="2nd Place Poster Presentation" sub="10th World Spine Congress" tag="INTL" />
                  <RecognitionItem title="1st Place Basic Science" sub="Brazilian International Congress of Medical Students" tag="INTL" />
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-3xl text-primary">Scientific Publications</h2>
              <a href="#" className="text-sm font-bold text-secondary flex items-center gap-1">Full Scopus Profile <ArrowUpRight size={16} /></a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/30 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    <th className="py-4 px-2">#</th>
                    <th className="py-4 px-2">Title & DOI</th>
                    <th className="py-4 px-2">Journal</th>
                    <th className="py-4 px-2">Index</th>
                    <th className="py-4 px-2">Year</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <PublicationRow 
                    num="01" 
                    title="Meta-Analysis of Post-Revascularization Stroke Risk in Moyamoya Disease" 
                    doi="10.1007/s00701-026-0001" 
                    journal="Neurosurgical Review" 
                    index="Q1" 
                    year="2026" 
                  />
                  <PublicationRow 
                    num="02" 
                    title="Deep Learning Architectures in Automatic Intracranial Aneurysm Detection" 
                    doi="10.1007/s00701-026-0002" 
                    journal="Neurosurgical Review" 
                    index="Q1" 
                    year="2026" 
                  />
                  <PublicationRow 
                    num="03" 
                    title="Subtonsillar vs Infrafloccular Approaches in Microvascular Decompression" 
                    doi="10.1097/ONS.00000000000001" 
                    journal="Operative Neurosurgery" 
                    index="Q2" 
                    year="2026" 
                  />
                </tbody>
              </table>
            </div>
            <p className="text-center text-[10px] text-on-surface-variant mt-6 italic">
              Comprehensive list contains 57+ entries. Showing most recent peer-reviewed publications.
            </p>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          {/* Academic Foundation */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm">
            <h3 className="font-headline text-xl text-primary mb-6">Academic Foundation</h3>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
              <EducationItem 
                degree="MEDICAL DOCTOR (MD)" 
                school="Universitas Udayana" 
                honors="Summa Cum Laude" 
                gpa="4.00 / 4.00" 
              />
              <EducationItem 
                degree="BACHELOR OF MEDICINE (S.KED)" 
                school="Universitas Udayana" 
                honors="Summa Cum Laude" 
                gpa="3.96 / 4.00" 
              />
            </div>
          </section>

          {/* Professional Scope */}
          <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm">
            <h3 className="font-headline text-xl text-primary mb-6">Professional Scope</h3>
            <div className="space-y-6">
              <ScopeItem 
                tag="LEADERSHIP ROLE" 
                title="Vice President, BEM FK UNUD & Co-Initiator of CIMSA FK UNUD" 
                desc="Led a three-year founding process for CIMSA FK UNUD to secure faculty approval and alignment with national frameworks, alongside strategic oversight for 3,000+ medical students."
              />
              <ScopeItem 
                tag="CLINICAL PRACTICE" 
                title="Kasih Ibu General Hospital" 
                desc="General Medical Practitioner focusing on inpatient care and emergency triage."
              />
              <ScopeItem 
                tag="RESEARCH & OPERATIONS" 
                title="Research Assistant, National Brain Center Hospital Mahar Mardjono" 
                desc="Responsibilities include protocol development, data collection, statistical analysis, and management of databases to ensure high-quality, publishable outcomes."
              />
              <ScopeItem 
                tag="ACADEMIC EDITORIAL" 
                title="Section Editor, NSMC Journal" 
                desc="Managing peer review cycles and editorial standards for neurosurgical submissions."
              />
            </div>
          </section>

          {/* Reviewer Activities */}
          <section className="bg-surface-container-low p-8 rounded-3xl">
            <h3 className="font-headline text-xl text-primary mb-6">Reviewer Activities</h3>
            <p className="text-xs text-on-surface-variant mb-6">Regular contributor to the academic integrity of 23 high-impact medical journals.</p>
            <div className="space-y-3">
              <ReviewerItem label="World Neurosurgery" />
              <ReviewerItem label="Neurosurgical Review" />
              <ReviewerItem label="PLoS ONE" />
              <div className="text-center pt-4">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">+20 INDEXED JOURNALS</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="my-24 bg-primary signature-gradient rounded-3xl p-12 lg:p-24 text-center text-white">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block opacity-70">PROFESSIONAL CONNECTIVITY</span>
        <h2 className="font-headline text-4xl lg:text-6xl mb-8">
          Let's Collaborate on the Future of Neurosurgery
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
          Available for specialized clinical consulting, academic peer-review, research partnerships, and global speaking engagements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
            Schedule Consultation
          </button>
          <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
            Send Inquiry
          </button>
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/10">
      <div className="flex justify-between items-start mb-2">
        <span className="text-3xl font-bold text-primary">{value}</span>
        <span className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest">{sub}</span>
      </div>
      <p className="text-[10px] font-medium text-on-surface-variant uppercase tracking-widest">{label}</p>
    </div>
  );
}

function SocialIcon({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant/30 rounded-lg text-primary hover:bg-white transition-all text-[10px] font-bold">
      {icon} {label}
    </a>
  );
}

function AchievementCard({ icon, tag, title, desc, dark = false }: { icon: React.ReactNode, tag: string, title: string, desc: string, dark?: boolean }) {
  return (
    <div className={`${dark ? 'bg-primary text-white' : 'bg-white text-primary'} p-8 rounded-2xl border border-outline-variant/10 shadow-sm`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-full ${dark ? 'bg-white/10' : 'bg-surface-container-low'} flex items-center justify-center`}>
          {icon}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-white/60' : 'text-on-surface-variant'}`}>{tag}</span>
      </div>
      <h3 className="font-headline text-xl mb-4">{title}</h3>
      <p className={`text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-on-surface-variant'}`}>{desc}</p>
    </div>
  );
}

function RecognitionItem({ title, sub, tag }: { title: string, sub: string, tag: string }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="text-xs font-bold text-primary">{title}</h4>
        <p className="text-[10px] text-on-surface-variant">{sub}</p>
      </div>
      <span className="bg-secondary/10 text-secondary text-[8px] font-bold px-2 py-0.5 rounded">{tag}</span>
    </div>
  );
}

function PublicationRow({ num, title, doi, journal, index, year }: { num: string, title: string, doi: string, journal: string, index: string, year: string }) {
  return (
    <tr className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
      <td className="py-6 px-2 text-on-surface-variant font-medium">{num}</td>
      <td className="py-6 px-2 max-w-xs">
        <p className="font-bold text-primary mb-1">{title}</p>
        <a href={`https://doi.org/${doi}`} className="text-[10px] text-secondary flex items-center gap-1">
          <IdCard size={10} /> {doi}
        </a>
      </td>
      <td className="py-6 px-2 italic text-on-surface-variant">{journal}</td>
      <td className="py-6 px-2">
        <span className="bg-tertiary/10 text-tertiary text-[10px] font-bold px-2 py-0.5 rounded">{index}</span>
      </td>
      <td className="py-6 px-2 font-medium text-on-surface-variant">{year}</td>
    </tr>
  );
}

function EducationItem({ degree, school, honors, gpa }: { degree: string, school: string, honors: string, gpa: string }) {
  return (
    <div className="pl-8 relative">
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest z-10"></div>
      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 block">{degree}</span>
      <h4 className="font-bold text-primary mb-1">{school}</h4>
      <div className="flex gap-3 text-[10px] font-medium text-on-surface-variant">
        <span>{honors}</span>
        <span className="text-secondary">•</span>
        <span>GPA {gpa}</span>
      </div>
    </div>
  );
}

function ScopeItem({ tag, title, desc }: { tag: string, title: string, desc: string }) {
  return (
    <div>
      <span className="text-[8px] font-bold text-secondary uppercase tracking-widest mb-1 block">{tag}</span>
      <h4 className="font-bold text-primary text-sm mb-2">{title}</h4>
      <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
    </div>
  );
}

function ReviewerItem({ label }: { label: string }) {
  return (
    <div className="bg-white p-3 rounded-xl border border-outline-variant/10 flex items-center gap-3">
      <CheckCircle className="text-secondary" size={16} />
      <span className="text-xs font-bold text-primary">{label}</span>
    </div>
  );
}
