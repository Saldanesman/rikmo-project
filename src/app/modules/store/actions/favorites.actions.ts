import { createAction, props } from '@ngrx/store';

export enum FavoritesAction {
  SET_FAVORITE = 'SET_FAVORITE',
}

export const AddToFavorite = createAction(
  FavoritesAction.SET_FAVORITE,
  props<{ id: number }>()
);
