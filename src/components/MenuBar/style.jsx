import styled from 'styled-components';

export const StyledMenuBar = styled.ul`
  height: inherit;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;

  box-sizing: border-box;
  list-style: none;

  @media (min-width: 992px) and (max-width: 1100px) {
    box-sizing: border-box;
    list-style: none;
    height: inherit;
    text-align: center;
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    list-style: none;
    height: inherit;
    text-align: center;
    margin: 0;
    justify-content: flex-start;
    margin-right: 30px;
  }

  @media (max-width: 767px) {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    list-style: none;
    height: inherit;
    margin: 0;
    text-align: left;
  }
`;

export const HomeLi = styled.li`
  display: none;

  @media (max-width: 767px) {
    height: inherit;
    display: inline-block;
    box-sizing: border-box;
    list-style: none;
  }
`;

export const Li = styled.li`
  height: inherit;
  display: inline-block;
  box-sizing: border-box;
  list-style: none;
`;

export const MoreVisibleLi = styled.li`
  height: inherit;
  display: inline-block;
  box-sizing: border-box;
  list-style: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HomeA = styled.a`
  ::after {
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    list-style: none;
    box-sizing: border-box;
    background-color: transparent;
    margin: 0;
    border: 0;
    text-decoration: inherit;
    cursor: pointer;
    color: inherit;
    position: relative;
    vertical-align: middle;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    display: inline-block;
    padding: 11px 10px 19px 20px;
  }
`;

export const A = styled.a`
  list-style: none;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;

  ::after {
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }

  @media (min-width: 992px) and (max-width: 1100px) {
    list-style: none;
    box-sizing: border-box;
    background-color: transparent;
    margin: 0;
    border: 0;
    text-decoration: inherit;
    cursor: pointer;
    color: inherit;
    position: relative;
    vertical-align: middle;
    line-height: 20px;
    font-weight: 600;
    display: inline-block;
    padding: 15px 0;
    font-size: 13px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    list-style: none;
    box-sizing: border-box;
    background-color: transparent;
    margin: 0;
    border: 0;
    text-decoration: inherit;
    cursor: pointer;
    color: inherit;
    position: relative;
    vertical-align: middle;
    line-height: 20px;
    font-weight: 600;
    display: inline-block;
    font-size: 13px;
    padding: 11px 10px 19px;
  }

  @media (max-width: 767px) {
    list-style: none;
    box-sizing: border-box;
    background-color: transparent;
    margin: 0;
    border: 0;
    text-decoration: inherit;
    cursor: pointer;
    color: inherit;
    position: relative;
    vertical-align: middle;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    display: inline-block;
    padding: 11px 10px 19px;
  }
`;
