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
  box-sizing: border-box;
  overflow: visible;
  text-transform: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  margin-top: -2px;
  margin-right: 15px;
`;

export const Logo = styled.a`
  box-sizing: border-box;
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;

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

export const Icon = styled.img`
  width: 74.38px;
  height: 16.8px;
`;
