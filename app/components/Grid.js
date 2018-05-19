// @flow
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 1rem;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  flex: ${p => (p.noflex ? 'initial' : 1)};

  margin: 0.5rem 0.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;

  flex: ${p => (p.noflex ? 'initial' : 1)};

  margin: 0.5rem 0.5rem;
`;

export {
  Grid,
  Row,
  Column,
};
