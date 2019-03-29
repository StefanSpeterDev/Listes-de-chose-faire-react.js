//Grace à l'extension react on peut créer le squelette très rapidement en tapant rce

import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#b3b3b3",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none" // le ? means si cst vrai alors on barre le titre et le : = else
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.tacheEffectue.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div> //On va parcourir l'Array todos contenu dans state et on va ressortir tous les titres
    );
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  tacheEffectue: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

//style bouton pour suppr une liste
const btnStyle = {
  background: "#ff0000",
  color: "#ffff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
