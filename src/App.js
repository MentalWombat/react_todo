import React from 'react';
import { Grommet } from 'grommet';
import theme from './theme';
import Board from './Board';
import data from './data.json';

const App = () => (
  <Grommet theme={theme}>
    <Board data={data} />
  </Grommet>
);

export default App;
