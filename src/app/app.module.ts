import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { MallPlazaComponent } from './componentes/parqueaderos/mall-plaza/mall-plaza.component';
import { CaribePlazaComponent } from './componentes/parqueaderos/caribe-plaza/caribe-plaza.component';
import { SanFelipeComponent } from './componentes/parqueaderos/san-felipe/san-felipe.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ContactanosComponent,
    MallPlazaComponent,
    CaribePlazaComponent,
    SanFelipeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
