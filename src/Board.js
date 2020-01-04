import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import board from './board.jpg';

const Item = ({ text, color }) => (
  <Box
    align="center"
    background={color}
    elevation="large"
    justify="center"
    margin="medium"
    pad="medium"
    height="small"
    width="small"
  >
    {text}
  </Box>
);

const ListItems = ({ items, color }) => (
  <Box>{items.map(i => <Item key={i.id} text={i.text} color={color} />)}</Box>
);

const List = ({ items, color, title }) => (
  <Box>
    <Heading color={color} textAlign="center">{title}</Heading>
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
    direction="row"
    height="100vh"
    pad="large"
  >
    <List items={data.todo} color="neutral-2" title="To Do" />
    <List items={data.done} color="neutral-3" title="Done" />
  </Box>
);

Board.propTypes = {
  data: PropTypes.objectOf(PropTypes.array).isRequired
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Board;
