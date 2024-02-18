import React from 'react';
import { Menu } from 'antd';

const { Item } = Menu;

const Navbar: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Item key="home">Accueil</Item>
      <Item key="about">À propos</Item>
      <Item key="contact">Contact</Item>
    </Menu>
  );
};

export default Navbar;

