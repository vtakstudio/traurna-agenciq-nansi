import React from 'react';
import { Quote } from 'lucide-react';

const sampleTestimonials = [
  {
    quote:
      'Всичко беше обяснено спокойно и разбираемо. Екипът ни насочи още от първия разговор и пое необходимата организация.',
    author: 'Мария',
    area: 'Люлин',
  },
  {
    quote:
      'Организацията беше точна и дискретна. В труден момент получихме човешко отношение и ясна информация на всяка стъпка.',
    author: 'Иван',
    area: 'Младост',
  },
  {
    quote:
      'Благодарим за бързата реакция и съдействието с транспорта и ритуала. Семейството ни се почувства в сигурни ръце.',
    author: 'Елена',
    area: 'Център',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#836C55] mb-3">
            Отзиви от семейства
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1C221E] tracking-tight mb-4 leading-[1.2]">
            В труден момент отношението има значение.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {sampleTestimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="bg-white border border-[#DED4C8] rounded-lg p-5 sm:p-6 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <Quote className="w-7 h-7 text-[#A78661] mb-4" aria-hidden="true" />
                <p className="text-sm sm:text-base text-[#383C35] leading-relaxed">
                  „{testimonial.quote}“
                </p>
              </div>

              <footer className="mt-6 pt-4 border-t border-[#EAE8E2] flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-[#1C221E]">{testimonial.author}</p>
                  <p className="text-xs text-[#737A71]">{testimonial.area}, София</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
