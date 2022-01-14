import styled from 'styled-components';

export const StyledMainBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 991px) {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding: 15px 0;
  }

  @media (max-width: 767px) {
    height: 60px;
    width: 100%;
    padding: 15px 20px;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
`;

export const Button = styled.button`
  margin-top: -2px;
  margin-right: 15px;
  background: none;
  border: none;

  box-sizing: border-box;
  overflow: visible;
  text-transform: none;
  cursor: pointer;
  line-height: inherit;
`;

export const Logo = styled.a`
  background-color: transparent;
  box-sizing: border-box;
  display: block;

  @media (min-width: 768px) and (max-width: 991px) {
    box-sizing: border-box;
    background-color: transparent;
    display: block;
    position: relative;
    float: left;
  }
`;

export const IMG = styled.img`
  width: 17px;
  height: 14px;
  object-fit: contain;
  vertical-align: middle;
  object-fit: contain;
`;

// font-family 미적용
export const Icon = styled.i`
  font-size: 17px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  font-family: 'icomoon';
  speak: none;
  font-size: 17px;

  ::before {
    content: 'wanted';
  }
`;
