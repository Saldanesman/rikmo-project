import { Component, Input } from '@angular/core';
import { CharacterModel } from '../../../core/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character: CharacterModel = {
    id: 0,
    name: '',
    image: '',
    species: '',
    gender: '',
    created: '',
    status: '',
  };
}
