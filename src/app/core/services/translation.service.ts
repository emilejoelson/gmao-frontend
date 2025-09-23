import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type SupportedLanguage = 'EN' | 'FR';

// Define interface for translation parameters
interface TranslationParams {
  [key: string]: string | number | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly translate = inject(TranslateService);
  private currentLang: SupportedLanguage;

  constructor() {
    // Get stored language or default to 'EN'
    const storedLang = localStorage.getItem('language') as SupportedLanguage;
    this.currentLang =
      storedLang && ['EN', 'FR'].includes(storedLang) ? storedLang : 'EN';

    // Set default language
    this.translate.setDefaultLang('EN');

    // Use the current language
    this.translate.use(this.currentLang).subscribe({
      next: () => {
        console.log(`Language switched to: ${this.currentLang}`);
      },
      error: (error: Error) => {
        console.error('Error loading translations:', error);
      },
    });
  }

  switchLanguage(lang: SupportedLanguage): void {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.translate.use(lang).subscribe({
      next: () => {
        console.log(`Language switched to: ${lang}`);
      },
      error: (error: Error) => {
        console.error('Error switching language:', error);
      },
    });
  }

  getCurrentLang(): SupportedLanguage {
    return this.currentLang;
  }

  // Additional utility methods
  isCurrentLang(lang: SupportedLanguage): boolean {
    return this.currentLang === lang;
  }

  // Get translation for a key with proper typing
  getTranslation(key: string, params?: TranslationParams): string {
    return this.translate.instant(key, params);
  }
}
