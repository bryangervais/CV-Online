import { Mail, MessageCircle, MapPin, FlaskConical, FileText, IdCard, User, ArrowRight, CheckCircle, CalendarX, Clock } from "lucide-react";
import { motion } from "motion/react";
import React from 'react';

export default function Home() {
  return (
    <main className="pt-24 lg:pt-32 px-6 lg:px-12 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 lg:mb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-5xl lg:text-7xl text-primary tracking-tight leading-tight mb-8"
            >
              Academic Focus.<br />Educational Excellence.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant text-xl max-w-xl mb-10 leading-relaxed"
            >
              Elevating clinical research and medical education through professional mentorship and scientific rigor. Led by Dr. Bryan, based in Denpasar, Bali.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <SocialLink icon={<FlaskConical size={18} />} label="ResearchGate" href="https://www.researchgate.net/profile/Bryan-De-Liyis" />
              <SocialLink icon={<FileText size={18} />} label="Scopus" href="https://www.scopus.com/authid/detail.uri?authorId=57451155500" />
              <SocialLink icon={<IdCard size={18} />} label="ORCID" href="https://orcid.org/0000-0002-8272-754X" />
              <SocialLink icon={<User size={18} />} label="LinkedIn" href="https://www.linkedin.com/in/bryangervaisdeliyis/" />
            </motion.div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative max-w-[320px] ml-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugHKlqJ89367W59pgBhNCQNdYK47f1K6l_0xaKK7gTeV84-MDpdZkaCbe8fGvTS55DFR13js1mBtltiIKskOe1CjtHiNd0QFBpNm6ZKxRgpkd9eWDSvThbO4xpVb1kRFf5xiFqwtSWngEYn29AyDpEL_CFZp-dfZQRpk5lwGLMn0MFKj7gXUpeY4PyMuOuGCx8PDigwu7i4o4HyBA43gi6I3H28byn9OZtJ5jQptW8CCZz9DPrqUY3hkDx-MsJEZA6qkNrEICznSg" 
                  alt="Dr. Bryan"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant/10 max-w-[200px] z-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-secondary" size={20} />
                  <span className="font-semibold text-primary">Location</span>
                </div>
                <p className="text-xs text-on-surface-variant">Denpasar, Bali. Worldwide digital consultations available.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16 lg:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-medium text-xs uppercase tracking-widest text-secondary font-bold block mb-2">Academic Offerings</span>
            <h2 className="font-headline text-4xl text-primary">Medical & Research Services</h2>
          </div>
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium text-secondary">Accepting New Tutoring Slots</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-primary signature-gradient p-8 rounded-2xl text-white flex flex-col justify-between group cursor-default">
            <div>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full mb-6 inline-block">Core Expertise</span>
              <h3 className="font-headline text-3xl mb-4">Scientific Writing & Publication Consultation</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Comprehensive guidance on manuscript preparation, statistical analysis verification, and journal selection to maximize publication success in high-impact medical journals.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium group-hover:gap-6 transition-all duration-300">
              View Portfolio <ArrowRight size={18} />
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <span className="bg-secondary-container text-on-secondary-container text-xs px-3 py-1 rounded-full mb-6 inline-block">Featured Service</span>
            <h3 className="text-xl font-semibold text-primary mb-4">Medical Education Tutoring</h3>
            <p className="text-on-surface-variant mb-6">
              Personalized academic support for medical students, focusing on clinical reasoning and foundational sciences.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-on-surface">
                <CheckCircle className="text-secondary" size={16} /> Pre-Clinical and OSCE Mentorship
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface">
                <CheckCircle className="text-secondary" size={16} /> Clinical Skills Mentorship
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 bg-surface-container-low p-6 rounded-2xl flex items-center justify-between border-l-4 border-error/40">
            <div className="flex items-center gap-4">
              <CalendarX className="text-error" size={24} />
              <div>
                <p className="font-semibold text-primary">General Medical Consultation</p>
                <p className="text-sm text-on-surface-variant">Clinical practice is currently unavailable</p>
              </div>
            </div>
            <span className="bg-error-container text-on-error-container px-4 py-1 rounded-full text-xs font-bold">EXPECTED TBA 2027</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16 lg:mb-24" id="contact">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm">
            <h3 className="font-headline text-3xl text-primary mb-8">Service Request</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-3" placeholder="Dr. Jane Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email Address</label>
                  <input className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-3" placeholder="jane@academic.edu" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Service Selection</label>
                <select className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-3">
                  <option>Publication Consultation</option>
                  <option>Medical Tutoring</option>
                  <option>Research Collaboration</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Inquiry Details</label>
                <textarea className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-3" placeholder="Please describe your requirements..." rows={4}></textarea>
              </div>
              <button className="w-full signature-gradient text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all active:scale-[0.98]" type="submit">Submit Inquiry</button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-medium text-xs uppercase tracking-widest text-secondary font-bold mb-4">Get in Touch</span>
            <h3 className="font-headline text-4xl text-primary mb-8">Direct Channels</h3>
            <p className="text-on-surface-variant text-lg mb-12">
              For urgent academic matters or established partners, please use the direct contact methods below.
            </p>
            <div className="space-y-8">
              <ContactItem icon={<Mail size={24} />} title="Email" value="bgliyis@gmail.com" href="mailto:bgliyis@gmail.com" color="bg-secondary-container" />
              <ContactItem icon={<MessageCircle size={24} />} title="WhatsApp" value="+62 896 6600 0898" href="https://wa.me/6289666000898" color="bg-surface-container-highest" />
              
              <div className="pt-8 mt-8 border-t border-outline-variant/10">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <Clock size={20} />
                  <span className="text-sm">Response time: Usually within 24 hours (GMT+8)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-24 rounded-3xl overflow-hidden h-96 relative group grayscale hover:grayscale-0 transition-all duration-700">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxhENnE601j0ZWPnVZyOSx77TrXnzg2oWNJPWWP5-0YI2ES1qyPl-ekiDBV4sSmOn4Z55meO4eGfBH-UQa3mKnlzDQwPPJwQmLWVCUV04z9D3ul8Nzqd9g8fJXMC58n90l3q5qTgKBcCfQVuKcsZpiV3FT2K2azIP7jIWabCLbNSSWHpj4RfKuk_QtWZPHWI1qCHztigKK_wqEF30UV9SZhaejkDWDyCNaWydalyBXaehacUJ32X4TKgXEXcXsvfb2ptEfaW2weA8" 
          alt="Bali Map"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center">
          <div className="bg-surface-container-lowest/95 p-8 rounded-2xl text-center shadow-xl max-w-sm border border-outline-variant/20">
            <MapPin className="text-4xl text-primary mx-auto mb-4" size={40} />
            <h4 className="text-xl font-bold text-primary mb-2">Denpasar, Bali</h4>
            <p className="text-on-surface-variant mb-4">Physical meetings available by appointment</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 px-4 py-2 border border-outline-variant/20 rounded-lg text-primary hover:bg-surface-container-high transition-all"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
}

function ContactItem({ icon, title, value, href, color }: { icon: React.ReactNode, title: string, value: string, href: string, color: string }) {
  return (
    <a href={href} className="flex items-start gap-6 group">
      <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-primary text-lg">{title}</h4>
        <p className="text-on-surface-variant text-lg">{value}</p>
      </div>
    </a>
  );
}
