import React from 'react';

import { StyledMainBar, Container, Button, Logo, IMG, Icon } from './style';
import { iconMenu, wantedLogo } from '../../assets';

export default function MainBar() {
  return (
    <StyledMainBar>
      <Container>
        <Button>
          <IMG src={iconMenu} />
        </Button>
        <Logo>
          <Icon src={wantedLogo} />
        </Logo>
      </Container>
    </StyledMainBar>
  );
}
