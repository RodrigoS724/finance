import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule),
    provideRouter([
      { path: '', component: Dashboard},
      // agrega rutas perezosas aquí si las necesitas
    ])
  ]
};
