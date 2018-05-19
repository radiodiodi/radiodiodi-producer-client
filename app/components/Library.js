import React, { Component } from 'react';
import styled from 'styled-components';
import SearchMD from 'react-icons/lib/md/search';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Search = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1rem;
`;

const SearchBar = styled.input`
  padding: 0.2rem 1.5rem;
  /* Master, please forgive me */
  height: 20px;
  background-color: ${p => p.theme.color.white};
  border-radius: 2px;
  border: 0;
  flex: 1;
`;

const SearchIcon = styled(SearchMD)`
  position: absolute;
  /* But I must go all out this time */
  top: 5px;
  left: 4px;
  color: ${p => p.theme.color.blue};
`;

class Library extends Component {
  render() {
    return (
      <Container>
        <Search>
          <SearchBar />
          <SearchIcon />
        </Search>
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
      </Container>
    );
  }
}

export default Library;
