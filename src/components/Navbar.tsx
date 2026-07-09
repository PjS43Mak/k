/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Share2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'goal', label: '진로 목표' },
    { id: 'activities', label: '관련 활동' },
    { id: 'strengths', label: '나의 강점' },
    { id: 'commitment', label: '나의 다짐' },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '박지수 포트폴리오',
        text: '경영 기획 인재를 꿈꾸는 박지수의 포트폴리오 웹사이트',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다.');
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Title */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-slate-950 font-display font-bold text-sm tracking-tighter group-hover:bg-sky-400 transition-colors">
            PJS
          </div>
          <span className="font-display font-semibold text-white tracking-wide text-sm sm:text-base">
            PORTFOLIO <span className="text-sky-400 text-xs font-mono font-normal ml-1">v1.2</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    activeSection === item.id
                      ? 'text-sky-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-700" />

          {/* Business Proposal Action Button */}
          <button
            onClick={handleShare}
            id="share-btn"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-all border border-slate-700"
          >
            <Share2 size={12} />
            <span>공유하기</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={handleShare}
            className="p-1.5 rounded-md bg-slate-800 text-slate-300"
            aria-label="Share"
          >
            <Share2 size={16} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-md bg-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl py-4 px-6 animate-fadeIn">
          <ul className="space-y-3.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium py-1.5 transition-colors ${
                    activeSection === item.id
                      ? 'text-sky-400 font-semibold pl-2 border-l-2 border-sky-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
