import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { DepartmentComponent } from './view/department/department.component'
import { ContactComponent } from './view/contact/contact.component'
import { DepartmentsComponent } from './view/departments/departments.component'
import { ContactsComponent } from './view/contacts/contacts.component'
import { MatButton, MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router'
import { MatListModule } from '@angular/material/list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { CallDialogComponent } from './view/call-dialog/call-dialog.component'
import { EmaillDialogComponent } from './view/emaill-dialog/emaill-dialog.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ContactService } from './services/contacts.service'
import { DepartmentsService } from './services/departments.service'
import { MessagingServiceService } from './services/messaging-service.service';
import { ContactsTableComponent } from './view/contacts-table/contacts-table.component'
import { SecurityServiceService } from './services/security-service.service'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ContactComponent,
    DepartmentsComponent,
    ContactsComponent,
    CallDialogComponent,
    EmaillDialogComponent,
    ContactsTableComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
    , MatFormFieldModule
    , MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SecurityServiceService, multi: true },
    ContactService, DepartmentsService, MessagingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
