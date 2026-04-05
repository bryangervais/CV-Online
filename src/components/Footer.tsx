import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-16 px-6 lg:px-12 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-1">
          <span className="font-headline font-semibold text-primary text-xl block mb-6">Clinical Prestige</span>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            A digital sanctum for clinical excellence and academic mentorship, driven by evidence-based precision.
          </p>
          <p className="text-on-surface-variant text-[10px]">
            © 2024 Clinical Prestige. All rights reserved. Dr. de Liyis Academic Practice.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-bold mb-2">Practice</h5>
          <FooterLink label="Clinical Services" />
          <FooterLink label="Research Tutoring" />
          <FooterLink label="Publications" />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-bold mb-2">Support</h5>
          <FooterLink label="Privacy Policy" />
          <FooterLink label="Terms of Service" />
          <FooterLink label="Patient Portal" />
          <FooterLink label="Inquiry Form" />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-bold mb-2">Newsletter</h5>
          <p className="text-on-surface-variant text-sm mb-4">Stay updated with the latest clinical research insights.</p>
          <div className="flex">
            <input 
              className="bg-surface-container-highest border-0 rounded-l-lg p-3 text-sm w-full focus:ring-1 focus:ring-primary" 
              placeholder="Email" 
              type="email" 
            />
            <button className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary/90 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold font-headline text-primary tracking-tight">dr. Bege</span>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">© 2026 DR. BRYAN GERVAIS DE LIYIS. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex gap-6">
          <FooterLink label="RESEARCHGATE" href="https://www.researchgate.net/profile/Bryan-De-Liyis" small />
          <FooterLink label="SCOPUS" href="https://www.scopus.com/authid/detail.uri?authorId=57451155500" small />
          <FooterLink label="ORCID" href="https://orcid.org/0000-0002-8272-754X" small />
          <FooterLink label="LINKEDIN" href="https://www.linkedin.com/in/bryangervaisdeliyis/" small />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, href = "#", small = false }: { label: string, href?: string, small?: boolean }) {
  return (
    <a 
      href={href} 
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className={`${small ? 'text-[10px] font-bold uppercase tracking-widest' : 'text-sm'} text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100`}
    >
      {label}
    </a>
  );
}
