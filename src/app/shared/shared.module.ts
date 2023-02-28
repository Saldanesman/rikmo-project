import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [NavBarComponent, CharacterCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, CharacterCardComponent],
})
export class SharedModule {}
