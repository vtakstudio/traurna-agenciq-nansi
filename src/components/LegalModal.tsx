import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'cookies' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252724]/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF9F6] border border-[#DDDCD6] rounded-lg max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#DDDCD6]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#252724]">
            {type === 'privacy' && 'Политика за поверителност'}
            {type === 'cookies' && 'Политика за бисквитки (Cookies)'}
            {type === 'terms' && 'Общи условия за ползване'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#EDEFEB] flex items-center justify-center text-[#6D706A] hover:text-[#252724] cursor-pointer"
            aria-label="Затвори"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-sm text-[#6D706A] leading-relaxed space-y-4">
          {type === 'privacy' && (
            <>
              <p>
                Настоящата Политика за поверителност регламентира начина, по който Траурна агенция Нанси събира, обработва и защитава личните данни на потребителите на уебсайта.
              </p>
              <h3 className="text-base text-[#252724] font-bold">1. Администратор на лични данни</h3>
              <p>
                Администратор на личните данни е Траурна агенция Нанси, със седалище и адрес на управление: гр. София, [АДРЕС], телефон за контакт: 0878 800 157, имейл: test@test.test.
              </p>
              <h3 className="text-base text-[#252724] font-bold">2. Какви данни събираме</h3>
              <p>
                Събираме единствено данните, които доброволно ни предоставяте при попълване на формата за контакт или при телефонен разговор (име, телефон, имейл, описание на желаните услуги).
              </p>
              <h3 className="text-base text-[#252724] font-bold">3. Цели на обработването</h3>
              <p>
                Данните се обработват единствено с цел предоставяне на отговор на Вашето запитване и подготовка на необходимата документация за траурни ритуали.
              </p>
              <h3 className="text-base text-[#252724] font-bold">4. Вашите права</h3>
              <p>
                Всяко лице има право на достъп, коригиране или изтриване на предоставените от него лични данни, както и право на възражение срещу обработването.
              </p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <p>
                Уебсайтът на Траурна агенция Нанси използва минимален набор от бисквитки (cookies), необходими за коректното и сигурно функциониране на сайта.
              </p>
              <h3 className="text-base text-[#252724] font-bold">1. Какво представляват бисквитките?</h3>
              <p>
                Бисквитките са малки текстови файлове, които се запазват на Вашето устройство при посещение на страниците.
              </p>
              <h3 className="text-base text-[#252724] font-bold">2. Видове бисквитки, които използваме</h3>
              <p>
                Използваме само съществени (технически) бисквитки за запазване на системни предпочитания по време на сесията. Не използваме инвазивни рекламни тракери.
              </p>
              <h3 className="text-base text-[#252724] font-bold">3. Управление на бисквитките</h3>
              <p>
                Можете да блокирате или изтриете бисквитките по всяко време през настройките на Вашия браузър.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Добре дошли на уебсайта на Траурна агенция Нанси. Моля, запознайте се с настоящите Общи условия.
              </p>
              <h3 className="text-base text-[#252724] font-bold">1. Информационен характер</h3>
              <p>
                Съдържанието на сайта има информативен и ориентировъчен характер. Конкретните условия, срокове и цени за организиране на траурни услуги се договарят индивидуално със семейството.
              </p>
              <h3 className="text-base text-[#252724] font-bold">2. Права върху съдържанието</h3>
              <p>
                Всички текстови и визуални материали на сайта са собственост на Траурна агенция Нанси или се ползват с лиценз.
              </p>
              <h3 className="text-base text-[#252724] font-bold">3. Контакт</h3>
              <p>
                При всякакви въпроси можете да се свържете с нас на тел. 0878 800 157 или на test@test.test.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#DDDCD6] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium rounded-md bg-[#3E5148] text-[#FAF9F6] hover:bg-[#32423a] transition-colors cursor-pointer"
          >
            Разбрах
          </button>
        </div>
      </div>
    </div>
  );
};
