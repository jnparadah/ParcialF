import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ComidaModels } from 'src/app/Models/ComidaModels';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-comida',
  templateUrl: './form-comida.component.html',
  styleUrls: ['./form-comida.component.css']
})
export class FormComidaComponent {

  constructor(public apiService: ApiService, public dialog: MatDialog){
    
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Cantidad: [null, Validators.required],
  });

  infoComida: ComidaModels = {
    Cantidad: 0,
    NombreComida: ""
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.infoComida.NombreComida = this.addressForm.controls['Nombre'].value;
      this.infoComida.Cantidad = this.addressForm.controls['Cantidad'].value;

      this.dialog.closeAll();
      this.apiService.post('Comidas', this.infoComida).then(res=>{
        if (res == undefined) {
          Swal.fire({
            title: 'Creacion Realizada',
            text: 'La comida ha sido creada',
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
