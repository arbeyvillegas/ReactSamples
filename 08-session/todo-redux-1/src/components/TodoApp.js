import React, { Component } from 'react';
import * as actionTypes from '../actions/actionTypes';

let nextTodoId = 0;
export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
            this.props.dispatch({
              type: actionTypes.ADD_TODO,
              text: 'Test',
              id: nextTodoId++
            });
          }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  };
}

// // See Section 8 for earlier `render()` example
// const render = () => {
//   ReactDOM.render(
//     // Render the TodoApp Component to the <div> with id 'root'
//     <TodoApp
//       todos={store.getState().todos}
//     />,
//     document.getElementById('root')

//   )
// };

// store.subscribe(render);
// render();