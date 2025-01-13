import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {AppRoutingModule} from "./app.routes";
import {AuthInterceptor} from "./shared/interceptor/auth.interceptor";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
        provideHttpClient(),
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

    ],


    bootstrap: []
})
export class AppModule {
}
