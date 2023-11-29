import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DueniosModels } from 'src/app/Models/DueniosModels';
import { ModalService } from 'src/app/Services/Modal/modal.service';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-duenios',
  templateUrl: './form-duenios.component.html',
  styleUrls: ['./form-duenios.component.css']
})
export class FormDueniosComponent {

  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
    public ModalService: ModalService
  ) {

  }

  titulo = ""
  accion = ""

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Edad: [null, Validators.required],
  });

  infDuenios: DueniosModels = {
    NombreDueño: "",
    Edad: 0
  }

  ngOnInit(): void {
    this.titulo = this.ModalService.titulo;
    this.accion = this.ModalService.accion.value;

    if (this.ModalService.accion.value == "Editar") {
      this.addressForm.controls.Nombre.setValue(
        this.ModalService.duenios['nombre']
      );
      this.addressForm.controls.Edad.setValue(
        this.ModalService.duenios['edad']
      );
    }
  }

  onSubmit(): void {
    this.titulo = this.ModalService.titulo
    this.accion = this.ModalService.accion.value
    if (this.ModalService.accion.value == "Guardar") {
      if (this.addressForm.valid) {
        this.infDuenios.NombreDueño = this.addressForm.controls['Nombre'].value;
        this.infDuenios.Edad = this.addressForm.controls['Edad'].value;

        this.dialog.closeAll();
        this.apiService.post('Duenios', this.infDuenios).then(res => {
          if (res == undefined) {
            Swal.fire({
              title: 'Creacion Realizada',
              text: 'El Dueño ha sido creado',
              icon: 'success',
              color: '#7b1fa2',
            })
          }
        }).catch(error => {
          Swal.fire(
            `Status error ${error.status}`,
            `Message: ${error.message}`,
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
    } else {
      if (this.addressForm.valid) {
        this.infDuenios.NombreDueño = this.addressForm.controls['Nombre'].value;
        this.infDuenios.Edad = this.addressForm.controls['Edad'].value;
        
        this.dialog.closeAll();
        this.apiService.update('Duenios', this.infDuenios, String(this.ModalService.duenios['id'])).then(res => {
          if (res == undefined) {
            Swal.fire({
              title: 'Edicion Realizada',
              text: 'El Dueño ha sido editado',
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
