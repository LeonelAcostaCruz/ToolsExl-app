import { Component, inject } from '@angular/core';
import {FirestoreService } from './firestore.service';
import {InteractionService} from '../services/interaction.service';
import { IonIcon, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Models } from '../Models/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  constructor() {}
}
