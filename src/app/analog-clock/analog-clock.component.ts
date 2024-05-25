import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent implements OnInit {
  time = new Date();

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  get hoursStyle() {
    return {
      transform: `rotate(${this.time.getHours() * 30 + this.time.getMinutes() / 2}deg)`
    };
  }

  get secondStyle() {
    return {
      transform: `rotate(${this.time.getSeconds() * 6}deg)`
    };
  }   

  ngOnInit(): void {} 
  
}
