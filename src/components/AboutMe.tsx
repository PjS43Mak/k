/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { User, Activity, Clock, Award, ShieldAlert } from 'lucide-react';

export default function AboutMe() {
  const qualities = [
    {
      icon: <Clock size={20} className="text-sky-400" />,
      title: '계획적 성향 (Planning-Oriented)',
      desc: '즉흥적 대처보다는 목적지와 최적의 도달 경로를 먼저 그려 실수를 예방합니다.',
    },
    {
      icon: <Activity size={20} className="text-sky-400" />,
      title: '자원 & 시간 효율성 (Efficiency)',
      desc: '불필요하게 낭비되는 프로세스를 진단하고 단축하여 핵심 성과에 집중합니다.',
    },
    {
      icon: <Award size={20} className="text-sky-400" />,
      title: '지속 가능한 균형 (Balanced Life)',
      desc: '정신 건강과 휴식, 성장이 유기적인 건강한 일상의 루틴을 유지합니다.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-b border-slate-800/80 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-2">01. EXECUTIVE SUMMARY</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
            안녕하세요, <span className="text-sky-400">박지수</span>입니다
          </h2>
          <div className="h-1 w-12 bg-sky-500 mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-lg md:text-xl font-semibold text-slate-100 leading-relaxed font-sans">
              "행동하기 전, 한 발 먼저 철저히 생각하고 효율적으로 마침표를 찍습니다."
            </h3>

            <div className="text-slate-300 leading-relaxed space-y-4 font-sans text-sm md:text-base">
              <p>
                불필요한 일에 시간을 쓰기보다 먼저 명확한 생각과 구체적인 계획을 세운 뒤
                행동에 옮기는 것을 좋아하는 고등학교 2학년 박지수입니다.
              </p>
              <p>
                저는 단순히 바쁘게만 움직이기보다, 더 효율적으로 일을 마무리하고 그렇게 남은 소중한 여유 시간을 인생의 다양한 의미 있는 영역에 적극적으로 활용하는 삶을 중요하게 생각합니다.
              </p>
              <p>
                이러한 저만의 계획적이고 분석적인 성향을 밑거름 삼아, 미래에는 기업의 목표를 명밀히 설계하고 자원을 배치하며 탁월한 전략을 도출해내는 <strong className="text-sky-300 font-medium">경영 기획 사무원</strong>으로서 세상의 조직에 기여하고 싶습니다.
              </p>
            </div>
          </div>

          {/* Visualization / Cards */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 shadow-xl">
              <div className="p-5 space-y-4">
                <span className="text-xs font-mono text-slate-400 block border-b border-slate-800 pb-2">
                  CHARACTERISTIC PROFILES (성향 프로필)
                </span>

                <div className="space-y-4">
                  {qualities.map((q, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 border border-transparent hover:border-slate-800"
                    >
                      <div className="mt-0.5 p-1.5 rounded bg-slate-800 text-sky-400 shrink-0">
                        {q.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-100 mb-0.5">{q.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{q.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
