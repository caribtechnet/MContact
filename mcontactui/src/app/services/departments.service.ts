import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenInterceptor } from '../helper/token.interceptor';
import { SecurityServiceService } from './security-service.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService extends SecurityServiceService {

  constructor() {
      super();
  }

    
}
