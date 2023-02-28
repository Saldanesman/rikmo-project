import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CharacterModel } from '@core/models/character.model';
import { lastValueFrom, take } from 'rxjs';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent implements OnInit {
  characters: CharacterModel[] = [];

  constructor(
    // private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getCharactersByQuery();
  }

  // async getCharactersByQuery(): Promise<any> {
  //   this.characterSvc
  //     .getCharacters$()
  //     .pipe(take(1))
  //     .subscribe((res: any) => {
  //       console.log(res);
  //     });
  // }
}
