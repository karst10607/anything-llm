import { useState, useEffect } from "react";

/**
 * Component for selecting OCR languages
 * @param {Object} props
 * @param {Function} props.onChange - Callback when language selection changes
 * @param {string[]} props.selectedLanguages - Currently selected languages
 */
export default function LanguageSelector({ onChange, selectedLanguages = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: "jpn", name: "日本語 (Japanese)" },
    { code: "chi_sim", name: "简体中文 (Simplified Chinese)" },
    { code: "chi_tra", name: "繁體中文 (Traditional Chinese)" },
    { code: "kor", name: "한국어 (Korean)" },
    { code: "eng", name: "English" }
  ];

  const handleToggleLanguage = (code) => {
    const newSelection = selectedLanguages.includes(code)
      ? selectedLanguages.filter(lang => lang !== code)
      : [...selectedLanguages, code];
    
    onChange(newSelection);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 text-sm rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-stone-700 dark:hover:bg-stone-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        OCR 語言
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-stone-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <label
                key={language.code}
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-stone-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedLanguages.includes(language.code)}
                  onChange={() => handleToggleLanguage(language.code)}
                />
                {language.name}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
