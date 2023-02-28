import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsPageComponent } from './character-details-page/character-details-page.component';

const routes: Routes = [{ path: '', component: CharacterDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersDetailsRoutingModule {}
