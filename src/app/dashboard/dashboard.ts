import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from '../chart/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Chart],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  // datos ejemplo (0..16)
  ventas = [0,0,0,0,0,0,0,0,1,6,9,9,0,0,8,6,5];
}
