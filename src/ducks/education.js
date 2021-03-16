const SET_DATA = 'cv-builder/education/SET_DATA';

export const setEducation = (payload) => ({
  type: SET_DATA,
  payload,
});

const initialState = [
  {
    name: '',
    program: '',
  },
];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return [
        ...state,
        {
          ...payload,
        },
      ];

    default:
      return state;
  }
};

export default reducer;
