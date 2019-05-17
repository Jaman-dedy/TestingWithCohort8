import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Todos.scss';
import Input from '../common/Input/Input';
import SingleTodo from './SingleTodo';
import {
  addTodo,
  deleteTodo,
  setAddingTodo,
  setDeletingTodo,
  setTodoInput,
  checkTodo,
  clearTodo,
} from '../../actions';

export class Todos extends Component {
  addNewTodo = () => {
    const { onAddTodo, todoForm, onAddingTodo, onClearTodo } = this.props;
    if (todoForm.text) {
      onAddingTodo(true);
      setTimeout(() => {
        onAddTodo(todoForm);
        onAddingTodo(false);
        onClearTodo();
      }, 500);
    }
  };

  deleteTodoById = id => {
    const { onDeleteTodo, onDeletingTodo } = this.props;
    onDeletingTodo(id);
    setTimeout(() => {
      onDeleteTodo(id);
    }, 500);
  };

  checkTodoById = id => {
    const { onCheckTodo } = this.props;
    onCheckTodo(id);
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.addNewTodo();
    }
  };

  renderTodosList = () => {
    const { todosList } = this.props;
    return todosList.map((todo, index) => (
      <SingleTodo
        index={index}
        onCheck={this.checkTodoById}
        onDelete={this.deleteTodoById}
        key={todo.id}
        content={todo}
      />
    ));
  };

  render() {
    const { handleInput, todoForm, adding } = this.props;
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div className="box todos-box">
                  <h1 className="title has-text-centered">My Todos</h1>
                  <div className="columns">
                    <div className="column">
                      <Input
                        className="input is-rounded"
                        placeholder="Enter your todo"
                        name="text"
                        onChange={handleInput}
                        value={todoForm.text}
                        onKeyDown={this.handleKeyDown}
                      />
                    </div>
                    <div className="column is-3">
                      <button
                        id="btn-add"
                        className={`button is-fullwidth is-rounded is-info ${
                          adding ? 'is-loading' : ''
                        }`}
                        onClick={this.addNewTodo}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  {this.renderTodosList()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Todos.propTypes = {
  adding: propTypes.bool.isRequired,
  todoForm: propTypes.object.isRequired,
  todosList: propTypes.array.isRequired,
  onAddTodo: propTypes.func.isRequired,
  onAddingTodo: propTypes.func.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
  onDeletingTodo: propTypes.func.isRequired,
  onCheckTodo: propTypes.func.isRequired,
  onClearTodo: propTypes.func.isRequired,
  handleInput: propTypes.func.isRequired,
};

const mapStateToProps = ({ adding, todoForm, todosList }) => ({
  adding,
  todoForm,
  todosList,
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: payload => dispatch(addTodo(payload)),
  onAddingTodo: payload => dispatch(setAddingTodo(payload)),
  onDeleteTodo: payload => dispatch(deleteTodo(payload)),
  onDeletingTodo: payload => dispatch(setDeletingTodo(payload)),
  onCheckTodo: payload => dispatch(checkTodo(payload)),
  onClearTodo: () => dispatch(clearTodo()),
  handleInput: ({ target }) => dispatch(setTodoInput(target)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);
