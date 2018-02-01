import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRouting } from './login.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRouting,
    NgbModule,
    FormsModule
  ],
  exports:      [ LoginscreenComponent ],
  declarations: [LoginscreenComponent]
})
export class LoginModule { }
