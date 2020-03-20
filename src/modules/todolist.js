import { handleActions, createAction } from 'redux-actions';
import todoListGenerator from '../lib/todoListGenerator';
import getLastId from '../lib/getLastId';
import nextTodoState from '../lib/nextTodoState';

const INSERT = 'todolist/INSERT';
const UPDATE = 'todolist/UPDATE';
const REMOVE = 'todolist/REMOVE';
const REVERSE_TODO = 'todolist/REVERSE_TODO';

export const insert = createAction(INSERT, todo => todo);
export const update = createAction(UPDATE, todo => todo);
export const remove = createAction(REMOVE, id => id);
export const reverseTodo = createAction(REVERSE_TODO, ({ id, name }) => ({
  id,
  name,
}));

const initialState = {
  todos: todoListGenerator(0),
};

const todolist = handleActions(
  {
    [INSERT]: ({ todos }, { payload: todo }) => {
      const { title, body, dDay } = todo;
      const lastId = getLastId(todos);
      const newTodo = {
        id: lastId,
        title,
        body,
        dDay,
        done: false,
        createdDate: new Date(),
        selected: false,
        state: 'new',
      };
      return { todos: [newTodo, ...todos] };
    },
    [UPDATE]: ({ todos }, { payload: todo }) => ({
      todos: todos.map(t =>
        t.id === todo.id
          ? {
              ...t,
              ...todo,
              state: nextTodoState(t),
            }
          : t,
      ),
    }),
    [REMOVE]: ({ todos }, { payload: id }) => ({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, state: 'remove' } : todo,
      ),
    }),
    [REVERSE_TODO]: ({ todos }, { payload: { id, name } }) => ({
      todos: todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              [name]: !todo[name],
              state: name === 'done' ? nextTodoState(todo) : todo.state,
            }
          : todo,
      ),
    }),
  },
  initialState,
);

export default todolist;
