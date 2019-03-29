import React, { Component } from "react";
import PropTypes from "prop-types";
export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }); // revient au même que title: event.target.value
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" }); //va reset le champ une fois un nvl élément ajouté
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Ajouter un objectif..."
          style={{ flex: "10", padding: "5px", marginBottom: "10px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Ajouter"
          className="btn"
          style={{ flex: "1", marginBottom: "10px" }}
        />
      </form>
    );
  }
}
//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
