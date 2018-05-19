import styled from 'styled-components';

const Button = styled.a`
  background-color: ${p => p.theme.color.contrast};
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.color.pink};
  }
`;

export default Button;
