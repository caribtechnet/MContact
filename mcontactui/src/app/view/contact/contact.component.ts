import { AfterViewInit } from '@angular/core'
import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Contact } from '../../model/contact'
import { CallDialogComponent } from '../call-dialog/call-dialog.component'
import { EmaillDialogComponent } from '../emaill-dialog/emaill-dialog.component'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  public contact: Contact | undefined

  @Input() Id: number = -1;
  @Input() FirstName: string = 'The';
  @Input() LastName: string = 'Man';
  @Input() DepartmentId: number = -1;
  @Input() Email: string = 'unknown@unknown.com';
  @Input() Started: string = '';
  @Input() Photo: string | undefined = 'assets/images/unknown.jpeg';


  constructor(public dialog: MatDialog) { }

    ngAfterViewInit(): void {
        
    }
  CallDialog() {
    const dialogRef = this.dialog.open(CallDialogComponent
      , {
        data: { name: `${this.FirstName} ${this.LastName}` },
        height: '400px',
        width: '600px',
      });

    dialogRef.afterClosed().subscribe(result => {
     // console.log(`Dialog result: ${result}`)
    })
  }

  EmailDialog() {
    const dialogRef = this.dialog.open(EmaillDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`)
    })
  }

  ngOnInit(): void { }
}
