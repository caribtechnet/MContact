import { Component, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Common } from '../environments/common';
import { environment } from '../environments/environment';
import { MessagingServiceService } from './services/messaging-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact';

  /**Navigate to Home */
  public Home = () => this.router.navigate(['/home']);

  private _keepTheToolBarVisible: boolean = false;
  public get keepTheToolBarVisible(): boolean {
    return this._keepTheToolBarVisible;
  }
  public set keepTheToolBarVisible(value: boolean) {
    this._keepTheToolBarVisible = value;
    localStorage.setItem("keepTheToolBarVisible", `${value}`);
  }

  private _showContactsInaGrid: boolean = true;
  public get showContactsInaGrid(): boolean {
    return this._showContactsInaGrid;
  }
  public set showContactsInaGrid(value: boolean) {
    localStorage.setItem("showContactsInaGrid", `${value}`);
    this._showContactsInaGrid = value;

    /*****************inform the UI*****************************/
    this.messageToSend = Common.showContactsInaGridKey;
    this.sendMessage()
    /**********************************************/
  }

  @Output() newItemEvent = new EventEmitter<string>();
  private _messageToSend: string | undefined;

  public reloadContacts() {
    this._messageToSend = Common.RefreshContactsKey;
    this.sendMessage();
  }

  /** */
  public SwitchTheContactView() {
    this.showContactsInaGrid = !this.showContactsInaGrid;
    localStorage.setItem(Common.showContactsInaGridKey, `${this.showContactsInaGrid}`);
    console.log(`Show the contacts in a grid ${this.showContactsInaGrid}`)
  }

  /**
   * 
   * @param _messagingService
   */
  constructor(private router: Router, private _messagingService: MessagingServiceService) {

    this.LoadSavedSettings();
  }

  /** */
  LoadSavedSettings() {
    let tempVal = localStorage.getItem(Common.keepTheToolBarVisibleKey);
    if (null != tempVal) {
      this.keepTheToolBarVisible = Boolean(JSON.parse(tempVal));
    }

    /**Grid vs list */
    let tempShowContactsInaGrid = localStorage.getItem(Common.showContactsInaGridKey);
    this.showContactsInaGrid = JSON.parse( tempShowContactsInaGrid ? tempShowContactsInaGrid: 'false');
  }

  /** */

  public sendMessage(): void {
    this._messagingService.sendMessage(this._messageToSend ?? "defaultstring");
  }

  public get messageToSend(): string {
    return this._messageToSend ?? "defaultstring";
  }

  public set messageToSend(value: string) {
    this._messageToSend = value;
  }

}
