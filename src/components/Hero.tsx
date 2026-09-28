import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onOpenImmediateHelp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenImmediateHelp }) => {
  return (
    <section className="relative bg-[#17120F] border-b border-[#38291F] py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Image with subtle dark overlay (просветка) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-church-enhanced.png"
          onError={(e) => {
            // Fallback to the bundled background if the hosted image is unavailable.
            const target = e.currentTarget;
            if (target.src !== `${window.location.origin}/images/hero-bg.png`) {
              target.src = '/images/hero-bg.png';
            }
          }}
          alt="Траурна агенция Нанси - гр. София"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05]"
        />
        {/* Light overlays keep the church interior visible while preserving text contrast. */}
        <div className="absolute inset-0 bg-[#18120E]/30 sm:bg-gradient-to-r sm:from-[#1A120D]/75 sm:via-[#17110D]/48 sm:to-[#21160F]/26" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17100B]/45 via-transparent to-[#17100B]/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reassuring Editorial Lead */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-[0.22em] text-[#E0D0BB] mb-5 shadow-xs">
              <span>Траурна агенция Нанси</span>
              <span className="text-[#B39A7D]">·</span>
              <span>гр. София</span>
              <span className="text-[#B39A7D]">·</span>
              <span className="text-[#F1CA87] font-bold">Денонощно 24/7</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-sm">
              Спокойствие и достойнство в най-трудния момент.
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-[#E0E6E2] leading-relaxed max-w-2xl font-normal mb-10 drop-shadow-xs">
              Поемаме цялостната практическа организация на погребения и кремация във всички квартали на София. С деликатност, уважение към паметта и пълна прозрачност за всяка стъпка.
            </p>

            {/* Direct Primary Call to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="tel:0878800157"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#916B3E] hover:bg-[#76542F] active:bg-[#5F4326] text-white font-bold text-base transition-colors shadow-lg border border-[#E5C58B]/45"
              >
                <Phone className="w-5 h-5 shrink-0 text-[#FFE0A6]" />
                <span>Дежурен телефон: 0878 800 157</span>
              </a>

              <button
                onClick={onExploreServices}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-base transition-colors cursor-pointer shadow-sm"
              >
                <span>Вижте услугите</span>
                <ArrowRight className="w-4 h-4 text-[#E6BC74]" />
              </button>
            </div>

            {/* Key Trust Anchors with Generous Spacing */}
            <div className="w-full pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[#E2D5C2]">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E6BC74] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Бърза реакция</strong>
                  <span className="text-xs text-[#C7B7A2] leading-relaxed">Дежурен екип на разположение 24 часа</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E6BC74] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Пълна коректност</strong>
                  <span className="text-xs text-[#C7B7A2] leading-relaxed">Ясни условия и предварителна разбивка</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E6BC74] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Цяла София</strong>
                  <span className="text-xs text-[#C7B7A2] leading-relaxed">Обслужване на всички столични райони</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Clarity Emergency Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-xl p-7 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE8E2]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6A4B32]">
                  Първи стъпки при кончина
                </span>
                <span className="text-xs text-[#6A4B32] font-semibold bg-[#F1E7D9] px-2.5 py-1 rounded">
                  Дежурна линия
                </span>
              </div>

              <div className="mb-6">
                <span className="text-xs text-[#60675F] block mb-1.5 font-medium">
                  При настъпване на смъртен случай позвънете веднага:
                </span>
                <a
                  href="tel:0878800157"
                  className="text-2xl sm:text-3xl font-bold text-[#1C221E] hover:text-[#2C6348] transition-colors block tracking-tight tabular-nums"
                >
                  0878 800 157
                </a>
                <span className="text-xs text-[#60675F] mt-1.5 block">
                  Наш служител ще Ви насочи спокойно без да се лутате
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#383C35] pt-5 border-t border-[#EAE8E2]">
                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#F2E7D9] text-[#6A4B32] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="block text-[#1C221E] mb-0.5">Констатация от лекар</strong>
                    <p className="text-xs text-[#5E645C] leading-relaxed">
                      Издаване на съобщение за смърт от личен лекар, лекар от Спешна помощ или дежурен в болницата.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#F2E7D9] text-[#6A4B32] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="block text-[#1C221E] mb-0.5">Обаждане към агенцията</strong>
                    <p className="text-xs text-[#5E645C] leading-relaxed">
                      Поемаме лицензиран специализиран транспорт, хладилна камера и съдействие за общинския Акт за смърт.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#F2E7D9] text-[#6A4B32] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="block text-[#1C221E] mb-0.5">Организация на ритуала</strong>
                    <p className="text-xs text-[#5E645C] leading-relaxed">
                      Спокоен избор на ден, час, зала и провеждане на погребение или кремация в София.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EAE8E2] flex items-center justify-between">
                <span className="text-xs text-[#60675F]">
                  Приемна: <strong className="text-[#1C221E]">София</strong>
                </span>
                <button
                  onClick={onOpenImmediateHelp}
                  className="text-xs font-bold text-[#2C6348] hover:text-[#1C221E] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Подробни указания</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
