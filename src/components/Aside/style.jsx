import styled from 'styled-components';

export const StyledAside = styled.aside`
  padding: 9px 0;
  margin: 0;
  box-sizing: border-box;
  display: block;
  border: 0;
`;

export const Ul = styled.ul`
  box-sizing: border-box;
  padding: 0;
  border: 0;
  list-style: none;
  height: 100%;
  margin: 0;
`;

export const LiSearch = styled.li`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

export const LiNoti = styled.li`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

export const LiAccount = styled.li`
  position: relative;
  vertical-align: middle;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;

  @media (min-width: 768px) and (max-width: 991px) {
    position: relative;
    height: 100%;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    margin-right: 0;
    display: none;
  }
  @media (max-width: 768px) {
    position: relative;
    height: 100%;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    margin-right: 0;
    display: none;
  }
`;

export const LiAside = styled.li`
  position: relative;
  height: 100%;
  vertical-align: middle;
  display: inline-flex;

  @media (min-width: 768px) and (max-width: 991px) {
    position: relative;
    height: 100%;
    vertical-align: middle;
    display: none;
  }
  @media (max-width: 768px) {
    position: relative;
    height: 100%;
    vertical-align: middle;
    display: none;
  }

  ::before {
    display: block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;

export const LiHiddenMenu = styled.li`
  @media (min-width: 1200px) {
    display: none;
    position: relative;
    height: 100%;
    vertical-align: middle;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    display: none;
    position: relative;
    height: 100%;
    vertical-align: middle;
  }
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

export const SearchButton = styled.button`
  list-style: none;
  box-sizing: border-box;
  font: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  font-family: inherit;
  margin: 0;
  border: 0;
  background: none;
  height: 100%;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  margin-top: 5px;

  @media (min-width: 768px) and (max-width: 991px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    font-family: inherit;
    border: 0;
    background: none;
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: relative;
    margin: 0;
  }
  @media (max-width: 767px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    cursor: pointer;
    font-family: inherit;
    border: 0;
    background: none;
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: relative;
    margin: 0;
  }
`;

export const NotiButton = styled.button`
  list-style: none;
  box-sizing: border-box;
  font: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  font-family: inherit;
  margin: 0;
  border: 0;
  background: none;
  height: 100%;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  margin-right: 10px;
  margin-top: 5px;

  @media (min-width: 992px) and (max-width: 1199px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    font-family: inherit;
    margin: 0;
    border: 0;
    background: none;
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: relative;
    margin-top: 5px;
    margin-right: 5px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    font-family: inherit;
    border: 0;
    background: none;
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: relative;
    margin: 0;
  }
  @media (max-width: 767px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    font-family: inherit;
    border: 0;
    background: none;
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: relative;
    margin: 0;
  }
`;

export const AccountButton = styled.button`
  list-style: none;
  box-sizing: border-box;
  font: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  font-family: inherit;
  margin: 0;
  border: 0;
  background: none;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  padding: 0;
  margin-right: 11px;

  @media (min-width: 992px) and (max-width: 1199px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    font-family: inherit;
    margin: 0;
    border: 0;
    background: none;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: top;
    padding: 0;
    margin-right: 0;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    font-family: inherit;
    margin: 0;
    border: 0;
    background: none;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: top;
    padding: 0;
    margin-right: 0;
  }
  @media (max-width: 767px) {
    list-style: none;
    box-sizing: border-box;
    font: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    font-family: inherit;
    margin: 0;
    border: 0;
    background: none;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: top;
    padding: 0;
    margin-right: 0;
  }
`;

export const HiddenMenuButton = styled.button`
  box-sizing: border-box;
  font: inherit;
  overflow: visible;
  text-transform: none;
  cursor: pointer;
  font-family: inherit;
  margin: 0;
  border: 0;
  background: none;
  height: 100%;
  padding: 0 5px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  padding-left: 10px;
  margin-right: 0;
`;

export const AccountIcon = styled.div`
  list-style: none;
  text-transform: none;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const AccountImage = styled.div`
  list-style: none;
  font: inherit;
  text-transform: none;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
`;

export const Badge = styled.span`
  font-family: sans-serif;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  display: inline-flex;
  background: #36f;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  padding: 0 !important;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  background-color: rgb(51, 102, 255);
  width: 13px;
  height: 13px;
`;

export const A = styled.a`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;
  text-decoration: none;
`;
