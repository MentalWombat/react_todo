import React from 'react';
import { Box, Heading } from 'grommet';
import board from './board.jpg';

const Item = ({ text, color }) => (
  <Box
    background={color}
    elevation='large'
    margin='medium'
    pad='medium'
    height='small'
    width='small'
  >
    {text}
  </Box>
);

const ListItems = ({ items, color }) => (
  <Box>{items.map(i => <Item key={i.id} text={i.text} color={color} />)}</Box>
);

const List = ({ items, color, title }) => (
  <Box>
    <Heading color={color} textAlign='center'>{title}</Heading>
    <ListItems items={items} color={color} />
  </Box>
);

const Board = ({ data }) => (
  <Box
    background={{
      color: 'neutral-1',
      image: `url(${board})`,
      opacity: true,
      repeat: 'repeat',
      size: 'auto'
    }}
    direction='row'
    height='100vh'
    pad='large'
  >
    <List items={data.todo} color='neutral-2' title='To Do' />
    <List items={data.done} color='neutral-3' title='Done' />
  </Box>
);

export default Board;
