import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user';


@Injectable()
export class AuthService {
  set User(value: User) {
    this._User = value;
  }


  private semaphore = false;

  private _User: User = undefined;

  private UserEvent: EventEmitter<User> = new EventEmitter();

  private cookieEvent: EventEmitter<any> = new EventEmitter();

  public auth = false;



  constructor(
             private router: Router
  ) {

    this.updateUser();

  }


  setLocalUser(user: User) {
    if (user !== undefined) {
      console.log('User set ' + user.email + ' ' + user.userName );
    }
    this._User = user;
    this.UserEvent.emit(this._User);
  }

  getAccessToken() {
    if (this._User === undefined) {
      this.updateUser();
    } else {
      console.log('User not undefined');
    }
    return localStorage.getItem('access_token');
  }

  removeAccessToken() {
    localStorage.removeItem('access_token');
  }
  updateUser() {


      const basicUser = new User();

      basicUser.cat_access_token = localStorage.getItem('access_token');

      this.setLocalUser(basicUser);
  }
}
