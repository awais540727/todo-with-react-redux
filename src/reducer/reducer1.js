// inatialize the state
export const initialState = {
  todoList: [],
};

// reducer Adding new todo
const addTodo = (state, newTodo) => {
  const { title, id } = newTodo;
  return {
    ...state,
    todoList: [
      ...state.todoList,
      {
        id: id,
        title: title,
      },
    ],
  };
};

// reducer for delete todo

const deleteTodo = (state, todoId) => {
  const newState = state.todoList.filter(
    (todo) =>
      // console.log('test', todo);
      todo.id !== todoId
  );
  return {
    ...state,
    todoList: newState,
  };
};

// reducer for Update todo

const editTodo = (state, updateTodo) => {
  const newState = state.todoList.map((todo) => {
    if (todo.id === updateTodo.id) {
      return {
        title: updateTodo.title,
      };
    }
    return todo;
  });
  return {
    ...state,
    todoList: newState,
  };
};

// Reducer cases for Add,delete and Update

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.payload);
    case 'DELETE_TODO':
      return deleteTodo(state, action.payload);
    case 'EDIT_TODO':
      return editTodo(state, action.payload);
    default:
      return state;
  }
};

export default TodoReducer;
