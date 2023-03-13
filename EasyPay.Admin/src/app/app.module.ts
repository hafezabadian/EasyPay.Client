import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from "ngx-ui-loader";
import { AuthGuard } from './guard/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#ea0025",
  "bgsOpacity": 1,
  "bgsPosition": "top-center",
  "bgsSize": 30,
  "bgsType": "double-bounce",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ea0025",
  "fgsPosition": "bottom-right",
  "fgsSize": 50,
  "fgsType": "double-bounce",
  "gap": 30,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(0,0,0,0.3)",
  "pbColor": "#ea0025",
  "pbDirection": "ltr",
  "pbThickness": 1,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};

export function getToken(){
return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      toastClass:'ToastOptions'
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    // this Module & forroot config send jwtAuthontication token Automaticaly by any http server request to allowedDomains Except DisallowedRoutes
    JwtModule.forRoot({
      config:{
        tokenGetter: getToken,
        allowedDomains: [environment.apiUrlJwt],
        disallowedRoutes: [environment.apiUrl + '/site/admin/auth']
      }
    })
  ],
  providers: [
    ErrorInterceptorProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
