import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
// import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/user');
  }

  delete(id: number): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      Authorization: 'jwt ' + sessionStorage.getItem('APPTOKEN')
    });

    return this.http.delete(`${environment.apiUrl}/user/${id}`, {
      headers: header
    });
  }

  updateUser(id: number, user: any): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      Authorization: 'jwt ' + sessionStorage.getItem('APPTOKEN')
    });

    return this.http.put(`${environment.apiUrl}/user/${id}`, user, {
      headers: header
    });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
  }
}
