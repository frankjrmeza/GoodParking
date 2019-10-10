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
    this.personaservice.getPersonas()
  }

  onSubmit(regForm:NgForm){
    this.personaservice.insertPersonas(regForm.value)
    this.resetForm(regForm)
  }
  resetForm(regForm: NgForm){
    if (regForm!=null){
      regForm.reset();
      this.personaservice.selecPersona=new Persona();
    }
  }
}
