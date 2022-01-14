import React from 'react';

import { StyledMenuBar, HomeLi, Li, MoreVisibleLi, HomeA, A } from './style';

export default function MenuBar() {
  return (
    <StyledMenuBar>
      <HomeLi>
        <HomeA>홈</HomeA>
      </HomeLi>
      <Li>
        <A>채용</A>
      </Li>
      <Li>
        <A>이벤트</A>
      </Li>
      <MoreVisibleLi>
        <A>직군별 연봉</A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>이력서</A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>커뮤니티</A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>프리랜서</A>
      </MoreVisibleLi>
      <MoreVisibleLi>
        <A>AI 합격예측</A>
      </MoreVisibleLi>
    </StyledMenuBar>
  );
}
