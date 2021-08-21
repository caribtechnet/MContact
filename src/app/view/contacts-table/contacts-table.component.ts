import { ChangeDetectorRef } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit, AfterViewInit, OnChanges {
  
  private _my_contacts: Contact[] | undefined = [];
  public get my_contacts(): Contact[] | undefined {
    return this._my_contacts;
  }

  @Input()
  public set my_contacts(value: Contact[] | undefined) {
    value?.forEach(item => {
      this.dataSource.data = value;
    });
  }

  displayedColumns: string[] = ['FirstName', 'LastName', 'DepartmentId', 'Email'];
  dataSource = new MatTableDataSource<Contact>(this.my_contacts);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private changeDetectorRefs: ChangeDetectorRef) {
    //this.my_contacts?;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
  }
}


