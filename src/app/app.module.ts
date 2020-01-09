import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItemCreateComponent } from './item-create/item-create.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginTaskbarComponent } from './login/login-taskbar/login-taskbar.component';
import { ItemDeleteComponent } from './item-delete/item-delete.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { AuthInterceptor } from './jwt/auth-interceptor';
import { AuthGuard } from './guard/auth-guard';
import { Permissions } from './guard/permission';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemCreateComponent,
    LoginComponent,
    RegisterComponent,
    LoginTaskbarComponent,
    ItemDeleteComponent,
    ItemEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    Permissions, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
