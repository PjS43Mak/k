/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Mail, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left column */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-white font-display font-semibold text-sm tracking-wide">
            <div className="w-6 h-6 rounded bg-sky-500 flex items-center justify-center text-slate-950 font-bold text-xs tracking-tighter">
              PJS
            </div>
            <span>PARK JI SOO PORTFOLIO</span>
          </div>
          <p className="text-xs text-slate-500">
            계획하고 효율적으로 가치를 기획하는 예비 경영기획 인재 박지수의 포트폴리오
          </p>
        </div>

        {/* Center/Right column */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs font-mono">
          <a
            href="mailto:juhwahan78@gmail.com"
            className="flex items-center space-x-1.5 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Mail size={13} />
            <span>juhwahan78@gmail.com</span>
          </a>

          <span className="text-slate-700 hidden sm:inline">|</span>

          <div className="flex items-center space-x-1 text-slate-500 text-[10px]">
            <ShieldAlert size={12} />
            <span>CLASSIFICATION: STUDENT PORTFOLIO</span>
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600 font-mono">
        <span>© {currentYear} PARK JI SOO. ALL PLANS RESERVED.</span>
        <span>CRAFTED WITH SYSTEMATIC ACCURACY & DIGITAL TOOLS</span>
      </div>
    </footer>
  );
}
