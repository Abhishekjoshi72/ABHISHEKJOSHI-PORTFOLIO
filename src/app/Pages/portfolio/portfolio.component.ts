import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Aos from 'aos';


interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  filters = [
    { key: '*', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'devops', label: 'DevOps' },
  ];

  selectedFilter: string = '*';
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: 'Vadhu Var Suchika',
      subtitle: 'Matrimony Application Development',
      category: 'web',
      tags: ['Matrimony', 'Application', 'Web Development'],
      description: 'A comprehensive matrimony platform built with Angular and Node.js. Features include profile management, matchmaking algorithm, image uploads, and secure authentication.',
      image: '../../../../assets/Images/VVS.png'
    },
    {
      id: 2,
      title: 'Leave Management System',
      subtitle: 'Employee HR Portal Development',
      category: 'web',
      tags: ['HR', 'Employee', 'Web Development'],
      description: 'An HR portal with leave application, approval workflow, admin panel, dashboard analytics, and email notifications built using Angular + Spring Boot.',
      image: '../../../../assets/Images/LAMS.jpg'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      subtitle: 'Showcasing Skills and Projects',
      category: 'web',
      tags: ['Angular', 'TailWind CSS', 'Web Development'],
      description: 'A modern developer portfolio using Angular + Tailwind with dark mode, animations, filter system, and slide-in project description drawer.',
      image: '../../../../assets/Images/Portfolio.jpg'
    },
    {
      id: 4,
      title: 'CI/CD Pipeline Automation',
      subtitle: 'DevOps Implementation',
      category: 'devops',
      tags: ['CI/CD', 'Automation', 'DevOps', 'AWS'],
      description: 'Fully automated CI/CD pipeline using GitHub Actions, Docker, AWS EC2, Nginx reverse proxy, and deployment automation.',
      image: '../../../../assets/Images/CI-CD.jpg'
    }
  ];

  ngOnInit(): void {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
    });
  }

  get filteredItems() {
    if (this.selectedFilter === '*') return this.projects;
    return this.projects.filter(i => i.category === this.selectedFilter);
  }

  setFilter(key: string) {
    this.selectedFilter = key;
  }

  openDescription(item: Project) {
    this.selectedProject = item;
  }

  closeDescription() {
    this.selectedProject = null;
  }
}
