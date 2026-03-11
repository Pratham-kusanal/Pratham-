/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Info, 
  AlertCircle, 
  Target, 
  Maximize, 
  Wrench, 
  GitBranch, 
  UserCheck, 
  ClipboardList, 
  Users, 
  BarChart3, 
  ShieldAlert, 
  ShieldCheck, 
  FileOutput, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2, 
  Rocket,
  ChevronRight,
  Menu,
  X,
  Download,
  Printer
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { REPORT_CONTENT, ReportSection } from "./constants";

const iconMap: { [key: string]: any } = {
  FileText,
  Info,
  AlertCircle,
  Target,
  Maximize,
  Wrench,
  GitBranch,
  UserCheck,
  ClipboardList,
  Users,
  BarChart3,
  ShieldAlert,
  ShieldCheck,
  FileOutput,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Rocket
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>(REPORT_CONTENT[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentSection = REPORT_CONTENT.find(s => s.id === activeSection) || REPORT_CONTENT[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white border border-black/5 rounded-full shadow-sm"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.aside 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="fixed lg:sticky top-0 h-screen w-72 bg-white border-r border-black/5 z-40 overflow-y-auto scrollbar-hide"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h1 className="font-bold text-sm tracking-tight leading-none">OJT-1 / CIE-02</h1>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-black/40 mt-1">Internship Report</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {REPORT_CONTENT.map((section) => {
                    const Icon = iconMap[section.icon];
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          if (window.innerWidth < 1024) setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeSection === section.id 
                            ? "bg-emerald-50 text-emerald-700 shadow-sm" 
                            : "text-black/50 hover:bg-black/5 hover:text-black"
                        }`}
                      >
                        <Icon size={16} strokeWidth={activeSection === section.id ? 2.5 : 2} />
                        <span className="truncate">{section.title}</span>
                        {activeSection === section.id && (
                          <motion.div layoutId="active-indicator" className="ml-auto">
                            <ChevronRight size={14} />
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 min-h-screen p-6 lg:p-12 max-w-5xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 border-b border-black/5 pb-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">
                <span className="w-8 h-[1px] bg-emerald-600"></span>
                Academic Submission
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-medium tracking-tight text-black">
                {currentSection.title}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-full text-xs font-semibold hover:bg-black/5 transition-colors"
              >
                <Printer size={14} />
                Print Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-xs font-semibold hover:bg-black/80 transition-colors shadow-lg shadow-black/10">
                <Download size={14} />
                Export PDF
              </button>
            </div>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="prose prose-emerald max-w-none"
            >
              <SectionRenderer section={currentSection} />
            </motion.div>
          </AnimatePresence>

          <footer className="mt-24 pt-12 border-t border-black/5 text-center">
            <p className="text-xs font-medium text-black/30 uppercase tracking-widest">
              Assistant Intern / Trainee &bull; 2026 Academic Year
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function SectionRenderer({ section }: { section: ReportSection }) {
  if (section.id === "use-case") {
    const uc = section.content;
    return (
      <div className="space-y-8">
        <div className="bg-white border border-black/5 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="text-emerald-600" size={20} />
            {uc.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 block mb-1">Actors</label>
              <p className="text-sm font-medium">{uc.actors}</p>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 block mb-1">Description</label>
              <p className="text-sm text-black/70 leading-relaxed">{uc.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-black/40">Step-by-Step Process</h4>
          <div className="space-y-3">
            {uc.process.map((step: string, i: number) => (
              <div key={i} className="flex gap-4 items-start bg-white border border-black/5 p-4 rounded-xl shadow-sm">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-black/80">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-600 text-white rounded-2xl p-8 shadow-xl shadow-emerald-200">
          <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 block mb-1">Outcome</label>
          <p className="text-lg font-medium">{uc.outcome}</p>
        </div>
      </div>
    );
  }

  if (Array.isArray(section.content)) {
    return (
      <div className="grid gap-4">
        {section.content.map((item, i) => (
          <div key={i} className="flex items-start gap-4 bg-white border border-black/5 p-6 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors group">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 group-hover:scale-125 transition-transform" />
            <p className="text-lg text-black/80 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/5 p-8 lg:p-12 rounded-3xl shadow-sm">
      <p className="text-xl lg:text-2xl text-black/70 leading-relaxed font-light italic serif">
        &ldquo;{section.content}&rdquo;
      </p>
    </div>
  );
}
