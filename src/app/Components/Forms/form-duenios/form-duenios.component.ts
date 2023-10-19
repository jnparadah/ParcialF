import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-duenios',
  templateUrl: './form-duenios.component.html',
  styleUrls: ['./form-duenios.component.css']
})
export class FormDueniosComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Edad: [null, Validators.required],
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
