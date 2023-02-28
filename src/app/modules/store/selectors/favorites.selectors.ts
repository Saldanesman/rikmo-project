import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesModuleState } from '../reducers';

export const getFavoritesModuleState =
  createFeatureSelector<FavoritesModuleState>('favoritesModuleState');

export const getFavoritesDraftState = createSelector(
  getFavoritesModuleState,
  (state: FavoritesModuleState) => state.favoriteData
);

export const getFavoritesStateData = createSelector(
  getFavoritesDraftState,
  (state) => state.favorite
);
