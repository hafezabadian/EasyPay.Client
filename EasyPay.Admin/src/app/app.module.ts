import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#ea0025",
  "bgsOpacity": 1,
  "bgsPosition": "top-center",
  "bgsSize": 30,
  "bgsType": "double-bounce",
  "blur": 0,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ea0025",
  "fgsPosition": "center-center",
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
      progressAnimation: 'decreasing' 
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
