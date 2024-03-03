/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(newtodo) {
    this.todo.push(newtodo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      this.todo.splice(indexOfTodo, 1); // Remove the todo item at the specified index
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todo.length) {
      this.todo[index] = updatedTodo; // Update the todo item at the specified index
    }
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      return this.todo[indexOfTodo]; // Return the todo item at the specified index
    }
    return null; // Return null if index is out of range
  }

  clear() {
    this.todo = []; // Clear all todos
  }
}

module.exports = Todo;
