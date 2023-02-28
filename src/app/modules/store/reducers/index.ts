import { campaignReducer, CharacterState } from './favorites.reducer';
import * as AppState from '../../../store/app.state';
import { ActionReducerMap } from '@ngrx/store';

export interface FavoritesModuleState {
  favoriteData: CharacterState;
}

export interface State extends AppState.State {
  favoritesModuleState: FavoritesModuleState;
}

export const favortitesReducers: ActionReducerMap<FavoritesModuleState> = {
  favoriteData: campaignReducer,
};
