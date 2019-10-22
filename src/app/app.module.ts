import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
//firebase
import{AngularFireDatabaseModule } from 'angularfire2/database';
import{ AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { FormsModule} from '@angular/forms'
//componentes
import { CuposComponent } from './componentes/cupos/cupos.component';
import { ListCuposComponent } from './componentes/cupos/list-cupos/list-cupos.component';
import { CupoComponent } from './componentes/cupos/cupo/cupo.component'
//servicios
import{CupoService} from './services/cupo.service';
import { RegistrarParqueaderoComponent } from './componentes/registrar-parqueadero/registrar-parqueadero.component';
import { RegistrarAdminComponent } from './componentes/registrar-admin/registrar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ReservaComponent,
    RegistroComponent,
    CuposComponent,
    ListCuposComponent,
    CupoComponent,
    RegistrarParqueaderoComponent,
    RegistrarAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    CupoService
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
