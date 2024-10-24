import { Injectable } from '@angular/core';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: Theme = Theme.Dark; 
  private readonly THEME_KEY='selected-theme';

  constructor() {
    const storedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (storedTheme) {
      this.setTheme(storedTheme);
    }
  }

  getPreferredTheme(): Theme{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Theme.Dark;
    } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return Theme.Light;
    } else{
        return Theme.System;
    }
  }

  setTheme(theme: Theme) {
    this.theme = theme;
    localStorage.setItem(this.THEME_KEY, theme);

    if(theme==Theme.System){
        var perferedTheme=this.getPreferredTheme();
        if(perferedTheme===Theme.Dark){
            theme=Theme.Dark;
        }else if(perferedTheme===Theme.Light){
            theme=Theme.Light;
        }
    }
    
    if(theme===Theme.Light){
      document.documentElement.style.setProperty('--background-color', 'var(--background-color-light-theme)');
      document.documentElement.style.setProperty('--text-color', 'var(--text-color-light-theme)');
      document.documentElement.style.setProperty('--border-bottom', 'var(--border-bottom-light-theme)');
      document.documentElement.style.setProperty('--user-role', 'var(--user-role-light-theme)');
      document.documentElement.style.setProperty('--menu-item-hover', 'var(--menu-item-hover-light-theme)');
      document.documentElement.style.setProperty('--menu-item-selected', 'var(--menu-item-selected-light-theme)');
      document.documentElement.style.setProperty('--menu-item-colapsed-selected', 'var(--menu-item-colapsed-selected-light-theme)');
      document.documentElement.style.setProperty('--page-title', 'var(--page-title-light-theme)');
      document.documentElement.style.setProperty('--page-subtitle', 'var(--page-subtitle-light-theme)');
      
      document.documentElement.style.setProperty('--table-tr', 'var(--table-tr-light-theme)');
      document.documentElement.style.setProperty('--table-td', 'var(--table-td-light-theme)');
      document.documentElement.style.setProperty('--table-tr-text', 'var(--table-tr-text-light-theme)');
      document.documentElement.style.setProperty('--svg-border', 'var(--svg-border-light-theme)');
      document.documentElement.style.setProperty('--checked-border', 'var( --checked-border-light-theme)');

      document.documentElement.style.setProperty('--form-field', 'var( --form-field-light-theme)');
      document.documentElement.style.setProperty('--form-field-border', 'var( --form-field-border-light-theme)');
      document.documentElement.style.setProperty('--form-field-selected', 'var( --form-field-selected-light-theme)');
      document.documentElement.style.setProperty('--checkmark-border', 'var( --checkmark-border-light-theme)');

      document.documentElement.style.setProperty('--sub-sidemenu', 'var( --sub-sidemenu-light-theme)');
      document.documentElement.style.setProperty('--horizontal-line', 'var( --horizontal-line-light-theme)');
      document.documentElement.style.setProperty('--validation-instruction', 'var( --validation-instruction-light-theme)');
      document.documentElement.style.setProperty('--dirty-touched-color', 'var( --dirty-touched-color-light-theme)');
      document.documentElement.style.setProperty('--check-svg', 'var( --check-svg-light-theme)');

      document.documentElement.style.setProperty('--popup-background', 'var( --popup-background-light-theme)');
      document.documentElement.style.setProperty('--exit', 'var( --exit-light-theme)');
      document.documentElement.style.setProperty('--neutral-button', 'var( --neutral-button-light-theme)');

    }else if(theme===Theme.Dark){

      document.documentElement.style.setProperty('--background-color', 'var(--background-color-dark-theme)');
      document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark-theme)');
      document.documentElement.style.setProperty('--border-bottom', 'var(--border-bottom-dark-theme)');
      document.documentElement.style.setProperty('--user-role', 'var(--menu-item-hover-dark-theme)');
      document.documentElement.style.setProperty('--menu-item-hover', 'var(--menu-item-hover-dark-theme)');
      document.documentElement.style.setProperty('--menu-item-selected', 'var( --menu-item-selected-dark-theme)');
      document.documentElement.style.setProperty('--menu-item-colapsed-selected', 'var(--menu-item-colapsed-selected-dark-theme)');
      document.documentElement.style.setProperty('--page-title', 'var(--page-title-dark-theme)');
      document.documentElement.style.setProperty('--page-subtitle', 'var(--page-subtitle-dark-theme)');

      document.documentElement.style.setProperty('--table-tr', 'var(--table-tr-dark-theme)');
      document.documentElement.style.setProperty('--table-td', 'var(--table-td-dark-theme)');
      document.documentElement.style.setProperty('--table-tr-text', 'var(--table-tr-text-dark-theme)');
      document.documentElement.style.setProperty('--svg-border', 'var(--svg-border-dark-theme)');
      document.documentElement.style.setProperty('--checked-border', 'var( --checked-border-dark-theme)');

      document.documentElement.style.setProperty('--form-field', 'var( --form-field-dark-theme)');
      document.documentElement.style.setProperty('--form-field-border', 'var( --form-field-border-dark-theme)');
      document.documentElement.style.setProperty('--form-field-selected', 'var( --form-field-selected-dark-theme)');
      document.documentElement.style.setProperty('--checkmark-border', 'var( --checkmark-border-dark-theme)');

      document.documentElement.style.setProperty('--sub-sidemenu', 'var( --sub-sidemenu-dark-theme)');
      document.documentElement.style.setProperty('--horizontal-line', 'var( --horizontal-line-dark-theme)');
      document.documentElement.style.setProperty('--validation-instruction', 'var( --validation-instruction-dark-theme)');
      document.documentElement.style.setProperty('--check-svg', 'var(--check-svg-dark-theme)');

      document.documentElement.style.setProperty('--popup-background', 'var( --popup-background-dark-theme)');
      document.documentElement.style.setProperty('--exit', 'var( --exit-dark-theme)');
      document.documentElement.style.setProperty('--neutral-button', 'var( --neutral-button-dark-theme)');

    }
  }

  getTheme(): Theme {
    return this.theme;
  }
}