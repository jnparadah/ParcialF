import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-mascotas',
  templateUrl: './form-mascotas.component.html',
  styleUrls: ['./form-mascotas.component.css']
})
export class FormMascotasComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Tipo: [null, Validators.required],

  });

  hasUnitNumber = false;

  onSubmit(): void {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
