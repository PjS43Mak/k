/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, TrendingUp, HelpCircle, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ProposalTemplate } from '../types';

export default function CareerVision() {
  const [selectedScenario, setSelectedScenario] = useState<string>('scenario-1');

  const scenarios: ProposalTemplate[] = [
    {
      id: 'scenario-1',
      title: '학교 축제 동아리 부스 운영 효율화',
      objective: '부스 대기시간 최소화 및 재료 낭비 방지를 통한 부스 매출/만족도 극대화',
      resources: ['부스 운영 인력 6명', '예산 150,000원', '공간: 교실 1칸 (약 8x8m)', '준비 시간: 2일'],
      steps: [
        '운영 인력 6명을 조리(2명), 고객 응대/결제(2명), 위생/교대(2명)로 명확히 역할 이중화',
        '구글 폼 QR코드를 이용한 디지털 대기표 시스템을 기획하여 교내 대기 정체 70% 축소',
        '사전 설문조사를 통해 수요가 높은 시간대(점심 직후)에 조리 인력 집중 집중 배치',
      ],
      risks: [
        '재료 소진 리스크: 인근 편의점 및 마트 대체 구매처 사전 지정하여 스트레스 없이 즉각 대응',
        '대기열 혼잡 리스크: 교실 앞 복도 대기선 지정 및 사전 디지털 번호 알림 제공',
      ],
    },
    {
      id: 'scenario-2',
      title: '학급 소통 및 친목 도모 행사 기획안',
      objective: '한정된 예산 속에서 학생 전원이 소외되지 않고 참여할 수 있는 기회 제공',
      resources: ['학급 총 인원 30명', '학급 자치 회비 50,000원', '시간: 학기 말 자치 활동 1시간'],
      steps: [
        '모바일 실시간 퀴즈 플랫폼(Kahoot)을 활용해 값비싼 실물 소품 비용을 0원으로 절감',
        '다과비 절약을 위해 간식을 대량 구매 후 소분 포장하여 전체 예산의 40% 이상을 절약',
        '팀 빌딩 배치 시 사전에 조용한 학생과 외향적인 학생의 황금 비율 분배 계획 수립',
      ],
      risks: [
        '시간 부족 리스크: 게임 진행 시 즉각적인 점수 합산을 위해 모바일 실시간 자동 채점 플랫폼 도입',
        '참여 저조 리스크: 우승팀 및 개인 MVP 리워드를 계획서 상단에 매력적으로 배치해 동기부여',
      ],
    },
    {
      id: 'scenario-3',
      title: '시험 기간 학급 자습 자원 최적화 설계',
      objective: '자습 분위기 조성을 위한 좌석 분배 효율화 및 소음 마찰 예방 계획 수립',
      resources: ['학급 교실 자원', '자습 참여 의사 학생 25명', '자원: 멘토링 매칭 5쌍', '기간: 시험 전 2주'],
      steps: [
        '조용히 집중할 솔로 학습존과 상호 질문이 가능한 피어 멘토링 스터디존으로 교실 레이아웃 기획',
        '과목별 멘토링 시간을 디지털 공유 캘린더에 사전 조율하여 질문 정체 대기 시간 축소',
        '일일 학습 성취도를 체크리스트 보드에 간단히 자가 기록하는 시각화 도구 활용',
      ],
      risks: [
        '자습실 정숙 유지 실패 리스크: 스터디 타임라인 소음 한계 기준을 규칙으로 정하고 모니터링제 기획',
        '학업 스트레스 누적 리스크: 하루 10분 "디지털 사운드 바디 리프레시 타임" 도입으로 멘탈 밸런스 케어',
      ],
    },
  ];

  const currentTemplate = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];

  return (
    <section id="goal" className="py-24 bg-slate-950 px-6 relative">
      {/* Visual Line Anchor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-slate-800" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-2">
            02. CAREER STRATEGY
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
            진로 목표: <span className="text-sky-400">경영 기획 사무원</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
            업무를 체계적으로 정돈하고, 자원을 고도로 분석하여, 조직과 개인이 지속 가능하게 동반
            성장하는 계획을 설계합니다.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Column 1: Philosophy & Roadmap */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-4">
                <div className="flex items-center space-x-3 text-sky-400">
                  <Target size={20} />
                  <h3 className="font-semibold text-slate-100">조직과 나를 연결하는 기획</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  저는 단순히 회사의 지표만을 쫓기보다는, 철저하게 일과 개인 생활의 균형(Work-Life
                  Balance)을 유지하는 기획을 꿈꿉니다. 업무 마감 및 프로세스가 논리적으로 예측
                  가능할 때 업무적 스트레스도 최소화됩니다.
                </p>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  미래의 경영 기획 사무원으로서 조직 구성원 모두가 건강한 루틴 안에서 최상의 역량을
                  발휘하고 성장을 즐기도록 돕겠습니다.
                </p>
              </div>

              {/* Action Plan Timeline */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                  CAREER ROADMAP (달성 계획)
                </h4>
                <div className="space-y-3.5">
                  <div className="flex gap-3 text-xs">
                    <span className="font-mono text-sky-400 font-bold shrink-0">STEP 01</span>
                    <p className="text-slate-300">
                      <strong>학업과 자기관리 균형:</strong> 디지털 플래너 기반의 완벽한 수험 루틴과 성취 분석
                    </p>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span className="font-mono text-sky-400 font-bold shrink-0">STEP 02</span>
                    <p className="text-slate-300">
                      <strong>디지털 기획 역량 확보:</strong> Notion, Slack, 데이터 모델링(엑셀/SQL) 학습 및 멘토링 프로젝트 참여
                    </p>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span className="font-mono text-sky-400 font-bold shrink-0">STEP 03</span>
                    <p className="text-slate-300">
                      <strong>전략 기획가로 도약:</strong> 경영학과 진학 및 기업 경영 전략 인턴십을 통한 조직 효율성 프로젝트 실전 리딩
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Planning Proposal Dashboard */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col overflow-hidden h-full">
              {/* Header Tab Panel */}
              <div className="bg-slate-950 px-4 pt-3 pb-0 border-b border-slate-800 flex flex-wrap gap-1.5">
                {scenarios.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScenario(sc.id)}
                    className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-all border-t-2 ${
                      selectedScenario === sc.id
                        ? 'bg-slate-900 text-sky-400 border-sky-400'
                        : 'text-slate-400 hover:text-slate-200 border-transparent hover:border-slate-800'
                    }`}
                  >
                    {sc.title}
                  </button>
                ))}
              </div>

              {/* Proposal Content Sheet */}
              <div className="p-6 flex-1 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      BUSINESS PLANNING BLUEPRINT
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-900/60">
                      STATUS: OPTIMIZED
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedScenario}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Objective */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-sky-500 font-bold tracking-wider">
                          1. 기획의 핵심 목표 (OBJECTIVE)
                        </label>
                        <p className="text-sm font-medium text-slate-100">{currentTemplate.objective}</p>
                      </div>

                      {/* Resources */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-sky-500 font-bold tracking-wider">
                          2. 가용 자원 분석 (RESOURCE ALLOCATION)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {currentTemplate.resources.map((res, index) => (
                            <span
                              key={index}
                              className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-sans border border-slate-700/50"
                            >
                              {res}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Steps */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-sky-500 font-bold tracking-wider">
                          3. 핵심 실행 계획 (EXECUTION STRATEGY)
                        </label>
                        <ul className="space-y-2">
                          {currentTemplate.steps.map((st, index) => (
                            <li key={index} className="flex gap-2.5 text-xs text-slate-300 items-start">
                              <CheckCircle2 size={14} className="text-sky-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{st}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Risk Management */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/60">
                        <label className="text-[10px] font-mono text-red-400 font-bold tracking-wider flex items-center gap-1">
                          <ShieldAlert size={12} />
                          4. 리스크 및 스트레스 관리 대안 (RISK MITIGATION)
                        </label>
                        <ul className="space-y-1.5">
                          {currentTemplate.risks.map((rk, index) => (
                            <li key={index} className="text-xs text-slate-400 leading-relaxed pl-3.5 relative">
                              <span className="absolute left-1.5 top-2 w-1 h-1 bg-red-400 rounded-full" />
                              {rk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="text-[10px] text-slate-500 text-right font-mono italic">
                  * 박지수의 기획 방법론 프레임워크 적용 데모
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
