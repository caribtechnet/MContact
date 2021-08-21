import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import * as rxjs from 'rxjs'
import * as Op from "rxjs/operators";
import { TokenInterceptor } from '../helper/token.interceptor';
import { SecurityServiceService } from './security-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends SecurityServiceService {

  constructor(private httpclient: HttpClient) {
      super();
  }

  //intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //  console.dir(`INTERCEPTOR ${request}`);

  //  let headersn = request.headers;
  //  headersn = headersn.append("securityToken", "123456789x");

  //  let requestn = request.clone({ headers: headersn });
  //  return next.handle(requestn);
  //}

  private contactData: string = 'assets/appdata/mocdata.json';

  /**/
  public FetchRecords(): Observable<Contact[]> {
    return this.httpclient.get<Contact[]>(this.contactData)
  }

}


