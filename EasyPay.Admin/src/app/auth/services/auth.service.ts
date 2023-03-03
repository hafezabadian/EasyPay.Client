import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http : HttpClient) { }
baseurl: string = 'http://localhost:9788/site/admin/Auth/'

login(model : any){
  return this.http.post(this.baseurl+'login',model)
  .pipe(
    map(( resp:any ) => {
      const user = resp;
      if (user){
        localStorage.setItem('token',user.token);
      }
    })
  );
  }

register(model : any){
  return this.http.post(this.baseurl+'register',model);
}

}
