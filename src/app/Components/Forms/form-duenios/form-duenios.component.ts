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
    public modalService: ModalService
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
    IdDueño: 0,
    NombreDueño: "",
    Edad: 0
  }

  ngOnInit(): void {
    this.titulo = this.modalService.titulo;
    this.accion = this.modalService.accion.value;

    if (this.modalService.accion.value == "Editar") {
      this.addressForm.controls.Nombre.setValue(
        this.modalService.duenios['nombre']
      );
      this.addressForm.controls.Edad.setValue(
        this.modalService.duenios['edad']
      );
    }
  }

  onSubmit(): void {
    this.titulo = this.modalService.titulo
    this.accion = this.modalService.accion.value
    if (this.modalService.accion.value == "Guardar") {
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
            `message: ${error.message}`,
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
        this.infDuenios.IdDueño = this.modalService.duenios['id'];
        this.infDuenios.NombreDueño = this.addressForm.controls['Nombre'].value;
        this.infDuenios.Edad = this.addressForm.controls['Edad'].value;
        
        this.dialog.closeAll();
        this.apiService.update('Duenios', this.infDuenios, Number(this.modalService.duenios['id'])).then(res => {
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
