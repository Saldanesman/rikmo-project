import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, take } from 'rxjs';
import { CharacterService } from '../../characters/services/character.service';
import { CharacterModel } from '../../../core/models/character.model';

@Component({
  selector: 'app-character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss'],
})
export class CharacterDetailsPageComponent implements OnInit {
  character$!: Observable<CharacterModel>;
  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails$(id);
    });
  }

  onGoBack(): void {
    this.location.back();
  }
}
