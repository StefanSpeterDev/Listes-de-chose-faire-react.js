import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        tacheEffectue={this.props.tacheEffectue}
        delTodo={this.props.delTodo}
      />
    )); //Le "todo=" >>>> est une PROPS ce qui nous permets de use this.props.todo.title dans TodoItem.js
    //key={todo.id} permet de donner une clef propre à chaque élement et retire l'erreur généré
    //renvoie au fichier TodoItem.js et va print ce qu'il contient
  }
}
//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  tacheEffectue: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
