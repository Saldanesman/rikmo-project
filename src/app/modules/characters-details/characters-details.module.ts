import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDetailsRoutingModule } from './characters-details-routing.module';

import { CharacterDetailsPageComponent } from './character-details-page/character-details-page.component';
import { CharacterService } from '../characters/services/character.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CharacterDetailsPageComponent],
  imports: [
    CommonModule,
    CharactersDetailsRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [CharacterService],
})
export class CharactersDetailsModule {}
