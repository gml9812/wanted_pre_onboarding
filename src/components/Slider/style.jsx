import styled from 'styled-components';

export const Main = styled.main`
  @media (min-width: 1200px) {
    padding-top: 25px;
    background-color: #fff;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export const TopBanner = styled.div`
  @media (min-width: 1200px) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    position: relative;
    overflow: hidden;
    height: auto;
  }
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  position: relative;
  overflow: hidden;
`;

export const StyledSlider = styled.div`
  direction: ltr;
  unicode-bidi: isolate;
  margin: 0;
  padding: 0;
  border: 0;
  position: relative;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
`;

export const SlickList = styled.div`
  @media (min-width: 1200px) {
    box-sizing: border-box;
    border: 0;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0px 50px;
  }

  box-sizing: border-box;
  border: 0;
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0px 40px;
`;

// 여기 width 브라우저 크기 따라 동적으로 변해야함
export const SlickTrack = styled.div`
  opacity: 1;
  width: 46827px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  position: relative;
  left: 0;
  top: 0;
  display: block;
  opacity: 1;
`;

export const LeftButton = styled.button`
  @media (min-width: 1200px) {
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
  }
  display: none;
`;

export const RightButton = styled.button`
  @media (min-width: 1200px) {
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
  }
  display: none;
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
