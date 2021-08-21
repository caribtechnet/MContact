import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenInterceptor } from '../helper/token.interceptor';

@Injectable({
  providedIn: 'root'
})

export class SecurityServiceService implements TokenInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.dir(`INTERCEPTOR ${request}`);

    let headersn = request.headers;
    headersn = headersn.append("securityToken", "123456789x");
    let requestn = request.clone({ headers: headersn });
    let respcopy: HttpResponse<any>;

    return next.handle(requestn).pipe(map(resp => {
      if (resp instanceof HttpResponse) {
        respcopy = resp.clone();
      }
      return respcopy;
    }));
  }

}
