import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenInquiry: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenInquiry }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-[#DDDCD6] px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        <a
          href="tel:0878800157"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-[#3E5148] text-[#FAF9F6] text-sm font-bold transition-colors active:bg-[#32423a] shadow-xs"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="truncate">0878 800 157</span>
        </a>

        <button
          onClick={onOpenInquiry}
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-[#EDEFEB] border border-[#DDDCD6] text-[#252724] text-sm font-medium hover:bg-[#DDDCD6] transition-colors"
        >
          <MessageSquare className="w-4 h-4 shrink-0 text-[#75877D]" />
          <span className="truncate">Запитване</span>
        </button>
      </div>
    </div>
  );
};
