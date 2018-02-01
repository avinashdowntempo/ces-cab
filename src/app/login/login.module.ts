import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:      [ LoginscreenComponent ],
  declarations: [LoginscreenComponent]
})
export class LoginModule { }
