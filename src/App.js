import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import uuid from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  // Tache effectué donc on la barre (ou l'inverse d'où le !event.completed)
  tacheEffectue = id => {
    this.setState({
      todos: this.state.todos.map(event => {
        if (event.id === id) {
          event.completed = !event.completed;
        }
        return event;
      })
    });
  };

  //Delete l'élement de la liste
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(event => event.id !== id)]
      })
    );
  };

  //Ajouter un élement
  //on utilise des requêtes HTTP au lieu de tout écrire à la main
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  };

  render() {
    // le this.state.todos nous permet de choisir l'objet state pour pouvoir le manipuler dans todos.js
    // on met tout ce qu'on veut afficher dans le render (il s'agit du squelette de l'interface)
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    tacheEffectue={this.tacheEffectue}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
