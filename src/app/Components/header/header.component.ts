import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isMobile = false;

  navItems = [
    { label: "Home", link: "home", icon: "bi bi-house", delay: 100 },
    { label: "About", link: "about", icon: "bi bi-person", delay: 200 },
    { label: "Resume", link: "resume", icon: "bi bi-file-earmark-text", delay: 300 },
    { label: "Portfolio", link: "portfolio", icon: "bi bi-images", delay: 400 },
    { label: "Services", link: "services", icon: "bi bi-hdd-stack", delay: 500 },
    { label: "Contact", link: "contact", icon: "bi bi-envelope", delay: 600 },
  ];

  ngOnInit() {
    this.checkScreenSize();

    Aos.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 1280;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // Close menu in mobile view after click
      if (this.isMobile) {
        this.isMenuOpen = false;
      }
    }
  }
}
