import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser : User = new User();

  onSubmit() {
    this.userCreated.emit({ user: this.newUser });

    this.newUser = new User();
  }

}
