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

openId: number | null = null;

  toggle(id: number) {
    this.openId = this.openId === id ? null : id;
  }

  ngOnInit(): void {
    Aos.init({
      duration: 1000,
      once: true
    });
  }
}
