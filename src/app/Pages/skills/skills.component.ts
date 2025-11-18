import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  imports: [CommonModule],
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {

  years = '3+';

  frontEnd = [
    { name: 'HTMLS + CSS', value: '95%' },
    { name: 'JavaScripts', value: '90%' },
    { name: 'Angular 7+', value: '85%' }
  ];

  backEnd = [
    { name: 'Java', value: '60%' },
    { name: 'Node.js', value: '60%' },
  ];

  dataBase = [
    { name: 'MySQL', value: '60%' },
    { name: 'MongoDB', value: '70%' },
    { name: 'PostGress', value: '60%' }
  ];

  techs = ['JavaScript', 'Angular', 'Node.js', 'AWS','MongoDB', 'MySQL' ];

  achievements = [
    { year: '2024', title: 'Certified Kubernetes Administrator' },
    { year: '2023', title: 'Google Cloud Professional Architect' },
    { year: '2023', title: 'AWS Solutions Architect Pro' }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Initialize AOS
    Aos.init({
      once: true,
      duration: 700,
      easing: 'ease-in-out'
    });

    // Animate progress bars via IntersectionObserver
    const bars = this.el.nativeElement.querySelectorAll('.bar');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const width = bar.getAttribute('data-width') || '0%';
            // set explicit style to trigger css transition
            this.renderer.setStyle(bar, 'width', width);
            // optionally set a nice background with a gradient
            this.renderer.setStyle(bar, 'background-image', 'linear-gradient(90deg, rgba(34,197,94,1), rgba(20,184,166,1))');
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar: HTMLElement) => observer.observe(bar));
  }
}
