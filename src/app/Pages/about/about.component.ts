import { AfterViewInit, Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    Aos.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out'
    });
  }
}
