import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.html',
  styleUrls: ['./chart.css']
})
export class Chart implements OnInit {
  @Input() data: number[] = [];
  labels: number[] = [];

  ngOnInit(){
    this.labels = this.data.map((_, i) => i);
  }

  // función para escalar altura (ajusta segun tu estética)
  heightFor(value: number){
    // 18px mínimo + escala lineal, evita 0 height
    return `${Math.max(6, value * 14)}px`;
  }
}
