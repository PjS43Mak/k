/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, FileText, CheckCircle2, RotateCcw, PenTool } from 'lucide-react';

export default function Commitment() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signed, setSigned] = useState(false);

  // Clear Canvas Signature
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSigned(false);
  };

  // Start Drawing
  const startDrawing = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#38bdf8'; // Sky blue color for digital signature
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setSigned(true);
  };

  // Draw on Canvas
  const draw = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // Stop Drawing
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Touch event prevention for smoother mobile drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventDefault = (e: Event) => {
      if (e.target === canvas) {
        e.preventDefault();
      }
    };

    canvas.addEventListener('touchstart', preventDefault, { passive: false });
    canvas.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      canvas.removeEventListener('touchstart', preventDefault);
      canvas.removeEventListener('touchmove', preventDefault);
    };
  }, []);

  return (
    <section id="commitment" className="py-24 bg-slate-900 border-t border-b border-slate-800/80 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-2">
            05. RESOLUTION & COMMITMENT
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">
            나의 다짐 <span className="text-slate-500">&</span> 비전 서명
          </h2>
          <div className="h-1 w-12 bg-sky-500 mt-4 mx-auto rounded-full" />
        </div>

        {/* Dynamic Card Container */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Vision Statement */}
          <div className="md:col-span-7 flex flex-col justify-between bg-slate-950 border border-slate-850 p-6 md:p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-sky-400">
                <Award size={20} />
                <span className="font-mono text-xs font-bold tracking-widest uppercase">VISION STATEMENT</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-tight">
                "목표를 향해 나아가되, 균형 있는 속도로 지속 가능한 내일을 그립니다."
              </h3>

              <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                <p>
                  앞으로도 계획을 세우고, 문제를 분석하며, 효율성을 극대화하는 경영 기획의 핵심
                  역량을 계속해서 키워 나가겠습니다.
                </p>
                <p>
                  그와 동시에, 마라톤과 같은 학업과 진로 여정 속에서 정신 건강과 양질의 휴식도 철저히
                  스스로 관리하겠습니다.
                </p>
                <p>
                  효율적으로 일하며 나 자신과 주변과의 조화로운 일상을 유지하는 균형 잡힌 인재, 바로
                  그것이 제가 지키고 나아갈 약속이자 이정표입니다.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-850 flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <CheckCircle2 size={14} className="text-sky-400 shrink-0" />
              <span>경영기획 전문가로서의 역량 강화 및 워라밸 선언</span>
            </div>
          </div>

          {/* Right Column: Digital Sign Board */}
          <div className="md:col-span-5 flex flex-col">
            <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  DIGITAL CONTRACT SIGNATURE
                </span>
                <h4 className="text-xs font-semibold text-slate-200">
                  기획 제안서 파트너 비전 확인 서명
                </h4>
                <p className="text-[11px] text-slate-400 leading-normal">
                  박지수 군의 계획적인 비전과 효율적 삶의 선언에 공감하신다면 아래 디지털 보드에 직접 서명해 주세요.
                </p>
              </div>

              {/* Canvas signature board */}
              <div className="my-5 space-y-2">
                <div className="relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden h-36">
                  <canvas
                    ref={canvasRef}
                    width={280}
                    height={144}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="absolute inset-0 w-full h-full cursor-crosshair z-10"
                  />
                  {!signed && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 text-[10px] pointer-events-none space-y-1">
                      <PenTool size={14} />
                      <span>여기에 마우스나 터치로 서명하세요</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={clearCanvas}
                    disabled={!signed}
                    className={`flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[10px] border border-slate-800 transition-colors ${
                      signed ? 'text-slate-300' : 'text-slate-600 cursor-not-allowed'
                    }`}
                  >
                    <RotateCcw size={10} />
                    <span>다시 서명</span>
                  </button>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-500 text-center border-t border-slate-850 pt-3">
                VERIFICATION CODE: <span className="text-sky-500">PJS_CONFIRMED_2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
