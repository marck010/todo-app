import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import './App.css';
import AppBar from './layout/app-bar';
import store from './store';
import TodoList from './todo-list/todo-list';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  }
}));


function App() {
  return (
    <Provider store={store}>
      <div className="App" >
        <AppBar></AppBar>
        <br></br>
        <br></br>
        <div className={useStyles.root}>
          <TodoList />
        </div>
      </div>
    </Provider>


  );
}

export default App;
