import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DueniosModels } from 'src/app/Models/DueniosModels';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-duenios',
  templateUrl: './form-duenios.component.html',
  styleUrls: ['./form-duenios.component.css']
})
export class FormDueniosComponent {

  constructor(public apiService: ApiService, public dialog: MatDialog){
    
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Edad: [null, Validators.required],
  });

  infDuenios: DueniosModels = {
    NombreDueño: "",
    Edad: 0
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.infDuenios.NombreDueño = this.addressForm.controls['Nombre'].value;
      this.infDuenios.Edad = this.addressForm.controls['Edad'].value;

      this.dialog.closeAll();
      this.apiService.post('Duenios', this.infDuenios).then(res=>{
        if (res == undefined) {
          Swal.fire({
            title: 'Creacion Realizada',
            text: 'El dueño ha sido creado',
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
  }
}
