import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { sofiaDistrictsData } from '../data/districtsData';
import { ActivePage } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage, slug?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [districtsDropdownOpen, setDistrictsDropdownOpen] = useState(false);

  const handleNavClick = (page: ActivePage, sectionId?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setDistrictsDropdownOpen(false);
    if (page === 'home' && sectionId) {
      onScrollToSection(sectionId);
    } else {
      onNavigate(page);
    }
  };

  const handleServiceClick = (slug: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate('service-detail', slug);
  };

  const handleDistrictClick = (slug: string) => {
    setMobileMenuOpen(false);
    setDistrictsDropdownOpen(false);
    onNavigate('district-detail', slug);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#DDDCD6] transition-colors w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Logo & Brand Identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3E5148]"
          aria-label="Начална страница на Траурна агенция Нанси"
        >
          <img
            src="/logo-nansi.png"
            alt="Траурна агенция Нанси Лого"
            className="h-9 sm:h-12 w-auto max-w-[44px] sm:max-w-[70px] object-contain rounded-sm shrink-0"
            onError={(e) => {
              // Fallback to direct URL provided by the user
              (e.target as HTMLImageElement).src =
                'https://i.ibb.co/gbq8dK0k/Chat-GPT-Image-Sep-28-2026-at-12-46-24-PM.png';
            }}
          />
          <div className="min-w-0">
            <span className="block truncate text-sm sm:text-xl font-bold tracking-tight text-[#252724] group-hover:text-[#3E5148] transition-colors leading-tight">
              Траурна агенция Нанси
            </span>
            <span className="block truncate text-[9px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-wider text-[#75877D] font-semibold">
              гр. София · Денонощно съдействие
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) - Sized carefully to NEVER break into 2 rows */}
        <nav
          className="hidden xl:flex items-center gap-5 2xl:gap-7 text-sm font-medium text-[#6D706A] whitespace-nowrap"
          aria-label="Основна навигация"
        >
          <button
            onClick={() => handleNavClick('home')}
            className={`cursor-pointer transition-colors hover:text-[#252724] ${
              activePage === 'home' ? 'text-[#3E5148] font-bold' : ''
            }`}
          >
            Начало
          </button>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('uslugi')}
              className={`flex items-center gap-1 cursor-pointer transition-colors hover:text-[#252724] py-2 ${
                activePage === 'uslugi' || activePage === 'service-detail'
                  ? 'text-[#3E5148] font-bold'
                  : ''
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Услуги</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-[#FAF9F6] border border-[#DDDCD6] rounded-md shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#75877D] border-b border-[#DDDCD6]/60">
                  Всички услуги
                </div>
                {servicesData.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleServiceClick(s.slug)}
                    className="w-full text-left px-3 py-2 text-sm text-[#252724] hover:bg-[#EDEFEB] transition-colors cursor-pointer"
                  >
                    {s.title}
                  </button>
                ))}
                <div className="border-t border-[#DDDCD6]/60 mt-1 pt-1">
                  <button
                    onClick={() => handleNavClick('uslugi')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#3E5148] font-semibold hover:bg-[#EDEFEB] cursor-pointer"
                  >
                    Преглед на всички услуги →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Districts in Sofia with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDistrictsDropdownOpen(true)}
            onMouseLeave={() => setDistrictsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('districts')}
              className={`flex items-center gap-1 cursor-pointer transition-colors hover:text-[#252724] py-2 ${
                activePage === 'districts' || activePage === 'district-detail'
                  ? 'text-[#3E5148] font-bold'
                  : ''
              }`}
              aria-expanded={districtsDropdownOpen}
            >
              <MapPin className="w-3.5 h-3.5 text-[#3E5148]" />
              <span>Райони в София</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {districtsDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 w-72 bg-[#FAF9F6] border border-[#DDDCD6] rounded-md shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150 max-h-96 overflow-y-auto">
                <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#75877D] border-b border-[#DDDCD6]/60">
                  Квартали в гр. София
                </div>
                {sofiaDistrictsData.map((d) => (
                  <button
                    key={d.slug}
                    onClick={() => handleDistrictClick(d.slug)}
                    className="w-full text-left px-3 py-1.5 text-sm text-[#252724] hover:bg-[#EDEFEB] transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{d.name}</span>
                    <span className="text-[11px] text-[#75877D]">София</span>
                  </button>
                ))}
                <div className="border-t border-[#DDDCD6]/60 mt-1 pt-1">
                  <button
                    onClick={() => handleNavClick('districts')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#3E5148] font-semibold hover:bg-[#EDEFEB] cursor-pointer"
                  >
                    Всички райони и гробищни паркове →
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('home', 'organizaciya')}
            className="cursor-pointer transition-colors hover:text-[#252724]"
          >
            Организация
          </button>

          <button
            onClick={() => handleNavClick('home', 'ceni')}
            className="cursor-pointer transition-colors hover:text-[#252724] font-semibold text-[#3E5148]"
          >
            Цени
          </button>

          <button
            onClick={() => handleNavClick('home', 'za-nas')}
            className="cursor-pointer transition-colors hover:text-[#252724]"
          >
            За нас
          </button>

          <button
            onClick={() => handleNavClick('home', 'vaprosi')}
            className="cursor-pointer transition-colors hover:text-[#252724]"
          >
            Въпроси
          </button>

          <button
            onClick={() => handleNavClick('home', 'kontakti')}
            className="cursor-pointer transition-colors hover:text-[#252724]"
          >
            Контакти
          </button>
        </nav>

        {/* Zone 3: Direct Phone & Primary CTA (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0 whitespace-nowrap">
          <a
            href="tel:0878800157"
            className="flex items-center gap-2 text-sm font-bold text-[#252724] hover:text-[#3E5148] transition-colors px-2 py-1"
            title="Обадете се на дежурния телефон: 0878 800 157"
          >
            <span className="w-8 h-8 rounded-full bg-[#EDEFEB] flex items-center justify-center text-[#3E5148] shrink-0">
              <Phone className="w-4 h-4" />
            </span>
            <span className="font-sans tabular-nums text-sm lg:text-base">0878 800 157</span>
          </a>

          <a
            href="tel:0878800157"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#FAF9F6] bg-[#3E5148] hover:bg-[#32423a] active:bg-[#28352e] rounded-md transition-colors shadow-xs shrink-0"
          >
            Обадете се
          </a>

          {/* Hamburger Menu button for screens below xl */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-md border border-[#DDDCD6] text-[#252724] flex items-center justify-center hover:bg-[#EDEFEB] transition-colors ml-1 cursor-pointer shrink-0"
            aria-label={mobileMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile quick actions: Phone + Menu Button */}
        <div className="flex sm:hidden items-center gap-1.5 shrink-0">
          <a
            href="tel:0878800157"
            className="w-9 h-9 rounded-full bg-[#3E5148] text-[#FAF9F6] flex items-center justify-center active:bg-[#32423a] shadow-xs"
            aria-label="Обадете се на 0878 800 157"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="sr-only tabular-nums">0878 800 157</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-md border border-[#DDDCD6] text-[#252724] flex items-center justify-center active:bg-[#EDEFEB] cursor-pointer shrink-0"
            aria-label={mobileMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#DDDCD6] bg-[#FAF9F6] px-4 pt-5 pb-24 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 max-w-lg mx-auto">
            {/* Quick Call Header in Drawer */}
            <div className="p-3 bg-[#EDEFEB] rounded-md mb-2 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#75877D] font-bold block">
                  Дежурен телефон в София
                </span>
                <span className="text-base font-bold text-[#252724]">0878 800 157</span>
              </div>
              <a
                href="tel:0878800157"
                className="px-3.5 py-1.5 bg-[#3E5148] text-[#FAF9F6] text-xs font-bold rounded"
              >
                Позвънете
              </a>
            </div>

            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 text-base font-medium text-[#252724] border-b border-[#DDDCD6]/50 cursor-pointer"
            >
              Начало
            </button>

            {/* Services block in mobile drawer */}
            <button
              onClick={() => handleNavClick('uslugi')}
              className="text-left py-2 text-base font-medium text-[#252724] border-b border-[#DDDCD6]/50 cursor-pointer flex items-center justify-between"
            >
              <span>Услуги (Всички)</span>
              <span className="text-xs text-[#3E5148] font-bold">Вижте →</span>
            </button>
            <div className="pl-3 py-1 flex flex-col gap-1 border-b border-[#DDDCD6]/50 pb-2">
              {servicesData.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => handleServiceClick(s.slug)}
                  className="text-left text-xs text-[#6D706A] hover:text-[#252724] py-1 cursor-pointer"
                >
                  · {s.title}
                </button>
              ))}
            </div>

            {/* Districts in Sofia block in mobile drawer */}
            <button
              onClick={() => handleNavClick('districts')}
              className="text-left py-2 text-base font-medium text-[#252724] border-b border-[#DDDCD6]/50 cursor-pointer flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3E5148]" />
                Райони и квартали в София
              </span>
              <span className="text-xs text-[#3E5148] font-bold">Всички →</span>
            </button>
            <div className="grid grid-cols-2 gap-1.5 pl-3 py-2 border-b border-[#DDDCD6]/50">
              {sofiaDistrictsData.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => handleDistrictClick(d.slug)}
                  className="text-left text-xs text-[#6D706A] hover:text-[#252724] py-1 truncate cursor-pointer"
                >
                  · {d.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('home', 'organizaciya')}
              className="text-left py-2 text-base font-medium text-[#252724] border-b border-[#DDDCD6]/50 cursor-pointer"
            >
              Организация на стъпки
            </button>

            <button
              onClick={() => handleNavClick('home', 'ceni')}
              className="text-left py-2 text-base font-bold text-[#3E5148] border-b border-[#DDDCD6]/50 cursor-pointer flex items-center justify-between"
            >
              <span>Цени и погребални пакети</span>
              <span className="text-xs bg-[#EDEFEB] text-[#3E5148] px-2 py-0.5 rounded font-semibold">Ново</span>
            </button>

            <button
              onClick={() => handleNavClick('home', 'katalog')}
              className="text-left py-2 text-base font-medium text-[#252724] border-b border-[#DDDCD6]/50 cursor-pointer"
            >
              Каталог и траурни принадлежности
            </button>

            <button
              onClick={() => handleNavClick('home', 'za-nas')}
              className="text-left py-2 text-base font-medium text-[#252724] border-b border-[#DDDCD6]/50 cursor-pointer"
            >
              За Траурна агенция Нанси
            </button>

            <button
              onClick={() => handleNavClick('home', 'vaprosi')}
              className="text-left py-2 text-base font-medium text-[#252724] border-b border-[#DDDCD6]/50 cursor-pointer"
            >
              Често задавани въпроси
            </button>

            <button
              onClick={() => handleNavClick('home', 'kontakti')}
              className="text-left py-2 text-base font-medium text-[#252724] cursor-pointer"
            >
              Контакти и адрес
            </button>

            {/* Mobile phone call action button inside menu */}
            <div className="pt-4 mt-2">
              <a
                href="tel:0878800157"
                className="w-full py-3 px-4 rounded-md bg-[#3E5148] text-[#FAF9F6] text-center font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Обадете се веднага: 0878 800 157</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
