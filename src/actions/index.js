// add new todo action
export const addTodo = (newTodo) => ({
  type: 'ADD_TODO',
  payload: {
    id: Math.random().toString(),
    title: newTodo,
  },
});

// delete todo action

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});

// update todo action

export const editTodo = (todoId, todo) => ({
  type: 'EDIT_TODO',
  payload: {
    id: todoId,
    title: todo,
  },
});
