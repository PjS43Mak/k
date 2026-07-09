/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckSquare, Plus, Trash2, Tag, Layers, Users, BookOpen } from 'lucide-react';
import { Activity, TodoItem } from '../types';

export default function Activities() {
  const activities: Activity[] = [
    {
      id: 'act-1',
      title: '학생 주도 프로젝트 봉사활동',
      period: '1학년 연간 진행',
      category: 'VOLUNTEER & PROJECT',
      keywords: ['자기주도성', '역할 분담', '일정 수립', '소통'],
      bullets: [
        '학급 친구들과 함께 사회적 진로 연계 봉사 활동을 스스로 기획하고 실행',
        '각 팀원의 성향을 면밀히 파악하여 역할을 부여하고, 마일스톤 단계별 세부 일정을 계획',
        '다양한 의견 충돌 속에서 갈등을 매끄럽게 조정하며 협업 및 문제 해결 역량 체득',
      ],
    },
    {
      id: 'act-2',
      title: '진로 연계 비즈니스 동아리 활동',
      period: '2학년 현재 진행',
      category: 'BUSINESS CLUB',
      keywords: ['경영 분석', '아이디어 제안서', '구조적 발표'],
      bullets: [
        '현대 시장 변화에 발맞춰 지속 가능한 비즈니스 모델과 기획 방법론 학습',
        '추상적인 사회적 이슈 해결책을 완결성 높은 한 페이지 비즈니스 기획서로 구조화',
        '동아리 페스티벌 발표 무대에서 제안서의 목적과 기대 효과를 논리적으로 브리핑',
      ],
    },
  ];

  // Todo List State for Interactive Planner Widget
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 'todo-1',
      text: '경영 전략 우수 기사 요약 및 리포트 작성',
      completed: true,
      priority: 'HIGH',
      dueDate: 'TODAY',
    },
    {
      id: 'todo-2',
      text: '포트폴리오 피드백 기획 회의 준비',
      completed: false,
      priority: 'HIGH',
      dueDate: 'TODAY',
    },
    {
      id: 'todo-3',
      text: '학업 피로 회복을 위한 15분 명상 및 명일 계획 수립',
      completed: false,
      priority: 'MEDIUM',
      dueDate: 'TOMORROW',
    },
    {
      id: 'todo-4',
      text: '시각화 협업 도구 사용법 튜토리얼 정리',
      completed: false,
      priority: 'LOW',
      dueDate: 'JULY 10',
    },
  ]);

  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState<'HIGH' | 'MEDIUM' | 'LOW'>('MEDIUM');

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;

    const newTodo: TodoItem = {
      id: `todo-${Date.now()}`,
      text: newTodoText,
      completed: false,
      priority: newTodoPriority,
      dueDate: 'TODAY',
    };

    setTodos([newTodo, ...todos]);
    setNewTodoText('');
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <section id="activities" className="py-24 bg-slate-900 border-t border-b border-slate-800/80 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-2">
            03. EXPERIENCE ARCHIVE
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
            관련 활동 및 <span className="text-sky-400">자기관리</span>
          </h2>
          <div className="h-1 w-12 bg-sky-500 mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Traditional Experience Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-mono text-slate-400 tracking-wider uppercase mb-2">
              MAIN PROJECTS & CLUBS (주요 활동 목록)
            </h3>

            {activities.map((act) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-950 border border-slate-850 hover:border-slate-800 rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual Accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500/80 group-hover:bg-sky-400 transition-colors" />

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono text-sky-400 font-bold tracking-wider">
                    {act.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-medium">{act.period}</span>
                </div>

                <h4 className="text-base md:text-lg font-bold text-slate-100 mb-3 tracking-tight">
                  {act.title}
                </h4>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {act.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 font-medium border border-slate-800"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed list-none pl-0">
                  {act.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Planner Widget (The Core Value showcase) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-950 border border-slate-850 rounded-2xl p-5 md:p-6 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded bg-sky-950 border border-sky-800 text-sky-400">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-sky-400 tracking-wider uppercase font-bold">
                      ACTIVITIES 03. DIGITAL PLANNER
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-100">캘린더 일정 및 우선순위 관리 데모</h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                  EST. ROUTINE
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                체계적인 일정 관리는 경영 기획의 기본입니다. 우선순위에 따라 하루 계획을 세우고,
                실천 여부를 기록하며 낭비되는 시간을 최소화하는 습관을 시연하는 대화형 관리기입니다.
              </p>

              {/* Todo Add Form */}
              <form onSubmit={handleAddTodo} className="flex gap-2 mb-5">
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  placeholder="새로운 할 일 또는 계획 기재..."
                  className="flex-1 text-xs px-3 py-2 rounded bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                />

                <select
                  value={newTodoPriority}
                  onChange={(e) => setNewTodoPriority(e.target.value as 'HIGH' | 'MEDIUM' | 'LOW')}
                  className="text-[10px] md:text-xs px-2.5 py-2 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-sky-500"
                >
                  <option value="HIGH">우선순위: 상</option>
                  <option value="MEDIUM">우선순위: 중</option>
                  <option value="LOW">우선순위: 하</option>
                </select>

                <button
                  type="submit"
                  className="px-3.5 py-2 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shrink-0 flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
              </form>

              {/* Todo list items */}
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                <AnimatePresence initial={false}>
                  {todos.map((todo) => {
                    const priorityStyles =
                      todo.priority === 'HIGH'
                        ? 'bg-red-950/40 text-red-400 border-red-900/60'
                        : todo.priority === 'MEDIUM'
                        ? 'bg-amber-950/40 text-amber-400 border-amber-900/60'
                        : 'bg-emerald-950/40 text-emerald-400 border-emerald-900/60';

                    return (
                      <motion.div
                        key={todo.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                          todo.completed
                            ? 'bg-slate-900/40 border-slate-850 opacity-60'
                            : 'bg-slate-900 border-slate-800/80 hover:border-slate-700/60'
                        }`}
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <button
                            type="button"
                            onClick={() => handleToggleTodo(todo.id)}
                            className={`w-4 h-4 rounded flex items-center justify-center border transition-all shrink-0 ${
                              todo.completed
                                ? 'bg-sky-500 border-sky-500 text-slate-950'
                                : 'border-slate-700 hover:border-sky-500 bg-slate-950'
                            }`}
                          >
                            {todo.completed && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3 h-3"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </button>

                          <span
                            className={`text-xs font-sans truncate ${
                              todo.completed
                                ? 'line-through text-slate-500'
                                : 'text-slate-200'
                            }`}
                          >
                            {todo.text}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 shrink-0 ml-2">
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold border uppercase tracking-wider ${priorityStyles}`}
                          >
                            {todo.priority}
                          </span>

                          <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-slate-850 transition-colors"
                            title="삭제"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {todos.length === 0 && (
                  <div className="text-center py-8 text-slate-500 text-xs italic font-sans">
                    완료된 할 일이 없습니다. 새로운 계획을 세워보세요!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
