import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/ideas';

export default function useAnnonces() {
  const dispatch = useDispatch();
  const idea = useSelector(state => state.selectedidea);
  const fetchAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchIdeas(page=1, perPage=18)), [dispatch]);
  const deleteIdea = useCallback(async (ideaId, payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.deleteIdea(ideaId, payload));
    } catch (err) {
      console.log("delete_idea_error", err);
    }
  }, [dispatch]);
  return {
    idea: idea,
    deleteIdea,
    fetchAnnonces
  };
}
