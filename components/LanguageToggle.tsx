"use client";

import { languages } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" role="navigation" aria-label="Language switcher">
      {languages.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`language-switcher__button ${
            option.code === language ? "language-switcher__button--active" : ""
          }`}
          onClick={() => setLanguage(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
