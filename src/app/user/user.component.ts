import { Component, signal , computed, input, Input, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../../DUMMY_USERS';
import { User } from './user.model';

const selectedIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[selectedIndex]);
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // setting with decorator
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: {
    id: string,
    avatar: string,
    name: string
  }
  @Output() select = new EventEmitter<string>();

  /* using signal
  avatar = input.required<string>()
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })*/
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  setSelectedImage() {
    //const selectedIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    //this.selectedUser = DUMMY_USERS[selectedIndex];
    this.select.emit(this.user.id);
  }
}
