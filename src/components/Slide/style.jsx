import styled from 'styled-components';

export const StyledSlide = styled.div`
  outline: none;
  width: 1060px;

  padding: 0 12px;
  box-sizing: content-box;

  position: relative;

  float: left;
  height: 100%;
  min-height: 1px;

  margin: 0;
  border: 0;
`;

export const ImageContainer = styled.div`
  transition: filter 0.4s ease-in-out 0s;
  filter: ${(props) => (props.focused ? 'brightness(100%)' : 'brightness(50%)')};
`;

export const Image = styled.img`
  border-radius: 4px;
`;

export const Information = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;

  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.focused ? '1' : '0')};
  text-align: left;
  left: 34px;
`;

export const Divider = styled.hr`
  display: block;
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;
  box-sizing: content-box;
`;

export const A = styled.a`
  margin: 6px 0 0 13px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
  height: 40px;
  padding: 6px 8px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 64px;
  text-decoration: none;
`;

export const Title = styled.h2`
  margin: 20px 20px 0px 20px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Description = styled.h3`
  margin: 0 20px;
  height: 44px;
  font-size: 14px;
  line-height: 1.64;
  font-weight: 500;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Span = styled.span`
  width: 100%;
  line-height: 1;
  display: inline-flex;
`;

export const Svg = styled.svg`
  height: 1em;
  fill: currentColor;
  flex-shrink: 0;
  overflow: hidden;
`;
