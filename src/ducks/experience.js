import { nanoid } from 'nanoid';

const SET_DATA = 'cv-builder/experience/SET_DATA';

export const setExperienceData = (payload) => ({
  type: SET_DATA,
  payload,
});

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return payload.map((ex) => ({ ...ex, id: nanoid() }));

    default:
      return state;
  }
};

export default reducer;
