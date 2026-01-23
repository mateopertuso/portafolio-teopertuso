import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mateo-pertuso-p%C3%A9rez/',
      icon: 'linkedin',
    },
    { name: 'GitHub', url: 'https://github.com/mateopertuso', icon: 'github' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'YouTube', url: '#', icon: 'youtube' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
  ];

  technologies = [
    { name: 'Angular', icon: 'angular' },
    { name: 'C#', icon: 'csharp' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Git', icon: 'git' },
    { name: '.NET', icon: 'dotnet' },
  ];
}
