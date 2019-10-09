import { Component, OnInit } from '@angular/core';
import{ PersonaService} from '../../services/persona.service'
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private personaservice: PersonaService) { }

  ngOnInit() {
  }

  resetForm(productForm: NgForm){
    if (productForm!=null){
      productForm.reset();
      this.personaservice.selecPersona=new Persona();
    }
  }
}
