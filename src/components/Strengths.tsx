/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, BarChart4, Compass, Cpu, CheckSquare, Zap, ChevronRight, FileText } from 'lucide-react';
import { Strength } from '../types';

export default function Strengths() {
  const [selectedStrengthIndex, setSelectedStrengthIndex] = useState<number>(0);

  const strengthsList: Strength[] = [
    {
      name: '계획을 세운 뒤 행동하는 습관',
      nameEng: 'PLANNING FIRST',
      percentage: 95,
      description:
        '어떤 중대한 일이든 즉흥적인 충동에 대처하기보다, 먼저 목적지와 정교한 진행 타임라인을 구조화합니다. 이러한 습관은 잠재적 병목과 오류를 비약적으로 사전 예방합니다.',
      iconName: 'Compass',
    },
    {
      name: '효율적으로 시간을 관리하는 능력',
      nameEng: 'TIME EFFICIENCY',
      percentage: 90,
      description:
        '낭비되거나 무의미하게 분산되는 업무 프로세스를 과감하게 소거하고 정량화합니다. 동일한 마감 자원 내에서 가장 높은 성취 밀도와 퀄리티를 유지하는 것을 극도로 선호합니다.',
      iconName: 'Zap',
    },
    {
      name: '목표를 세우고 꾸준히 실천하는 성실함',
      nameEng: 'CONSISTENCY',
      percentage: 92,
      description:
        '단기적 자극이나 열정에 의존하기보다는, 매일 작은 루틴을 쪼개어 타협 없이 조용히 실천합니다. 학업과 성장을 지속적으로 이끄는 가장 중요한 코어 원동력입니다.',
      iconName: 'CheckSquare',
    },
    {
      name: '문제를 분석하고 해결하려는 태도',
      nameEng: 'PROBLEM SOLVING',
      percentage: 88,
      description:
        '예상치 못한 갈등 상황이나 난해한 학업 과제를 마주했을 때 감정적 동요에 휩싸이지 않습니다. 오직 원인이 무엇인지 현상을 세밀하게 분석하고 실행 가능한 대안을 도출합니다.',
      iconName: 'BarChart4',
    },
    {
      name: 'AI와 디지털 도구를 적극 활용하는 능력',
      nameEng: 'DIGITAL LITERACY',
      percentage: 94,
      description:
        '현대 스마트 기획자의 핵심 경쟁력입니다. 생성형 AI 비서, 노션, 클라우드 협업 도구 등을 성실하게 도구화하여 기존 수동 작업 효율을 무한에 가깝게 증폭시키는 데 탁월합니다.',
      iconName: 'Cpu',
    },
  ];

  // Helper function to return icon component dynamically
  const renderIcon = (iconName: string, active: boolean) => {
    const size = 18;
    const className = active ? 'text-sky-400' : 'text-slate-400';
    switch (iconName) {
      case 'Compass':
        return <Compass size={size} className={className} />;
      case 'Zap':
        return <Zap size={size} className={className} />;
      case 'CheckSquare':
        return <CheckSquare size={size} className={className} />;
      case 'BarChart4':
        return <BarChart4 size={size} className={className} />;
      case 'Cpu':
        return <Cpu size={size} className={className} />;
      default:
        return <Compass size={size} className={className} />;
    }
  };

  const selectedStrength = strengthsList[selectedStrengthIndex];

  return (
    <section id="strengths" className="py-24 bg-slate-950 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-2">
            04. STRENGTH & ANALYTICS
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
            전략 기획가로서의 <span className="text-sky-400">나의 강점</span>
          </h2>
          <div className="h-1 w-12 bg-sky-500 mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Strengths Interactive Selector List */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="text-xs font-mono text-slate-400 tracking-wider uppercase mb-3">
              CORE STRENGTH METRICS (강점 지표 선택)
            </h3>

            {strengthsList.map((str, idx) => {
              const active = idx === selectedStrengthIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStrengthIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    active
                      ? 'bg-slate-900 border-sky-500/80 shadow-md shadow-sky-500/5'
                      : 'bg-slate-900/45 border-slate-800 hover:border-slate-800 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-colors ${
                        active ? 'bg-sky-950/80 border border-sky-800' : 'bg-slate-950'
                      }`}
                    >
                      {renderIcon(str.iconName, active)}
                    </div>
                    <div className="truncate">
                      <span
                        className={`block text-[9px] font-mono tracking-widest uppercase ${
                          active ? 'text-sky-400 font-bold' : 'text-slate-500'
                        }`}
                      >
                        {str.nameEng}
                      </span>
                      <span
                        className={`text-xs md:text-sm font-semibold truncate ${
                          active ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {str.name}
                      </span>
                    </div>
                  </div>

                  {/* Tiny Progress Circle/Bar Preview */}
                  <div className="flex items-center space-x-3 shrink-0 ml-2">
                    <div className="w-12 bg-slate-800 h-1.5 rounded-full overflow-hidden hidden sm:block">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${str.percentage}%` }}
                        transition={{ duration: 1 }}
                        className={`h-full ${active ? 'bg-sky-400' : 'bg-slate-600'}`}
                      />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-300 w-8 text-right">
                      {str.percentage}%
                    </span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform duration-300 ${
                        active ? 'text-sky-400 translate-x-0.5' : 'text-slate-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Diagnosis Radar Sheet */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Background gradient blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck size={12} className="text-sky-500" />
                    COMPREHENSIVE DIAGNOSIS REPORT
                  </span>
                  <span className="text-[10px] font-mono text-sky-400">PJS_METRIC_REPORT</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedStrengthIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs font-mono text-sky-400 font-bold tracking-widest uppercase">
                        {selectedStrength.nameEng}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-slate-100 tracking-tight mt-1">
                        {selectedStrength.name}
                      </h4>
                    </div>

                    {/* Progress Bar & Percentage display */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-xs text-slate-400">역량 고도 지수 (Metric Level)</span>
                        <span className="font-mono text-xl font-bold text-sky-400">
                          {selectedStrength.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-850">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedStrength.percentage}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850">
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                        {selectedStrength.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        ESTIMATED ADVANTAGE (경영 기획에 미치는 강점)
                      </span>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-2.5 rounded bg-slate-950 border border-slate-850/60">
                          <span className="block font-semibold text-slate-200 mb-0.5">업무 정확도</span>
                          <span className="text-slate-400 leading-normal">체계적인 설계로 휴먼 에러 발생 가능성 최소화</span>
                        </div>
                        <div className="p-2.5 rounded bg-slate-950 border border-slate-850/60">
                          <span className="block font-semibold text-slate-200 mb-0.5">의사결정 속도</span>
                          <span className="text-slate-400 leading-normal">데이터에 기인한 원인 분석으로 대안 제시 속도 증폭</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-850 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>AUDIT BY: PARK JI SOO SYSTEM</span>
                <span>GRADE: EXCELLENT (A+)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
