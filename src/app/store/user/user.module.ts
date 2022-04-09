import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('user', userReducer)
  ]
})
export class UserModule { }
