import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  ngAfterViewInit() {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80
    });
  }
}
