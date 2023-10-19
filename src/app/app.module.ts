import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenComponent } from './Components/Menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MascotasComponent } from './Components/Mascotas/mascotas.component';
import { ComidaComponent } from './Components/Comida/comida.component';
import { DueniosComponent } from './Components/Duenios/duenios.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatTreeModule } from '@angular/material/tree';
import { AvatarModule } from 'ngx-avatars';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { FormMascotasComponent } from './Components/Forms/form-mascotas/form-mascotas.component';
import { FormComidaComponent } from './Components/Forms/form-comida/form-comida.component';
import { FormDueniosComponent } from './Components/Forms/form-duenios/form-duenios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    MascotasComponent,
    ComidaComponent,
    DueniosComponent,
    FormMascotasComponent,
    FormComidaComponent,
    FormDueniosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    HttpClientModule,
    MatTreeModule,
    AvatarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
