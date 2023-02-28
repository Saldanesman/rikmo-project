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
  character: CharacterModel = {
    id: 0,
    name: '',
    image: '',
    species: '',
    gender: '',
    created: '',
    status: '',
  };

  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.characterSvc.getDetails$(id).subscribe((res: any) => {
        this.character = res;
      });
    });
  }

  onGoBack(): void {
    this.location.back();
  }
}
