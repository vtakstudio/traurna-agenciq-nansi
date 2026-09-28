import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState(defaultTopic ? `Относно: ${defaultTopic}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (isOpen && defaultTopic) {
      setNote(`Относно: ${defaultTopic}`);
    }
  }, [isOpen, defaultTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Моля, въведете име и телефон.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252724]/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF9F6] border border-[#DDDCD6] rounded-lg max-w-lg w-full max-h-[calc(100dvh-2rem)] overflow-y-auto p-5 sm:p-8 shadow-2xl relative">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-md hover:bg-[#EDEFEB] flex items-center justify-center text-[#6D706A] hover:text-[#252724] cursor-pointer"
          aria-label="Затвори"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-[#3E5148] mx-auto mb-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#252724] mb-2">
              Благодарим Ви
            </h3>
            <p className="text-sm text-[#6D706A] mb-6">
              Получихме Вашето запитване. Ще Ви потърсим на телефон {phone} в най-кратък срок.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded bg-[#3E5148] text-[#FAF9F6] text-sm font-medium hover:bg-[#32423a] transition-colors cursor-pointer"
            >
              Затвори
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#75877D] block mb-1">
                Бързо запитване
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#252724]">
                Свържете се с нашия екип
              </h3>
              <p className="text-xs sm:text-sm text-[#6D706A] mt-1">
                Оставете координати и ние ще Ви позвъним за спокойно разяснение на всяка подробност.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-2.5 rounded-md bg-amber-50 border border-amber-200 text-xs text-amber-900">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#252724] mb-1">
                  Вашето име *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Име и фамилия"
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#252724] focus:outline-none focus:border-[#3E5148]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252724] mb-1">
                  Телефон за връзка *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="088..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#252724] focus:outline-none focus:border-[#3E5148]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252724] mb-1">
                  Бележка или въпрос (незадължително)
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Посочете услуга или въпрос..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#DDDCD6] bg-[#FAF9F6] text-sm text-[#252724] focus:outline-none focus:border-[#3E5148]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-md bg-[#3E5148] text-[#FAF9F6] text-sm font-medium hover:bg-[#32423a] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Изпрати</span>
                </button>

                <a
                  href="tel:0878800157"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-[#DDDCD6] bg-[#EDEFEB] text-[#252724] text-sm font-semibold hover:bg-[#DDDCD6] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#3E5148]" />
                  <span>Или 0878 800 157</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
