import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';

export const appConfig: ApplicationConfig = {
  providers: [
    // proveedores globales que antes venían con AppModule / BrowserModule
    importProvidersFrom(BrowserModule, HttpClientModule),

    // rutas de la aplicación (router providers)
    provideRouter([
      { path: '', component: DashboardComponent },
      // { path: 'otra', component: OtraComponent }  <-- agrega si necesitas
    ])
  ]
};
