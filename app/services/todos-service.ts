'use strict';

angular.module('todoListWorkshopApp').service('todosService', () => {
  const todos = ['item1', 'item2', 'item3'];

  const getTodos = () => {
    return todos;
  };

  const addTodo = (value: string) => {
    todos.push(value);
  };

  return {
    getTodos: getTodos,
    addTodo: addTodo
  }
})
