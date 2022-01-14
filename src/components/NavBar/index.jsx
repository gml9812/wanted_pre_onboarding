import React from 'react';

import { MainBar, MenuBar, Aside } from '..';
import { Navigation, Container, Menus } from './style';

export default function Navbar() {
  return (
    <Navigation>
      <Container>
        <Menus>
          <MainBar />
          <MenuBar />
          <Aside />
        </Menus>
      </Container>
    </Navigation>
  );
}
