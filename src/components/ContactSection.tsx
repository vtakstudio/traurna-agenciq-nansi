import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialSubject || 'Общо запитване',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Моля, попълнете Вашето име и телефон за обратна връзка.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Моля, потвърдете съгласието си за обратна връзка.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="kontakti" className="py-16 sm:py-20 lg:py-24 bg-[#F0F2EF] border-t border-[#E0E2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Agency Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
                Координати и дежурна връзка
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-5 leading-[1.2]">
                Свържете се с нас
              </h2>
              <p className="text-[#50554E] text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Денонощна връзка за въпроси и организация на траурни услуги в София.
              </p>

              <div className="space-y-5 border-t border-[#D8DAD4] pt-7">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white border border-[#DDDCD6] flex items-center justify-center text-[#34483E] shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#71786E] uppercase tracking-wider block font-semibold mb-1">
                      Дежурен телефон (24/7):
                    </span>
                    <a
                      href="tel:0878800157"
                      className="text-2xl sm:text-3xl font-bold text-[#1C221E] hover:text-[#34483E] transition-colors tabular-nums tracking-tight block"
                    >
                      0878 800 157
                    </a>
                    <span className="text-xs text-[#636A60] block mt-1">
                      Денонощно приемане на повиквания за цяла София
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white border border-[#DDDCD6] flex items-center justify-center text-[#34483E] shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#71786E] uppercase tracking-wider block font-semibold mb-1">
                      Електронна поща:
                    </span>
                    <a
                      href="mailto:test@test.test"
                      className="text-base font-semibold text-[#1C221E] hover:text-[#34483E] transition-colors"
                    >
                      test@test.test
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white border border-[#DDDCD6] flex items-center justify-center text-[#34483E] shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#71786E] uppercase tracking-wider block font-semibold mb-1">
                      Приемна:
                    </span>
                    <p className="text-base font-semibold text-[#1C221E]">
                      гр. София, България
                    </p>
                    <p className="text-xs text-[#636A60] mt-0.5">
                      Посещение на дежурен агент на адрес във всички квартали
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick call CTA button */}
            <div className="mt-10 pt-8 border-t border-[#D8DAD4]">
              <a
                href="tel:0878800157"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#34483E] hover:bg-[#283830] text-white text-base font-bold transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>Обадете се сега: 0878 800 157</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Editorial Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-[#DDDCD6] rounded-lg p-5 sm:p-10 lg:p-12 shadow-sm">
              <div className="mb-8 pb-6 border-b border-[#EAE8E2]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C221E] mb-2 leading-snug">
                  Изпратете писмено запитване
                </h3>
                <p className="text-sm text-[#525750]">
                  Оставете телефон и кратко описание. Ще Ви потърсим обратно.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#FAF9F6] rounded-lg p-6 sm:p-10 text-center border border-[#E4E2D8]">
                  <CheckCircle2 className="w-12 h-12 text-[#34483E] mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-[#1C221E] mb-2">
                    Вашето запитване е прието успешно.
                  </h4>
                  <p className="text-base text-[#525750] mb-6">
                    Наш дежурен служител ще се свърже с Вас на посочения телефон ({formData.phone}) възможно най-скоро.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Общо запитване',
                        message: '',
                        consent: false,
                      });
                    }}
                    className="text-sm text-[#34483E] underline hover:text-[#1C221E] font-semibold cursor-pointer"
                  >
                    Изпрати ново съобщение
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-md bg-amber-50 border border-amber-200 text-sm text-amber-900">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-[#1C221E] uppercase tracking-wider mb-2">
                        Вашето име *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Име и фамилия"
                        className="w-full px-4 py-3 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#1C221E] focus:outline-none focus:border-[#34483E] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-[#1C221E] uppercase tracking-wider mb-2">
                        Телефон за връзка *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0878..."
                        className="w-full px-4 py-3 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#1C221E] focus:outline-none focus:border-[#34483E] focus:bg-white transition-all tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-[#1C221E] uppercase tracking-wider mb-2">
                        Имейл адрес (по желание)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="имейл@пример.bg"
                        className="w-full px-4 py-3 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#1C221E] focus:outline-none focus:border-[#34483E] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-[#1C221E] uppercase tracking-wider mb-2">
                        Тема на запитването
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#1C221E] focus:outline-none focus:border-[#34483E] focus:bg-white transition-all"
                      >
                        <option value="Общо запитване">Общо запитване</option>
                        <option value="Организация на погребение">Организация на погребение</option>
                        <option value="Организация на кремация">Организация на кремация</option>
                        <option value="Траурен транспорт">Траурен транспорт</option>
                        <option value="Ковчези и урни">Ковчези и урни</option>
                        <option value="Траурни принадлежности">Траурни принадлежности</option>
                        <option value="Венци и цветя">Венци и цветя</option>
                        <option value="Некролози">Некролози</option>
                        <option value="Административно съдействие">Административно съдействие</option>
                        <option value="Запитване за квартал в София">Запитване за квартал в София</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#1C221E] uppercase tracking-wider mb-2">
                      Вашето съобщение или въпрос
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишете накратко от какво съдействие се нуждаете..."
                      className="w-full px-4 py-3 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#1C221E] focus:outline-none focus:border-[#34483E] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      id="privacy-consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-[#DDDCD6] text-[#34483E] focus:ring-[#34483E]"
                    />
                    <label htmlFor="privacy-consent" className="text-xs text-[#636A60] leading-relaxed">
                      Съгласен съм предоставените данни да бъдат използвани единствено за обратен контакт по настоящото запитване, съгласно политиката за поверителност.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md bg-[#34483E] hover:bg-[#283830] text-white text-sm font-bold transition-colors cursor-pointer shadow-2xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Изпрати запитване</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
