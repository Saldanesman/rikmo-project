import { createReducer, on } from '@ngrx/store';
import { CharacterModel } from '../../../core/models/character.model';
import { AddToFavorite, FavoritesAction } from '../actions/favorites.actions';

export interface CharacterState {
  character: CharacterModel;
  favorite: boolean;
}

export const initialCharacter: CharacterModel = {
  id: 0,
  name: '',
  image: '',
  species: '',
  gender: '',
  created: '',
  status: '',
};

export const initialState = {
  character: initialCharacter,
  favorite: false,
};

export const favoritesReducerFunctions: Record<
  string,
  (state: CharacterState, payload: any) => CharacterState
> = {
  [FavoritesAction.SET_FAVORITE]: (_state, { id }): CharacterState => {
    return {
      ..._state,
    };
  },
};

export const campaignReducer = createReducer<CharacterState>(
  initialState,
  on(AddToFavorite, favoritesReducerFunctions[FavoritesAction.SET_FAVORITE])
);
