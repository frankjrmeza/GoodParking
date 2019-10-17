import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private app: AppComponent,
    public router: Router
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
    this.router.navigate(['/inicio']);
  }
  
  salir(){
    this.app.exit = false;
    this.app.hide = true;
    this.app.show = false;
    this.router.navigate(['/inicio']);
  }
  
  iniciar(limpiar) {
    limpiar.value = '';
    return false;
    
  }
}
