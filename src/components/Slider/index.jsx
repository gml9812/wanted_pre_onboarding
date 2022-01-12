import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Slide } from '..';
import {
  Container,
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

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const transitionOn = () => {
    slideRef.current.style.transition = `transform ${SLIDE.DELAY}ms ease 0s`;
  };

  const transitionOff = () => {
    slideRef.current.style.transition = '';
  };

  const slideTo = (index) => {
    slideRef.current.style.transform = `translate3d(-${
      SLIDE.START + index * SLIDE.LENGTH
    }px, 0px, 0px)`;
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

  useEffect(() => {
    slideTo(currentSlide);
    // 넘어갈때 따닥 누르면(NextSlide 여러번 겹쳐 사용하면) 슬라이드 진행하다가 다시 튕겨지듯 돌아오는 현상 나옴.
    // 실제 원티드 사이트에서는 연타해도 transition 다 끝나야 넘어가진다.
    if (currentSlide >= SLIDE_COUNT) {
      slideRef.current.ontransitionend = () => {
        NextSlide();
        slideRef.current.ontransitionend = null;
      };
    }
    if (currentSlide < 0) {
      slideRef.current.ontransitionend = () => {
        PrevSlide();
        slideRef.current.ontransitionend = null;
      };
    }
    const timeout = setTimeout(() => {
      NextSlide();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [NextSlide, PrevSlide, currentSlide]);

  return (
    <Container>
      <StyledSlider>
        <SlickList>
          <SlickTrack ref={slideRef}>
            <SlideList slides={SLIDE_LIST} currentSlide={currentSlide} />
          </SlickTrack>
        </SlickList>
        <LeftButton onClick={PrevSlide}>
          <Span>
            <Svg viewBox="0 0 18 18">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
            </Svg>
          </Span>
        </LeftButton>
        <RightButton onClick={NextSlide}>
          <Span>
            <Svg viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
            </Svg>
          </Span>
        </RightButton>
      </StyledSlider>
    </Container>
  );
}

function SlideList({ slides, currentSlide }) {
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
      img={slides[key].image}
      title={slides[key].title}
      description={slides[key].description}
    />
  ));
}
