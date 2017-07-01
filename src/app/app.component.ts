import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { id: 25, name: "Pablo", ussername: "pabloimrik17" },
    { id: 26, name: "Nick", ussername: "nickuser" },
    { id: 27, name: "Holly", ussername: "hollyuser" }
  ]
}
