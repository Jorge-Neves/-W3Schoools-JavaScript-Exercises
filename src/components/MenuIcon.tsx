import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #7d6e83;
`;

const MenuIcon: FC = () => {
  return (
    <Container>
      <span>Menu</span>
    </Container>
  );
};

export default MenuIcon;
