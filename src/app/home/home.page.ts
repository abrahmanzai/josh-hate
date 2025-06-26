import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private firebaseService: FirebaseService) {
      this.firebaseService.creatDoc("name", "dude", "John");

  }

}
