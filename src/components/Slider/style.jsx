import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 75px;
  background-color: #fff;
  box-sizing: border-box;
`;

export const StyledSlider = styled.div`
  height: auto;
  position: relative;
  overflow: hidden;
`;

export const SlickList = styled.div`
  padding: 0px 50px;
`;

export const SlickTrack = styled.div`
  opacity: 1;
  width: 46827px;
  left: 0;
  top: 0;
`;

export const LeftButton = styled.button`
  left: calc((100% - 1210px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  border: 0;
`;

export const RightButton = styled.button`
  right: calc((100% - 1200px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  border: 0;
`;

export const Span = styled.span`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  font-size: 16px;
`;

export const Svg = styled.svg`
  overflow: hidden;
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  font-size: inherit;
`;
