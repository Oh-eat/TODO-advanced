import { createAction, handleActions } from 'redux-actions';

const SET_TODO = 'todo/SET_TODO';
const SET_ENTIRE_TODO = 'todo/SET_ENTIRE_TODO';
const UNLOAD_TODO = 'todo/UNLOAD_TODO';

export const setTodo = createAction(SET_TODO, ({ type, value }) => ({
  type,
  value,
}));
export const setEntireTodo = createAction(SET_ENTIRE_TODO, payload => payload);
export const unloadTodo = createAction(UNLOAD_TODO);

const initialState = {
  todo: {
    id: null,
    title: '',
    body: '',
    dDay: null,
  },
};

const todo = handleActions(
  {
    [SET_TODO]: ({ todo }, { payload: { type, value } }) => ({
      todo: { ...todo, [type]: value },
    }),
    [SET_ENTIRE_TODO]: (state, { payload }) => ({ todo: { ...payload } }),
    [UNLOAD_TODO]: state => initialState,
  },
  initialState,
);

export default todo;
