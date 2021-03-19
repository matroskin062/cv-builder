import { nanoid } from 'nanoid';

const SET_DATA = 'cv-builder/education/SET_DATA';
const EDIT_DATA = 'cv-builder/education/EDIT_DATA';

export const setEducation = (payload) => ({
  type: SET_DATA,
  payload,
});

export const editEducation = (payload) => ({
  type: EDIT_DATA,
  payload,
});

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA: {
      return payload.map((ed) => ({ ...ed, id: nanoid() }));
    }
    default:
      return state;
  }
};

export default reducer;
