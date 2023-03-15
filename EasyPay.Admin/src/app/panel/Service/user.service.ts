import { user } from './../../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + 'site/admin/users/';

  //#region httpOption
  //!----------------------------------------------------------------------------------
  //* we can send this httpOption after http request Url by , to authorize http request
  //? but in app.Module config JwtModule to use Global Authorization for allowedDomains
  // httpOptions ={
  //   headers = new HttpHeaders({
  //     Authorization : 'Bearer ' + localStorage.getItem('token')})}
  //!----------------------------------------------------------------------------------
  //#endregion

  constructor(private http: HttpClient,) {}


  getUsers(): Observable<user[]>{
    return this.http.get<user[]>(this.baseUrl);
  }
  getUser(id: string): Observable<user>{
    return this.http.get<user>(this.baseUrl + id);
  }
}
