import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CharactersPageComponent],
  imports: [CommonModule, CharactersRoutingModule, SharedModule],
})
export class CharactersModule {}
