import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
import { ButtonComponent } from '../shared/button/button.component';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'mobile';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  selectedFilter = 'all';
  projectsPerPage = 6;
  currentPage = 1;
  
  allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Angular and Node.js',
      longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart, payment integration, and admin dashboard. Built with modern web technologies and responsive design.',
      image: '/assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'SCSS'],
      category: 'fullstack',
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      longDescription: 'A Kanban-style task management application with real-time collaboration features, drag-and-drop functionality, team management, and progress tracking.',
      image: '/assets/project2.jpg',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Material-UI'],
      category: 'fullstack',
      liveUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/username/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts',
      longDescription: 'An interactive weather dashboard that provides current weather conditions, 7-day forecasts, and weather maps. Features location search and weather alerts.',
      image: '/assets/project3.jpg',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      category: 'frontend',
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/username/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication',
      longDescription: 'A comprehensive mobile banking solution with account management, transfers, bill payments, investment tracking, and advanced security features.',
      image: '/assets/project4.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometric Auth'],
      category: 'mobile',
      liveUrl: 'https://example-bank.com',
      githubUrl: 'https://github.com/username/mobile-banking',
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with dark/light theme support',
      longDescription: 'A modern, responsive portfolio website showcasing projects, skills, and experience. Features smooth animations, dark/light theme toggle, and contact form.',
      image: '/assets/project5.jpg',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'GSAP'],
      category: 'frontend',
      liveUrl: 'https://example-portfolio.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'A comprehensive social media analytics dashboard',
      longDescription: 'An analytics platform that tracks social media performance, engagement metrics, audience insights, and provides detailed reporting for businesses.',
      image: '/assets/project6.jpg',
      technologies: ['Angular', 'D3.js', 'Python', 'Django', 'Redis'],
      category: 'fullstack',
      liveUrl: 'https://example-analytics.com',
      githubUrl: 'https://github.com/username/social-analytics',
      featured: true
    }
  ];

  get filteredProjects(): Project[] {
    const filtered = this.selectedFilter === 'all' 
      ? this.allProjects 
      : this.allProjects.filter(project => project.category === this.selectedFilter);
    
    return filtered.slice(0, this.currentPage * this.projectsPerPage);
  }

  get hasMoreProjects(): boolean {
    const filtered = this.selectedFilter === 'all' 
      ? this.allProjects 
      : this.allProjects.filter(project => project.category === this.selectedFilter);
    
    return this.currentPage * this.projectsPerPage < filtered.length;
  }

  ngOnInit() {
    // Initialize with featured projects
    this.allProjects = this.allProjects.sort((a, b) => b.featured ? 1 : -1);
  }

  filterProjects(category: string) {
    this.selectedFilter = category;
    this.currentPage = 1; // Reset to first page when filtering
  }

  loadMoreProjects() {
    this.currentPage++;
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}