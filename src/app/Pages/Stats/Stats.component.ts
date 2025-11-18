import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Stats',
  templateUrl: './Stats.component.html',
  styleUrls: ['./Stats.component.css']
})
export class StatsComponent implements OnInit {

  stat1: number = 0;
  stat2: number = 0;
  stat3: number = 0;

  ngOnInit(): void {
    this.animateNumbers(127, (value) => this.stat1 = value);
    this.animateNumbers(89, (value) => this.stat2 = value);
    this.animateNumbers(234, (value) => this.stat3 = value);
  }

  animateNumbers(target: number, callback: (n: number) => void) {
    let start = 0;
    const duration = 1000;
    const interval = 10;
    const increment = target / (duration / interval);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      callback(Math.floor(start));
    }, interval);
  }

}
