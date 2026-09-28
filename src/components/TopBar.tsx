import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#EDEFEB] border-b border-[#DDDCD6] text-xs text-[#6D706A] py-1.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3E5148] shrink-0" aria-hidden="true" />
          <span className="truncate">При нужда от съдействие в София:</span>
          <a
            href="tel:0878800157"
            className="font-bold text-[#252724] hover:text-[#3E5148] transition-colors tabular-nums shrink-0"
          >
            0878 800 157
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <span className="text-[#6D706A]">Спокойна и уважителна организация в гр. София</span>
          <span aria-hidden="true" className="text-[#DDDCD6]">|</span>
          <a
            href="mailto:test@test.test"
            className="inline-flex items-center gap-1.5 hover:text-[#3E5148] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#75877D]" />
            <span>test@test.test</span>
          </a>
        </div>
      </div>
    </div>
  );
};
