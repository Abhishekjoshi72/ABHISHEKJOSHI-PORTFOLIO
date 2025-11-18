import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.css'
})
export class ScrollTopComponent {
  visible = false;

  // show button after user scrolls down (300px)
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.visible = window.pageYOffset > 300;
  }

  // smooth scroll to top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
