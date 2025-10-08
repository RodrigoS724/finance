import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './shared/components/header/header';
import { Dashboard } from './dashboard/dashboard';
import { sidevar } from './shared/components/sidevar/sidevar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, sidevar, Dashboard],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theme: 'dark'|'light' = 'dark';

  ngOnInit(){ this.applyTheme(); }

  toggleTheme(){
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
  }

  private applyTheme(){
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}
