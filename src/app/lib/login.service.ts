import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items = this.itemsSubject.asObservable();
  constructor() {
    let local_storage = JSON.parse(localStorage.getItem('account'));
    if (!local_storage) {
      local_storage = [];
    }
    this.itemsSubject.next(local_storage); 
  }
  
  login(item) {
    let local_storage:any;
    if (localStorage.getItem('account') == null) {
      local_storage = [item];
    }
    localStorage.setItem('account', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

  logOut() {
   localStorage.removeItem('account');
  }
 }