import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { DashboardComponent } from './private/pages/dashboard/dashboard.component';
import { ProductsComponent } from './private/pages/products/products.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { Page404Component } from './public/pages/page-404/page-404.component';
import { LocalidadesComponent } from './private/pages/localidades/localidades.component';
import { BuscarComponent } from './public/pages/buscar/buscar.component';
import { provideHttpClient } from '@angular/common/http';
import { NuevaLocalidadComponent } from './private/pages/localidades/nueva-localidad/nueva-localidad.component';
import { ActualizarLocalidadComponent } from './private/pages/localidades/actualizar-localidad/actualizar-localidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    Page404Component,
    LocalidadesComponent,
    BuscarComponent,
    NuevaLocalidadComponent,
    ActualizarLocalidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
