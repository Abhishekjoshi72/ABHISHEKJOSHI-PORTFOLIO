import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css']
})
export class PreLoaderComponent implements OnInit {
 loaded = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 1200);
  }

}
