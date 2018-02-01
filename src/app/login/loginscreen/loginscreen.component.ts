import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cab-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  credentials = {username: undefined, password: undefined};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    window.alert(this.credentials.username + ' ' + this.credentials.password);
  }
}
