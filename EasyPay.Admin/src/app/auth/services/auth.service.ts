import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, pipe } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  baseurl: string = 'http://localhost:9788/site/admin/Auth/';
  jwthelper = new JwtHelperService();
  
  decodedToken:any;

  //send login request and save token to localstorage
  login(model : any){
    return this.http.post(this.baseurl+'login',model)
    .pipe(
      map(( resp:any ) => {
        const user = resp;
        if (user){
          localStorage.setItem('token',user.token);
          this.decodedToken = this.jwthelper.decodeToken(user.token);
        }
      })
    );
  }

    //decode token and return usernaame as string
  getName():string{
    const token = localStorage.getItem('token');
    if(token){
      this.decodedToken = this.jwthelper.decodeToken(token);
      return this.decodedToken.unique_name;
    }
    return '';
  }

  // return decoded token
  getDecodedToken(){
    const token = localStorage.getItem('token');
    if(token){
    return this.jwthelper.decodeToken(token);
    }
  }
  
  //send register request to server
  register(model : any){
    return this.http.post(this.baseurl+'register',model);
  }

  // return true if token is valid
  loggedIn(): boolean{
    return !this.jwthelper.isTokenExpired(localStorage.getItem('token'));
  }
  
}
