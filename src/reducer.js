const initialState = {
  genreFilterIndex: 0,
};

export const ActionCreator = {
  applyGenreFilter: (genreFilterIndex) => {
    return {
      type: ActionType.APPLY_GENRE_FILTER,
      payload: genreFilterIndex,
    };
  },
};

export const ActionType = {
  APPLY_GENRE_FILTER: `APPLY_GENRE_FILTER`,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.APPLY_GENRE_FILTER:
      return Object.assign({}, state, {genreFilterIndex: action.payload});
  }
  return state;
}
