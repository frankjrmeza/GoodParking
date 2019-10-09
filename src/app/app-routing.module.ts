import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { MallPlazaComponent } from './componentes/parqueaderos/mall-plaza/mall-plaza.component';
import { CaribePlazaComponent } from './componentes/parqueaderos/caribe-plaza/caribe-plaza.component';
import { PlazaBocagrandeComponent } from './componentes/parqueaderos/plaza-bocagrande/plaza-bocagrande.component';




const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'inicio', component: InicioComponent},
  { path:'login', component: LoginComponent},
  { path:'registrarse', component: RegistroComponent},
  { path:'reserva', component: ReservaComponent},
  { path:'parqueadero/mall-plaza', component: MallPlazaComponent},
  { path:'parqueadero/caribe-plaza', component: CaribePlazaComponent},
  { path:'parqueadero/plaza-bocagrande', component: PlazaBocagrandeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
