import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule),
    provideRouter([
      { path: '', component: DashboardComponent }
    ])
  ]
};
