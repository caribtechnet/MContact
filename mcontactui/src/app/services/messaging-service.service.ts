import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SecurityServiceService } from './security-service.service';


@Injectable({
  providedIn: 'root'
})
export class MessagingServiceService extends SecurityServiceService{

  constructor() {
      super();
  }

  private _subject = new Subject();

  sendMessage(message: string) {
    this._subject.next(message);
  }

  getMessage(): Observable<string> {
    return this._subject as Observable<string>;
  }
}
