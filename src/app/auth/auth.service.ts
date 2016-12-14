import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {APP_CONFIG} from "../app.config";
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { LocalStorage} from 'ng2-webstorage';
import {Account} from "./account.model";

@Injectable()
export class AuthService {
  private apiEndPointBase:string = this.appConfig.apiEndpoint + "/accounts";

  @LocalStorage()
  public authToken;

  public redirectUrl: string;

  constructor(@Inject(APP_CONFIG) private appConfig, private http: Http, private router: Router) {
  }


  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  login(username:string, password:string): Observable<string[]> {
    if(this.authToken) {
      return Observable.of(this.authToken);
    }
    return this.http.post(this.apiEndPointBase + "/login?include=user", {username:username, password:password})
      .map((res: Response) => {
        this.authToken = res.json().id;
        this.router.navigate(['admin'])
      })
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  logout() {
    this.authToken = null;
  }

  isLoggedIn():boolean {
    return this.authToken != null;
  }

  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
