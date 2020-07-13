import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { HeaderComponent } from './components/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material-module.ts/material-module.ts.module';
import { UserComponent } from './components/user/user.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { UserTypePipe } from './pipes/user-type.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    HeaderComponent,
    UserComponent,
    NopagefoundComponent,
    UserTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, RouterModule,
    MaterialModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
