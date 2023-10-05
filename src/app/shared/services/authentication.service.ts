import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  public userSubjetExisted= new BehaviorSubject(false);
  public userExisted = this.userSubjetExisted.asObservable();


constructor(private router:Router,private http:HttpClient) {
  this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  this.user = this.userSubject.asObservable();
 }

 public getUser(): Observable<User>{
   return this.userSubject.asObservable();
 }

 public login(email:string,password:string) {
   return this.http.get(`${environment.BASE_URL}/users?email=${email}&password=${password}`)
    .pipe(map((user: any) => {
      if(user.length > 0){
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        this.userSubjetExisted.next(true);
      }
     // let userNew = Object.assign({},user)
    //  userNew.isFound =false;
      return user;
  }));
 }

 public logOut() :void{
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.userSubjetExisted.next(false);
 }
}
