import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { id: 25, name: "Pablo", username: "pabloimrik17" },
    { id: 26, name: "Nick", username: "nickuser" },
    { id: 27, name: "Holly", username: "hollyuser" }
  ];

  activeUser;

  selectUser(user) {
    this.activeUser = user;
  }
}
