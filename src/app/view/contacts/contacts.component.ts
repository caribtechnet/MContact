import { error } from '@angular/compiler/src/util';
import { AfterViewInit } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core'
import * as rxjs from 'rxjs'
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import * as Op from "rxjs/operators";
import { Common } from '../../../environments/common';
import { environment } from '../../../environments/environment.prod';
import { Contact } from '../../model/contact'
import { ContactService } from '../../services/contacts.service'
import { MessagingServiceService } from '../../services/messaging-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy, AfterViewInit {

  public _receivedMessage: string = "Refresh ...";
  private _subscription: Subscription | undefined;
  public _contacts: Contact[] | undefined
  Myobservable: rxjs.Subscription | undefined;

  /*show Or Hide list */
  private _showAsList: boolean = true;
  public get showAsList(): boolean {
    return this._showAsList;
  }
  public set showAsList(value: boolean) {
    this._showAsList = value;
  }

  /**
   * 
   * @param _contactsService
   * @param _messagingService
   */
  constructor(private _contactsService: ContactService, private _messagingService: MessagingServiceService) {
    this.ConfigureContactDisplayMode();
    this.Loaddata();
  }

  /** */
  ngAfterViewInit(): void {
    this.ConfigureContactDisplayMode();
  }

  ConfigureContactDisplayMode() {
    try {
      const tempshowContactsInaGridKey = localStorage.getItem(Common.showContactsInaGridKey);
      this.showAsList = Boolean(JSON.parse(tempshowContactsInaGridKey ? tempshowContactsInaGridKey : 'false'));
      //console.log(`show ${this.showAsList}`);
    } catch (e) {

    }
  }

  public Load10() {
    this.Myobservable = rxjs.interval(2500)
      .pipe(Op.take(20))
      .subscribe(item => console.log(`${item} ${Date.now()}`),
        (e) => { }
        , () => {
          this.Myobservable?.unsubscribe()
          console.log(`O yah`)
        });
  }

  /*Loaddata*/
  public Loaddata() {
    //console.log(`Loading data!`);
    let subsc = this._contactsService.FetchRecords()
      .subscribe(records => {
        this._contacts = records as Contact[];
        subsc.unsubscribe();
      }
        , (e) => { }
        , () => {
          //console.log(`Were complete!`);
          this.Myobservable?.unsubscribe();
        });
  }

  /** */
  ngOnInit(): void {
    this.ConfigureContactDisplayMode();

    this._subscription = this._messagingService.getMessage()
      .subscribe((message: string) => {
        this._receivedMessage = message;
        switch (message) {

          case Common.showContactsInaGridKey:
            this.showAsList = !this.showAsList;
            break;

          case Common.RefreshContactsKey:
            this._contacts = [];
            this.Loaddata();
            break;
        }
      });
  }

  /** */
  public ngOnDestroy(): void {
    this._subscription?.unsubscribe();
    this.Myobservable?.unsubscribe();
  }
}


