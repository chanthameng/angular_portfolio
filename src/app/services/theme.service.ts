import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<'light' | 'dark'>('light');
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor() {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    this.setTheme(initialTheme);
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.currentThemeSubject.value;
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.currentThemeSubject.next(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}