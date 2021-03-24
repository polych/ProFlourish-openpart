import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
// import { UrlSerializer } from '@angular/router';
// import { StandardUrlSerializer } from './modules/StandardUrlSerializer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UiModule } from './main-ui/ui.module';
import { MessageService } from './_helpers/message.service';
import { AutofocusDirective } from './_directives/autofocus.directive';
import { CandidateModule } from './candidate/candidate.module';
import { LoaderComponent } from './main-ui/ui-elements/loader/loader.component';
import { ClientModule } from './client/client.module';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [AppComponent, AutofocusDirective, LoaderComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CandidateModule,
    ClientModule
  ],

  // providers: [{ provide: UrlSerializer, useClass: StandardUrlSerializer }, MessageService],
  providers: [MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
