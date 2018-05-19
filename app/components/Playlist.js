import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  background-color: ${p => p.theme.color.contrast};
  padding: 0;
  margin: 0;
  border: 1px solid ${p => p.theme.color.white};
`;

const ListItem = styled.li`
  display: block;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid ${p => p.theme.color.white};
  white-space: nowrap;

  &:last-of-type {
    border: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.color.pink};
  }
`;

class Playlist extends Component {
  render() {
    return (
      <List>
        <ListItem>
        Darude - Sandstorm
        </ListItem>
        <ListItem>
        Darude - Sandstorm (Turbo Mega Remix)
        </ListItem>
        <ListItem>
        Darude - Sandstorm
        </ListItem>
        <ListItem>
        Darude - Sandstorm (Turbo Mega Remix)
        </ListItem>
        <ListItem>
        Darude - Sandstorm
        </ListItem>
        <ListItem>
        Darude - Sandstorm
        </ListItem>
        <ListItem>
        Darude - Sandstorm (Turbo Mega Remix)
        </ListItem>
        <ListItem>
        Darude - Sandstorm (Turbo Mega Remix)
        </ListItem>
        <ListItem>
        Darude - Sandstorm
        </ListItem>
      </List>
    );
  }
}

export default Playlist;
