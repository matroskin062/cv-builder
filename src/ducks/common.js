const SET_DATA = 'cv-builder/common/SET_DATA';

export const setCommonData = (payload) => ({
  type: SET_DATA,
  payload,
});

const initialState = {
  firstName: '',
  lastName: '',
  position: '',
  phone: '',
  email: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
