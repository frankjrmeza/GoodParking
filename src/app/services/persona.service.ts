import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Persona } from '../models/persona';
import { TouchSequence } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personalist: AngularFireList<any>
  selecPersona: Persona=new Persona();

  constructor(private firebase:AngularFireDatabase) {  }

  getPersonas(){
   return this.personalist= this.firebase.list('personas')
  }

  insertPersonas(persona: Persona){
    this.personalist.push({
      name: persona.name,
      apellido:persona.apellido,
      usuario: persona.usuario,
      contraseña: persona.contraseña,
      mail:persona.mail,
      vehiculo:persona.vehiculo
    });
  }

  updatePersona(persona: Persona){
    this.personalist.update(persona.$key, {
      name:persona.name,
      pellido:persona.apellido,
      usuario: persona.usuario,
      contraseña: persona.contraseña,
      mail:persona.mail,
      vehiculo:persona.vehiculo
    });
  }

  deletePersona($key: string){
    this.personalist.remove($key);
  }
}
