import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ReceiveModule } from './modules/receive/receive.module';
import { SendModule } from './modules/send/send.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MyFilesModule } from './modules/my-files/my-files.module';
import { SharedFilesModule } from './modules/shared-files/shared-files.module';
import { ShareLandingModule } from './modules/share-landing/share-landing.module';
import { FileNotFoundModule } from './modules/file-not-found/file-not-found.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { TermsModule } from './modules/terms/terms.module';
import { CookiesModule } from './modules/cookies/cookies.module';
import { PrivacyModule } from './modules/privacy/privacy.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    NzLayoutModule,
    SharedModule,
    HomeModule,
    ReceiveModule,
    SendModule,
    MyFilesModule,
    SharedFilesModule,
    ShareLandingModule,
    FileNotFoundModule,
    TermsModule,
    CookiesModule,
    PrivacyModule,
    NotFoundModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NzMessageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
