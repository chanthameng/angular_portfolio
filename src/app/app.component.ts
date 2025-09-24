import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showScrollToTop = false;

  ngOnInit() {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show scroll to top button when scrolled down
    this.showScrollToTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}