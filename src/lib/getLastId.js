export default todos =>
  todos.length > 0
    ? Math.max(
        ...todos.filter(todo => todo.state === 'new').map(todo => todo.id),
      ) + 1
    : 1;
