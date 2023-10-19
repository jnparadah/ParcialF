import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-comida',
  templateUrl: './form-comida.component.html',
  styleUrls: ['./form-comida.component.css']
})
export class FormComidaComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Cantidad: [null, Validators.required],
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
