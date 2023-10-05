import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
user:any =[];
constructor(private http: HttpClient) { }

saveUser(body:any): Observable<User> {
  const path = `${environment.BASE_URL}/users`;
  return this.http.post<User>(path,body).pipe(map((res: any) => res));
}

getUserByPhone(phone:string): Observable<User[]>{
  const path = `${environment.BASE_URL}/users?phone=${phone}`;
  return this.http.get<User[]>(path).pipe(map((res: any) => res));
}
}
