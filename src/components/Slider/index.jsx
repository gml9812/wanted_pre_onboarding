import React, { useCallback, useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

import { Slide } from '..';
import {
  Main,
  TopBanner,
  StyledSlider,
  SlickList,
  SlickTrack,
  LeftButton,
  RightButton,
  Span,
  Svg,
} from './style';
import { SLIDE_LIST, SLIDE } from '../../constants';

const SLIDE_COUNT = Object.keys(SLIDE_LIST).length;
let slideStart = SLIDE.START;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideSize, setSlideSize] = useState(SLIDE.LENGTH); // resize 리스너 test
  const [readyToClick, setReadyToClick] = useState(true);
  const slideRef = useRef(null);

  const transitionOn = () => {
    slideRef.current.style.transition = `transform ${SLIDE.DELAY}ms ease 0s`;
  };

  const transitionOff = () => {
    slideRef.current.style.transition = '';
  };

  const NextSlide = useCallback(() => {
    if (currentSlide >= SLIDE_COUNT) {
      transitionOff();
      setCurrentSlide(0);
      return;
    }

    transitionOn();
    setCurrentSlide(currentSlide + 1);
  }, [currentSlide]);

  const PrevSlide = useCallback(() => {
    if (currentSlide < 0) {
      transitionOff();
      setCurrentSlide(SLIDE_COUNT - 1);
      return;
    }

    transitionOn();
    setCurrentSlide(currentSlide - 1);
  }, [currentSlide]);

  const slideTo = useCallback(
    (index) => {
      slideRef.current.style.transform = `translate3d(-${
        slideStart + index * slideSize
      }px, 0px, 0px)`;
    },
    [slideSize],
  );

  // 임시로 setTimeout 사용해 딜레이 부여
  const handleLeftButtonClick = () => {
    if (!readyToClick) return;
    setReadyToClick(false);
    PrevSlide();
    setTimeout(() => {
      setReadyToClick(true);
    }, SLIDE.DELAY + 100);
  };

  const handleRightButtonClick = () => {
    if (!readyToClick) return;
    setReadyToClick(false);
    NextSlide();
    setTimeout(() => {
      setReadyToClick(true);
    }, SLIDE.DELAY + 100);
  };

  // resize 테스트
  const handleResize = throttle(() => {
    const windowWidth = window.innerWidth;
    const frontSlideNum = Math.floor(SLIDE_COUNT / 2);

    if (windowWidth > 1200) {
      slideStart = (3 * SLIDE.LENGTH - windowWidth) / 2 + 50 + SLIDE.LENGTH * frontSlideNum;
      setSlideSize(SLIDE.LENGTH);
      return;
    }
    slideStart =
      (3 * (windowWidth - 97) - windowWidth) / 2 + 40 + (windowWidth - 97) * frontSlideNum;
    setSlideSize(windowWidth - 97);
  }, 200);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    slideTo(currentSlide);

    if (currentSlide >= SLIDE_COUNT) {
      slideRef.current.ontransitionend = () => {
        NextSlide();
        slideRef.current.ontransitionend = null;
      };
    } else if (currentSlide < 0) {
      slideRef.current.ontransitionend = () => {
        PrevSlide();
        slideRef.current.ontransitionend = null;
      };
    }

    const timeout = setTimeout(() => {
      NextSlide();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [slideTo, NextSlide, PrevSlide, currentSlide]);

  // SlideTrack, Slides에 임시로 windowSize 부여
  return (
    <Main>
      <TopBanner>
        <StyledSlider>
          <SlickList>
            <SlickTrack ref={slideRef} slideSize={slideSize}>
              <SlideList slides={SLIDE_LIST} currentSlide={currentSlide} slideSize={slideSize} />
            </SlickTrack>
          </SlickList>
          <LeftButton onClick={handleLeftButtonClick}>
            <Span>
              <Svg viewBox="0 0 18 18">
                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
              </Svg>
            </Span>
          </LeftButton>
          <RightButton onClick={handleRightButtonClick}>
            <Span>
              <Svg viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
              </Svg>
            </Span>
          </RightButton>
        </StyledSlider>
      </TopBanner>
    </Main>
  );
}

// 임시로 slideSize 부여
function SlideList({ slides, currentSlide, slideSize }) {
  const slideKeys = Object.keys(slides);
  const front = slideKeys.slice(0, SLIDE_COUNT / 2);
  const back = slideKeys.slice(SLIDE_COUNT / 2);

  const slideList = [...back, ...slideKeys, ...front];

  const isFocused = (idx) => {
    const realIndex = Number(idx) - Math.floor(SLIDE_COUNT / 2) - 1;

    if (currentSlide === SLIDE_COUNT && realIndex === 0) {
      return true;
    }
    if (currentSlide === -1 && realIndex === SLIDE_COUNT - 1) {
      return true;
    }
    return realIndex === currentSlide;
  };

  return slideList.map((key, idx) => (
    <Slide
      index={idx}
      focused={isFocused(idx)}
      slideSize={slideSize}
      img={slides[key].image}
      title={slides[key].title}
      description={slides[key].description}
    />
  ));
}
