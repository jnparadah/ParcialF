import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComidaModels } from 'src/app/Models/ComidaModels';
import { DueniosModels } from 'src/app/Models/DueniosModels';
import { MascotasModels } from 'src/app/Models/MascotasModels';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  comida: ComidaModels;
  duenios: DueniosModels;
  mascotas: MascotasModels;

  titulo = "";
  accion = new BehaviorSubject("");

  constructor() { }
}
