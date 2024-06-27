import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { DashboardComponent } from './private/pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { Page404Component } from './public/pages/page-404/page-404.component';
import { EventosComponent } from './private/pages/eventos/eventos.component';
import { NeweventsComponent } from './private/pages/eventos/newevents/newevents.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ActualizareventoComponent } from './private/pages/actualizarevento/actualizarevento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    Page404Component,
    EventosComponent,
    NeweventsComponent,
    ActualizareventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
