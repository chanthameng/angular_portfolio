import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skillCategories = [
    {
      name: 'Frontend',
      skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      name: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest', 'Cypress', 'Agile', 'Scrum']
    }
  ];

  getAnimationDelay(): string {
    return `${Math.random() * 0.5}s`;
  }
}