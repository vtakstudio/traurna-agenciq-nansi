import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage, slug?: string) => void;
  onOpenLegal: (type: 'privacy' | 'cookies' | 'terms') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onScrollToSection,
}) => {
  return (
    <footer className="bg-white border-t border-[#E0E2DE] text-[#555B53] pt-16 sm:pt-20 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-10 sm:pb-14 border-b border-[#E8E6DF]">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold text-[#1C221E] block mb-1 tracking-tight">
              Траурна агенция Нанси
            </span>
            <p className="text-xs uppercase tracking-wider text-[#55695E] mb-4 font-semibold">
              Траурна агенция · гр. София · 24/7
            </p>
            <p className="text-sm text-[#525750] leading-relaxed max-w-sm mb-6 font-normal">
              Съдействаме с организацията на траурни услуги с деликатност, достойнство и спокойствие за семейството във всички райони на София.
            </p>
            <div className="text-xs text-[#71786E]">
              Всички права запазени © {new Date().getFullYear()} Траурна агенция Нанси
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1C221E] mb-4">
              Навигация
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#525750]"
                >
                  Начало
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('uslugi')}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#525750]"
                >
                  Всички услуги
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#34483E] font-semibold"
                >
                  Райони в София
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => onScrollToSection('organizaciya'), 50);
                  }}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#525750]"
                >
                  Организация
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => onScrollToSection('katalog'), 50);
                  }}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#525750]"
                >
                  Каталог
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => onScrollToSection('za-nas'), 50);
                  }}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#525750]"
                >
                  За нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => onScrollToSection('vaprosi'), 50);
                  }}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#525750]"
                >
                  Въпроси
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => onScrollToSection('kontakti'), 50);
                  }}
                  className="hover:text-[#1C221E] transition-colors cursor-pointer text-[#525750]"
                >
                  Контакти
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Policies */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1C221E] mb-4">
              Правна информация
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#1C221E] transition-colors text-left cursor-pointer text-[#525750]"
                >
                  Политика за поверителност
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('cookies')}
                  className="hover:text-[#1C221E] transition-colors text-left cursor-pointer text-[#525750]"
                >
                  Политика за бисквитки
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#1C221E] transition-colors text-left cursor-pointer text-[#525750]"
                >
                  Общи условия
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1C221E] mb-4">
              Дежурен контакт
            </div>
            <div className="space-y-4 text-sm">
              <a
                href="tel:0878800157"
                className="flex items-center gap-2.5 hover:text-[#1C221E] transition-colors text-[#1C221E] font-bold"
              >
                <Phone className="w-4 h-4 text-[#34483E]" />
                <span className="tabular-nums">0878 800 157</span>
              </a>

              <a
                href="mailto:test@test.test"
                className="flex items-center gap-2.5 hover:text-[#1C221E] transition-colors text-[#525750]"
              >
                <Mail className="w-4 h-4 text-[#71786E]" />
                <span>test@test.test</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1 text-xs">
                <MapPin className="w-4 h-4 text-[#71786E] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#1C221E] font-medium">[АДРЕС]</p>
                  <p className="text-[#71786E]">гр. София, България</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle note */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71786E]">
          <p>
            Траурна агенция Нанси · Професионална и спокойна траурна помощ в гр. София
          </p>
          <p>
            Дежурен телефон за съдействие: <strong className="text-[#1C221E]">0878 800 157</strong>
          </p>
        </div>

        <div className="pt-5 text-center text-[11px] text-[#8A8176]">
          <span>Сайтът е изработен от </span>
          <a
            href="https://www.estudio.bg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#6A4B32] hover:text-[#4F3725] underline underline-offset-2 transition-colors"
          >
            estudio.bg
          </a>
        </div>
      </div>
    </footer>
  );
};
