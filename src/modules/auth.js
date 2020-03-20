import { handleActions, createAction } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE = 'auth/INITIALIZE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ type, key, value }) => ({ type, key, value }),
);
export const initialize = createAction(INITIALIZE, type => type);

const initialState = {
  login: {
    username: '',
    password: '',
  },
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { type, key, value } }) => ({
      ...state,
      [type]: { ...state[type], [key]: value },
    }),
    [INITIALIZE]: (state, { payload: type }) => {
      if (!type) return initialState;
      return { ...state, [type]: { ...initialState[type] } };
    },
  },
  initialState,
);

export default auth;
