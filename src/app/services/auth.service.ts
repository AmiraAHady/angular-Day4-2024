import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: BehaviorSubject<boolean>;

  constructor(private router:Router) {
    this.user = new BehaviorSubject<boolean>(this.isUserLogged);
  }
  logInUser(user: IUser) {
    // backend verfied
    let userToken = 'jkjhf274hdjhdg';
    localStorage.setItem('userToken', userToken);
    this.user.next(true);
    this.router.navigateByUrl('/')
  }

  logout() {
    localStorage.removeItem('userToken');
    this.user.next(false);
  }
  get isUserLogged() {
    return localStorage.getItem('userToken') ? true : false;
  }

  getUserState(): Observable<boolean> {
    return this.user.asObservable();
  }
}
