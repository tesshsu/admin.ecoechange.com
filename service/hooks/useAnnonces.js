import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/ideas';

export default function useAnnonces() {
  const dispatch = useDispatch();
  const idea = useSelector(state => state.idea);
  const fetchIdeas = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchIdeas(page=1, perPage=18)), [dispatch]);
  const filterAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.filterIdeas(page=1, perPage=18)), [dispatch]);

  const create = useCallback(async (payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.create(payload));
    } catch (err) {
      console.log("create_idea_error", err);
    }
  }, [dispatch]);

  const deleteIdea = useCallback(async (ideaId, payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.deleteIdea(ideaId, payload));
    } catch (err) {
      console.log("delete_idea_error", err);
    }
  }, [dispatch]);

  const editIdea = useCallback(async (ideaId, selectedIdea) => {
    try {
      await dispatch(ANNONCES_ACTIONS.editIdea(ideaId, selectedIdea));
    } catch (err) {
      console.log("update_idea_error", err);
    }
  }, [dispatch]);

  const modifyIdea = useCallback(async (ideaId, payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.modifyIdea(ideaId, payload));
    } catch (err) {
      console.log("update_idea_error", err);
    }
  }, [dispatch]);


  const addPhoto = useCallback(async (ideaId, payload) => {
    try {
      return await dispatch(ANNONCES_ACTIONS.addPhoto(ideaId, payload));
    } catch (err) {
      console.log("add_idea_photo_error", err);
    }
  }, [dispatch]);

  const removePhoto = useCallback(async (ideaId, payload) => {
    try {
      return await dispatch(ANNONCES_ACTIONS.removePhoto(ideaId, payload));
    } catch (err) {
      console.log("add_idea_photo_error", err);
    }
  }, [dispatch]);

  return {
    idea: idea,
    create,
    addPhoto,
    removePhoto,
    editIdea,
    modifyIdea,
    deleteIdea,
    fetchIdeas,
    filterAnnonces
  };
}
