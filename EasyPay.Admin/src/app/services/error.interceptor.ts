import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
              if(error instanceof HttpErrorResponse){
                // if (error.status === 401) {
                //     return throwError(error.message);
                // }
                 // error
                 const appError = error.headers.get('App-Error');
                 if (appError) {
                     return  throwError(appError);
                 }
                   // model state error
                   const serverError = error.error.errors;
                   let modelStateError = '';
                   let i = 1;
                   if (serverError && typeof serverError === 'object') {
                       for (const key in serverError) {
                           if (serverError[key]) {
                               modelStateError += i++ + '-' + serverError[key] + '\n';
                           }
                       }
                   }
                   // my error
                   let myError;
                   const myserverError = error.error;
                   if (myserverError && typeof myserverError === 'object') {
                       if (myserverError.status === false) {
                           myError = myserverError.message;
                       }
                   }
                   let unknowerror = 'خطایی رخ داده است' ;
                   return throwError(modelStateError || myError || myserverError || unknowerror );
              }
              else{
                return throwError('خطایی رخ داده است');
              }
            })
        );
    }
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};