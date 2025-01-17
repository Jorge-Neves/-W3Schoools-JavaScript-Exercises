import React, { FC } from 'react';
import styled from 'styled-components';

interface MenuProps {
  displayHandler: (value: boolean) => void;
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #7d6e83;
  color: white;
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 25px;
  right: 25px;
`;

const Menu: FC<MenuProps> = ({ displayHandler }) => {
  return (
    <Container>
      <CloseButton type="button" onClick={() => displayHandler(false)}>
        {' '}
        Close{' '}
      </CloseButton>
      <span>Menu</span>
    </Container>
  );
};

export default Menu;
