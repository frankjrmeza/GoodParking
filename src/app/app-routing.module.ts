import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';





const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'inicio', component: InicioComponent},
  { path:'login', component: LoginComponent},
  { path:'registrarse', component: RegistroComponent},
  { path:'reserva', component: ReservaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
