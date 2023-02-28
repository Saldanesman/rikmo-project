import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/character.service';

@NgModule({
  declarations: [CharactersPageComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [CharacterService],
})
export class CharactersModule {}
