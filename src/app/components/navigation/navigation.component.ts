import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768) {
      this.mobileMenuOpen = false;
    }
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    this.mobileMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private updateActiveSection() {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}