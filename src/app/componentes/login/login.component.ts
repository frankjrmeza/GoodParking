import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.nombre input').on('blur', function () {
      if ($(this).val() == "")
          $(this).addClass('focus');
  });
  }

}
