import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

   selectedService: any = null;

  ngOnInit(): void {
    Aos.init({
      duration: 1000,
      once: true
    });
  }
  
  services = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      icon: 'bi-code-slash',
      iconColor: 'text-blue-600',
      short:
        'End-to-end web applications with Angular, Node.js, Java, databases, CI/CD and production deployments.',
      long:
        'I design and implement complete web applications — from responsive frontend interfaces to scalable backend systems.',
      points: [
        'Angular, TypeScript, Tailwind CSS',
        'Node.js, Express, NestJS backend APIs',
        'MongoDB & PostgreSQL database design',
        'Docker, CI/CD pipelines, AWS/GCP deployments',
        'Performance, scaling, caching & security best practices',
      ],
    },
    {
      id: 2,
      title: 'Responsive UI Design',
      icon: 'bi-phone',
      iconColor: 'text-purple-600',
      short:
        'Pixel-perfect UI with Tailwind CSS, Angular components, animations and accessibility.',
      long:
        'I craft mobile-first, responsive user interfaces that focus on clarity, speed and consistent user experience.',
      points: [
        'Mobile-first responsive layouts',
        'Accessible UI (ARIA, keyboard navigation)',
        'Reusable Angular components',
        'Optimized assets, lazy loading & transitions',
      ],
    },
    {
      id: 3,
      title: 'Database Design',
      icon: 'bi-database',
      iconColor: 'text-green-600',
      short:
        'Schema design, indexing, migrations, backups, sharding and performance optimization.',
      long:
        'I create robust database architectures optimized for performance, scalability and reliability.',
      points: [
        'Logical & physical schema design',
        'Normalization vs denormalization',
        'Indexing & query optimization',
        'Backup & recovery planning',
        'Monitoring & high availability setup',
      ],
    },
    {
      id: 4,
      title: 'DevOps',
      icon: 'bi-gear-wide-connected',
      iconColor: 'text-red-600',
      short:
        'CI/CD pipelines, Docker, Kubernetes, monitoring, IaC (Terraform) and cloud deployments.',
      long:
        'I automate delivery pipelines and infrastructure to create stable, scalable production systems.',
      points: [
        'CI/CD automation',
        'Docker & Kubernetes orchestration',
        'Terraform infrastructure as code',
        'Monitoring & alerting systems',
        'Secure and scalable deployment practices',
      ],
    },
  ];

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
