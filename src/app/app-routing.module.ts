import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
// import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { DashboardComponent } from './private/pages/dashboard/dashboard.component';
import { Page404Component } from './public/pages/page-404/page-404.component';
import { NewProductComponent } from './private/pages/products/new-product/new-product.component';
import { UpdateProductComponent } from './private/pages/products/update-product/update-product.component';
import { NeweventsComponent } from './private/pages/eventos/newevents/newevents.component';
import { EventosComponent } from './private/pages/eventos/eventos.component';
import { ActualizareventoComponent } from './private/pages/actualizarevento/actualizarevento.component';
import { LocalidadesComponent } from './private/pages/localidades/localidades.component';
import { NuevaLocalidadComponent } from './private/pages/localidades/nueva-localidad/nueva-localidad.component';
import { ActualizarLocalidadComponent } from './private/pages/localidades/actualizar-localidad/actualizar-localidad.component';
import { ProductsComponent } from './private/pages/products/products.component';

import { LoginComponent } from './public/pages/login/login.component'; 

const routes: Routes = [
  { path: '', component: LoginComponent },                         // http://localhost:4200/
  { path: 'home', component: HomeComponent },                   // http://localhost:4200/login
  { path: 'register', component: RegisterComponent },             // http://localhost:4200/register
  { path: 'dashboard', component: DashboardComponent },           // http://localhost:4200/dashboard
  { path: 'dashboard/neweventos', component: NeweventsComponent },   // http://localhost:4200/dashboard/eventos
  { path: 'dashboard/eventos', component: EventosComponent },
  { path: 'dashboard/actualizar-eventos/:id', component: ActualizareventoComponent },

  { path: 'dashboard/localidades', component: LocalidadesComponent },
  { path: 'dashboard/nueva-localidad', component: NuevaLocalidadComponent },
 { path: 'dashboard/actualizar-localidad/:id', component: ActualizarLocalidadComponent },
  { path: '404', component: Page404Component },                   // http://localhost:4200/404
  { path: 'dashboard/products', component: ProductsComponent },   // http://localhost:4200/dashboard/products
  { path: 'dashboard/new-product', component: NewProductComponent },  // http://localhost:4200/dashboard/new-product
  { path: 'dashboard/products/edit/:id', component: UpdateProductComponent },  // http://localhost:4200/dashboard/new-product
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }