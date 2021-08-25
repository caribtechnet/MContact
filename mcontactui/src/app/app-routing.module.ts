import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Routes, RouterModule } from '@angular/router'
import { ContactComponent } from './view/contact/contact.component'
import { DepartmentComponent } from './view/department/department.component'
import { ContactsComponent } from './view/contacts/contacts.component'
import { DepartmentsComponent } from './view/departments/departments.component'
import { HomeComponent } from './view/home/home.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'department', component: DepartmentsComponent },
  { path: '', redirectTo: "/home", pathMatch: 'full'}
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
