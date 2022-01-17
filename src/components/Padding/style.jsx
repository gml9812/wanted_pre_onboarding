import styled from 'styled-components';

export const Pad = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  height: 50px;

  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
  }

  @media (max-width: 767px) {
    height: 110px;
  }
`;
