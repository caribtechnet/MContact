import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Routes, RouterModule } from '@angular/router'
import { ContactComponent } from './view/contact/contact.component'
import { DepartmentComponent } from './view/department/department.component'
import { ContactsComponent } from './view/contacts/contacts.component'
import { DepartmentsComponent } from './view/departments/departments.component'

const appRoutes: Routes = [
  { path: 'contact', component: ContactsComponent },
  { path: 'department', component: DepartmentsComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
