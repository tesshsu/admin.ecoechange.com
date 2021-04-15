import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as FAVORITE_ACTIONS from '../actions/favorites';

export default function useFavorites() {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.selectedFavorite);
  const list = useCallback(() => {
    dispatch(FAVORITE_ACTIONS.fetchFavorites(page = 1, perPage = 18))
  }, [dispatch]);

  const create = useCallback(async (payload) => {
    try {
      await dispatch(FAVORITE_ACTIONS.create(payload));
    } catch (err) {
      console.log("create_favorite_error", err);
    }
  }, [dispatch]);

  const deleteFavorite = useCallback(async (favoriteId, payload) => {
    try {
      await dispatch(FAVORITE_ACTIONS.deleteFavorite(favoriteId, payload));
    } catch (err) {
      console.log("delete_favorite_error", err);
    }
  }, [dispatch]);

  return {
    favorite: favorite,
    create,
    deleteFavorite,
    list
  };
}
