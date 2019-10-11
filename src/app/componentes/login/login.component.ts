import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
    $('.nombre input').on('blur', function () {
      if ($(this).val() == "")
        $(this).addClass('focus');
    });
  }
  ingresar() {
    this.app.show = true;
    this.app.hide = false;
    this.app.exit = true;
  }
  
  salir(){
    this.app.exit = false;
    this.app.hide = true;
    this.app.show = false;
  }
  
  iniciar(limpiar) {
    
    limpiar.value = '';
    return false;
    
  }
}
