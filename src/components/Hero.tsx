/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronDown, Calendar, FileText, CheckSquare, Target } from 'lucide-react';

export default function Hero() {
  const currentDateStr = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }} />
      </div>

      {/* Grid line accent at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      {/* Glowing accent circle */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        {/* Proposal Document Style Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 p-6 md:p-10 shadow-2xl relative"
        >
          {/* Document Tech Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 mb-8 text-[10px] sm:text-xs font-mono text-slate-400 gap-2">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sky-400">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-1.5 animate-pulse" />
                SYSTEM STATUS: ACTIVE
              </span>
              <span className="text-slate-600">|</span>
              <span>DOC_ID: PJS-PLAN-2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={12} className="text-sky-500" />
              <span>{currentDateStr}</span>
            </div>
          </div>

          {/* Subtitle / Category Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-950/50 border border-sky-800/50 text-sky-400 text-xs font-medium mb-6 font-mono"
          >
            <Target size={12} />
            <span>BUSINESS PLANNING PORTFOLIO</span>
          </motion.div>

          {/* Big Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-none mb-6"
          >
            박지수 <span className="text-slate-400 font-light text-2xl md:text-3xl font-sans block sm:inline mt-2 sm:mt-0 sm:ml-4">Park Ji Soo</span>
          </motion.h1>

          {/* One-line Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-200 font-light border-l-2 border-sky-500 pl-4 py-1.5 mb-8 tracking-wide leading-relaxed"
          >
            "계획을 세우고, 효율적으로 문제를 해결하는 경영 기획 인재를 꿈꾸는 고등학교 2학년 학생."
          </motion.p>

          {/* Business Meta Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div className="space-y-1">
              <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">POSITION</span>
              <span className="text-sm font-medium text-slate-300">예비 경영기획 사무원</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">EDUCATION</span>
              <span className="text-sm font-medium text-slate-300">고등학교 2학년</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">CORE VALUE</span>
              <span className="text-sm font-medium text-slate-300">효율성 & 지속가능성</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">TOOLS</span>
              <span className="text-sm font-medium text-slate-300">AI & 디지털 플래너</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center justify-center mt-12 text-slate-400 hover:text-white transition-colors"
        >
          <a href="#about" className="flex flex-col items-center space-y-2 group">
            <span className="text-xs font-mono tracking-widest uppercase">READ PROPOSAL</span>
            <div className="w-6 h-10 rounded-full border border-slate-700 flex items-start justify-center p-1.5 group-hover:border-sky-500 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 rounded-full bg-sky-400"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
