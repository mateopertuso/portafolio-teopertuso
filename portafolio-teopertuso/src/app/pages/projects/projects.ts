import { Component } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedProject: Project | null = null;
  currentImage = 0;
  isClosing = false;

  projects: Project[] = [
    {
      id: 1,
      title: 'IT Operations – Network Support',
      subtitle: 'Network management system',
      description:
        'Internal network management system designed to monitor and manage company infrastructure, including networks, switches, antennas, and IP hosts. The application provides a complete view of networks and their associated devices, supports network-wide and individual IP ping operations to verify connectivity and availability, and stores ping results for tracking and diagnostics. It allows dynamic network and device management, with all data persisted in a relational database. Fully developed as a full-stack solution, covering database design, backend APIs, and frontend user interfaces. Built to handle real production data.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'C#', 'ASP.NET', 'SQL Server'],
      images: ['assets/images/redes1.png', 'assets/images/redes2.png', 'assets/images/redes3.png'],
      companyProject: true,
    },
    {
      id: 2,
      title: 'Nursing – Clinical Records System',
      subtitle: 'Employee health management',
      description:
        'Internal clinical records system for company employees, built to manage and maintain complete medical histories. The application is structured into multiple functional sections, including personal data, clinical information, and medical follow-ups. It supports employee lookup with automatic data prefill, image capture and upload, form validations, and a full CRUD workflow. Designed to handle real-world business rules and daily operational use, with features such as Excel data export and role-based interaction.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'C#', 'ASP.NET', 'SQL Server'],
      images: [
        'assets/images/historia1.png',
        'assets/images/historia2.png',
        'assets/images/historia3.png',
        'assets/images/historia4.png',
      ],
      companyProject: true,
    },
    {
      id: 3,
      title: 'Quality Control – Inspection System',
      subtitle: 'Dynamic inspections with offline support',
      description:
        'Internal quality control system for dynamic inspection workflows, allowing full configuration of attributes, procedures, etc. Includes offline-first support with automatic synchronization, audit workflows with full traceability, and features such as conditional comments, Excel export, and PDF reporting. Built as a full-stack solution for real production use.',
      technologies: [
        'SQL Server',
        '.NET',
        'EF',
        'Angular',
        'TypeScript',
        'Tailwindcss',
        'HTML',
        'CSS',
        'Dexie',
      ],
      images: [
        'assets/images/inspecciones1.png',
        'assets/images/inspecciones4.png',
        'assets/images/inspecciones2.png',
        'assets/images/inspecciones3.png',
      ],
      companyProject: true,
    },
  ];

  openProject(project: Project) {
    this.selectedProject = project;
    this.currentImage = 0;
  }

  closeProject() {
    this.isClosing = true;
    setTimeout(() => {
      this.selectedProject = null;
      this.isClosing = false;
    }, 300);
  }

  nextImage() {
    if (!this.selectedProject) return;
    this.currentImage = (this.currentImage + 1) % this.selectedProject.images.length;
  }

  prevImage() {
    if (!this.selectedProject) return;
    this.currentImage =
      (this.currentImage - 1 + this.selectedProject.images.length) %
      this.selectedProject.images.length;
  }
}
