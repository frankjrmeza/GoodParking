import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { MallPlazaComponent } from './componentes/parqueaderos/mall-plaza/mall-plaza.component';
import { CaribePlazaComponent } from './componentes/parqueaderos/caribe-plaza/caribe-plaza.component';
import { SanFelipeComponent } from './componentes/parqueaderos/san-felipe/san-felipe.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'inicio', component: InicioComponent},
  { path:'login', component: LoginComponent},
  { path:'registrarse', component: RegistroComponent},
  { path:'contactanos', component: ContactanosComponent},
  { path:'parqueadero/mall-plaza', component: MallPlazaComponent},
  { path:'parqueadero/caribe-plaza', component: CaribePlazaComponent},
  { path:'parqueadero/san-felipe', component: SanFelipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
