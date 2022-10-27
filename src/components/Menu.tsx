import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #7d6e83;
  color: white;
`;

const Menu: FC = () => {
  return (
    <Container>
      <span>Menu</span>
    </Container>
  );
};

export default Menu;
