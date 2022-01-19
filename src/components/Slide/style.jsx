import styled from 'styled-components';

export const StyledSlide = styled.div`
  @media (min-width: 1200px) {
    user-select: none;
    margin: 0;
    border: 0;
    float: left;
    height: 100%;
    min-height: 1px;
    display: block;
    position: relative;
    padding: 0 12px;
    box-sizing: content-box;
    width: 1060px;
  }
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  float: left;
  height: 100%;
  min-height: 1px;
  display: block;
  position: relative;
  width: ${(props) => props.slideSize}px;
`;

export const SlideDiv = styled.div`
  @media (min-width: 1200px) {
    padding: 0;
    border: 0;
    margin: 0;
  }

  margin: 20px 10px;
`;

export const SlideContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
  display: inline-block;
`;

export const ImageContainer = styled.div`
  transition: filter 0.4s ease-in-out 0s;
  filter: ${(props) => (props.focused ? 'brightness(100%)' : 'brightness(50%)')};

  @media (min-width: 992px) and (max-width: 1199px) {
    user-select: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    user-select: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
  @media (max-width: 767px) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
`;

export const AImage = styled.a`
  box-sizing: border-box;
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: inherit;
  cursor: pointer;
  color: inherit;
  @media (max-width: 1199px) {
    box-sizing: border-box;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: inherit;
    cursor: pointer;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  color: inherit;
  box-sizing: border-box;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  display: inline-block;
  -webkit-user-drag: none;
`;

export const Information = styled.div`
  @media (min-width: 1200px) {
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
  }

  user-select: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  text-align: center;
`;

export const Divider = styled.hr`
  @media (min-width: 1200px) {
    user-select: none;
    text-align: left;
    box-sizing: content-box;
    height: 1px;
    margin: 0;
    border: none;
    flex-shrink: 0;
    background-color: #ececec;
    display: block;
  }
  display: none;
`;

export const ADesc = styled.a`
  @media (min-width: 1200px) {
    text-align: left;
    background-color: transparent;
    border: 0;
    text-decoration: inherit;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    box-sizing: border-box;
    border-radius: 25px;
    cursor: pointer;
    padding: 6px 8px;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    color: #36f;
    margin: 6px 0 0 13px;
  }

  background-color: transparent;
  margin: 0;
  border: 0;
  text-decoration: inherit;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 25px;
  cursor: pointer;
  padding: 6px 8px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
`;

export const Title = styled.h2`
  @media (min-width: 1200px) {
    user-select: none;
    text-align: left;
    box-sizing: border-box;
    font-family: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    margin-top: 20px;
    font-weight: 700;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
  user-select: none;
  text-align: center;
  box-sizing: border-box;
  font-family: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Description = styled.h3`
  @media (min-width: 1200px) {
    user-select: none;
    text-align: left;
    box-sizing: border-box;
    font-family: inherit;
    padding: 0;
    border: 0;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }

  user-select: none;
  text-align: center;
  box-sizing: border-box;
  font-family: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15;
  color: #666;
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
