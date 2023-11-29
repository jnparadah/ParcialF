import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MascotasModels } from 'src/app/Models/MascotasModels';
import { ModalService } from 'src/app/Services/Modal/modal.service';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-mascotas',
  templateUrl: './form-mascotas.component.html',
  styleUrls: ['./form-mascotas.component.css']
})
export class FormMascotasComponent {

  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
    public ModalService: ModalService
    ){
    
  }

  titulo = ""
  accion = ""

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Nombres: [null, Validators.required],
    Tipo: [null, Validators.required],

  });

  infMascotas: MascotasModels = {
    NombreMascota: "",
    TipoAnimal: ""
  }

  ngOnInit(): void {
    this.titulo = this.ModalService.titulo;
    this.accion = this.ModalService.accion.value;

    if (this.ModalService.accion.value == "Editar") {
      this.addressForm.controls.Nombres.setValue(
        this.ModalService.mascotas['nombre']
      );
      this.addressForm.controls.Tipo.setValue(
        this.ModalService.mascotas['tipo']
      );
    }
  }

  onSubmit(): void {
    this.titulo = this.ModalService.titulo
    this.accion = this.ModalService.accion.value
    if (this.ModalService.accion.value == "Guardar") {
      if (this.addressForm.valid) {
        this.infMascotas.NombreMascota = this.addressForm.controls['Nombres'].value;
        this.infMascotas.TipoAnimal = this.addressForm.controls['Tipo'].value;
  
        this.dialog.closeAll();
        this.apiService.post('Mascotas', this.infMascotas).then(res=>{
          if (res == undefined) {
            Swal.fire({
              title: 'Creacion Realizada',
              text: 'La Mascota ha sido creada',
              icon: 'success',
              color: '#7b1fa2',
            })
          }
        }).catch(error=>{
          Swal.fire(
            `Status error ${error.status}`,
            `Message: ${error.message}`,
            `error`
          )
        })
      }else{
        Swal.fire(
          'Ingresar los datos',
          'Por favor ingrese todos los campos requeridos',
          'error'
        )
      }
    }else {
      if (this.addressForm.valid) {
        this.infMascotas.NombreMascota = this.addressForm.controls['Nombres'].value;
        this.infMascotas.TipoAnimal = this.addressForm.controls['Tipo'].value;
        
        this.dialog.closeAll();
        this.apiService.update('Mascotas', this.infMascotas, String(this.ModalService.mascotas['id'])).then(res => {
          if (res == undefined) {
            Swal.fire({
              title: 'Edicion Realizada',
              text: 'La Mascota ha sido editada',
              icon: 'success',
              color: '#7b1fa2',
            })
          }
        }).catch(error => {
          Swal.fire(
            `Status error ${error.status}`,
            `Message EDITAR: ${error.message}`,
            `error`
          )
        })
      } else {
        Swal.fire(
          'Ingresar los datos',
          'Por favor ingrese todos los campos requeridos',
          'error'
        )
      }
    }
  }
}
