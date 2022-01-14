import styled from 'styled-components';

export const Navigation = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
  padding-right: initial;
  box-sizing: border-box;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  border: 0;

  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1060px;

  @media (min-width: 1200px) {
    height: 50px;
    margin: 0 auto;
    width: 87.72%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
    margin: 0 auto;
    height: 50px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    margin: 0 auto;
    height: 110px;
  }

  @media (max-width: 767px) {
    height: 110px;
  }
`;

export const Menus = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  flex-wrap: wrap;

  box-sizing: border-box;
`;
