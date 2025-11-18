import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    // init AOS
    Aos.init({
      duration: 700,
      once: true,
      easing: 'ease-in-out',
    });
  }
}
