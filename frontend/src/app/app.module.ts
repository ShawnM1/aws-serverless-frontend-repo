import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent } from './user/users-list/users-list.component';
import { AngularMaterialModule } from './angular-material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';
import { usersReducer } from './store/reducers/users.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    StoreModule.forRoot({user: usersReducer}),
    EffectsModule.forRoot([UsersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
