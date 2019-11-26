import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
//componentes
import { CuposComponent } from './componentes/cupos/cupos.component';
import { RegistrarParqueaderoComponent } from './componentes/registrar-parqueadero/registrar-parqueadero.component';
import { RegistrarAdminComponent } from './componentes/registrar-admin/registrar-admin.component';
import { FormsModule, ReactiveFormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//servicios
import { UsuariosService } from './services/usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ReservaComponent,
    RegistroComponent,
    CuposComponent,
    RegistrarParqueaderoComponent,
    RegistrarAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
