import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormComidaComponent } from '../Forms/form-comida/form-comida.component';


@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'cantidad', 'Acciones'];
  dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public apiService: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.apiService.Get("Comidas").then((res) => {      
      this.dataSource.data = res
      this.paginator._intl.itemsPerPageLabel = "Item"
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {
    this.dialog.open(FormComidaComponent, {});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
