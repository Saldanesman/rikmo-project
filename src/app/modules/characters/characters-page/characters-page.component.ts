import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '@core/models/character.model';
import { take } from 'rxjs';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  characters: CharacterModel[] = [];

  constructor(private characterSvc: CharacterService) {}

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  async getCharactersByQuery(): Promise<any> {
    this.characterSvc
      .getCharacters$()
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { results } = res;
          this.characters = [...this.characters, ...results];
        } else {
          this.characters = [];
        }
      });
  }
}
