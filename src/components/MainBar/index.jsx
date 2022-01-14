import React from 'react';

import { StyledMainBar, Container, Button, Logo, IMG, Icon } from './style';
import { iconMenu } from '../../assets';

export default function MainBar() {
  return (
    <StyledMainBar>
      <Container>
        <Button>
          <IMG src={iconMenu} />
        </Button>
        <Logo>
          <Icon />
        </Logo>
      </Container>
    </StyledMainBar>
  );
}
