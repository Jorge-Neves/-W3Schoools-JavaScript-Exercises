import React, { FC } from 'react';
import styled from 'styled-components';

interface MenuIconProps {
  displayHandler: (value: boolean) => void;
}

const Icon = styled.button`
  position: absolute;
  z-index: 10;
  top: 25px;
  left: 25px;
`;

const MenuIcon: FC<MenuIconProps> = ({ displayHandler }) => {
  return (
    <>
      <Icon type="button" onClick={() => displayHandler(true)}>
        {' '}
        Menu{' '}
      </Icon>
    </>
  );
};

export default MenuIcon;
