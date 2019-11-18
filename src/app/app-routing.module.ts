import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { RegistrarAdminComponent } from './componentes/registrar-admin/registrar-admin.component';
import { RegistrarParqueaderoComponent } from './componentes/registrar-parqueadero/registrar-parqueadero.component'
import { AuthGaurdService } from './guard/auth-guard.service';





const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'inicio', component: InicioComponent},
  { path:'login', component: LoginComponent},
  { path:'registrarse', component: RegistroComponent},
  { path:'reserva', component: ReservaComponent,canActivate:[AuthGaurdService]},
  { path:'registraradmin', component: RegistrarAdminComponent},
  { path:'registrarparqueadero', component: RegistrarParqueaderoComponent,canActivate:[AuthGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
