import React from 'react';
import { Grommet } from 'grommet';
import theme from './theme';
import Board from './Board';

const data = {
  todo: [
    {
      id: 3,
      text: 'Learn React'
    },
    {
      id: 4,
      text: 'Paint walls'
    },
    {
      id: 5,
      text: 'Read a book'
    }
  ],
  done: [
    {
      id: 1,
      text: 'Walk the dog'
    },
    {
      id: 2,
      text: 'Buy a book'
    }
  ]
};

const App = () => {
  return (
    <Grommet theme={theme}>
      <Board data={data} />
    </Grommet>
  );
}

export default App;
