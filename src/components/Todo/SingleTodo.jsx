import React from 'react';
import PropTypes from 'prop-types';
import './SingleTodo.scss';

const SingleTodo = ({ index, content, onDelete, onCheck }) => (
  <div className="todo">
    <div className="todo__index">
      {Number(index) + 1}
.
    </div>
    <div className="todo__text">{content.text}</div>
    <div className="todo__actions">
      <button className="button is-white" onClick={() => onCheck(content.id)}>
        <i className={`fas fa-check-circle ${content.done ? 'active' : ''}`} />
      </button>
      <button
        className={`button is-white ${content.deleting ? 'is-loading' : ''}`}
        onClick={() => onDelete(content.id)}
      >
        <i className="fas fa-trash" />
      </button>
    </div>
  </div>
);

SingleTodo.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default SingleTodo;
