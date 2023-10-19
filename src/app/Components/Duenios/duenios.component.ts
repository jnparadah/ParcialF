import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormDueniosComponent } from '../Forms/form-duenios/form-duenios.component';

@Component({
  selector: 'app-duenios',
  templateUrl: './duenios.component.html',
  styleUrls: ['./duenios.component.css']
})
export class DueniosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'edad', 'Acciones'];
  dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public apiService: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.apiService.Get("Duenios").then((res) => {      
      this.dataSource.data = res
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {
    this.dialog.open(FormDueniosComponent, {});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
