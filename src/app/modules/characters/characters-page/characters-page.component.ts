import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '@core/models/character.model';
import { Observable, take } from 'rxjs';
import { CharacterService } from '../services/character.service';
// import { Store } from '@ngrx/store';
// import { getFavoritesStateData } from '../../store/selectors/favorites.selectors';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  characters: CharacterModel[] = [];
  // characterFavorite$!: Observable<boolean>;

  constructor(
    private characterSvc: CharacterService
  ) // private store: Store<CharacterModel>
  {
    // this.characterFavorite$ = this.store.select(getFavoritesStateData);
  }

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
